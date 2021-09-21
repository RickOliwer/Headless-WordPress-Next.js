import Head from 'next/head'
import Client from '../src/apollo/client'
import Layout from '../src/components/layout';
import { GET_MENUS } from '../src/queries/get-menus'


export default function Home({ data }) {
  
  return (
    <Layout key="layout" data={data} >
      content
    </Layout>
  )
}




export async function getStaticProps(){
  const {data, loading, networkStatus} = await Client.query({
    query: GET_MENUS
  })

  console.warn( 'data', data );

  return {
    props: {
      data: {
        header: data?.header || [],
        
        menus: {
          headerMenus: data?.headerMenus?.edges  || [],
          footerMenus: data?.footerMenus?.edges  || [],
        },
        footer: data?.footer  || [],
      }
      
    },
  }
}