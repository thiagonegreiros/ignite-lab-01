import { gql, useQuery } from "@apollo/client";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useGetProductsQuery, useMeQuery } from "../../graphql/generated/graphql";
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

function Home({ data }) {
  const { user } = useUser();
  const { data: me } = useMeQuery();
  //? Return query result by client side
  // const { data, loading, error } = useGetProductsQuery();

  return (
    <div>
      <h1>Hello {user ? user.name : "Hello"}</h1>
      <pre>
        {/* {JSON.stringify(data.products, null, 2)} */}
      </pre>
      <pre>
        Me: {JSON.stringify(me, null, 2)}
      </pre>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  )
}
 
//? Return query result by server side
export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    //getServerPageGetProducts({}, ctx)
    return {
      props: {}
    }
  }
});

//? Adding apollo client by page
export default withApollo(
  ssrGetProducts.withPage()(Home)
);