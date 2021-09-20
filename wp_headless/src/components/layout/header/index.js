import  {isEmpty} from 'lodash'
import Nav from "./nav";

const Header = ({headerMenus}) => {
    if( isEmpty(headerMenus) ){
        return null;
    }
    return ( 
        <header>
            <Nav headerMenus={headerMenus} />
        </header>
    );
}
 
export default Header;