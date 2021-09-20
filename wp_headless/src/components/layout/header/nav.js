import  {isEmpty} from 'lodash'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
const Nav = ({headerMenus}) => {

    if( isEmpty(headerMenus) ){
        return null;
    }

    console.log('headermenus', headerMenus);
    return ( 
        <nav>
            { headerMenus?.length ? (
                <ul>
                    { headerMenus?.map( menu => (
                    <li>
                        <Link key={menu?.node.id} href={menu?.node?.path}>
                            <a>{menu?.node?.label}</a>
                        </Link>
                    </li>
                
                    ))  }
                </ul>
            ) : null }
        </nav>
    );
}
 
export default Nav;