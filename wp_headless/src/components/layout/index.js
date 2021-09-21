import Header from "./header";

const Layout = ({children, data}) => {
    console.log('my data', data);
    return ( 
        <div>
            <Header key="header" headerMenus={data?.menus?.headerMenus} />
            {children}
        </div>
     );
}
 
export default Layout;