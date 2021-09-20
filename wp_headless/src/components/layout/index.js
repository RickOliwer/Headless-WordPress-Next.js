import Header from "./header";

const Layout = ({children, data}) => {
    console.log('my data', data);
    return ( 
        <div>
            <Header headerMenus={data?.menus?.headerMenus} />
            {children}
        </div>
     );
}
 
export default Layout;