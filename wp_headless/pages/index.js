import Head from 'next/head'
import Client from '../src/apollo/client'
import { GET_MENUS } from '../src/queries/get-menus'


export default function Home( {menus} ) {
  console.log('my menus', menus);
  return (
    <div>
      hello world
    
    </div>
  )
}




export async function getStaticProps(){
  const {data, loading, networkStatus} = await Client.query({
    query: GET_MENUS
  })

  console.warn( 'data', data );

  return {
    props: {
      menus: {
        headerMenus: data?.headerMenus?.edges,
        footerMenus: data?.footerMenus?.edges,
      }
      
    },
  }
}