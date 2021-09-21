import {isEmpty, isArray} from 'lodash';
import {sanitize} from '../../../utils/miscellaneous';
import Link from 'next/link'
const Footer = ({ footer, footerMenus }) => {

    return (
        <footer className="bg-black p-6 text-white">
            <div className="flex flex-wrap -mx-1 overflow-hidden">

                <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                    <div dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarOne)}} />
                </div>

                <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                    <div dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarTwo)}} />
                </div>

                <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                    { ! isEmpty( footerMenus ) && isArray( footerMenus ) ? (
                        <ul>
                            {footerMenus.map( footerMenu => (
                                <li key={footerMenu?.node?.id}>
                                    <Link href={footerMenu?.node?.path}>
                                        <a>
                                            {footerMenu?.node?.label}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                    

                </div>

            </div>
        </footer>
    )
}
 
export default Footer;