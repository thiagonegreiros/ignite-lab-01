import { Injectable } from '@nestjs/common';
import slugify from 'slugify';
import { PrismaService } from '../database/prisma/prisma.service';

interface IProductParams {
  title: string;
}

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  listAllProducts() {
    return this.prisma.product.findMany();
  }

  getProductById(id: string) {
    return this.prisma.product.findUnique({
      where: {
        id,
      },
    });
  }

  async createProduct({ title }: IProductParams) {
    const slug = slugify(title, { lower: true });

    const productWithTheSameSlug = await this.prisma.product.findUnique({
      where: { slug },
    });

    if (productWithTheSameSlug) {
      throw new Error(`Product with slug ${slug} already exists`);
    }

    return this.prisma.product.create({
      data: {
        title,
        slug,
      },
    });
  }
}
