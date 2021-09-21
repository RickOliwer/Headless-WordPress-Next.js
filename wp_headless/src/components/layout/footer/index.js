import {isEmpty, isArray} from 'lodash';
import {sanitize} from '../../../utils/miscellaneous';
import Link from 'next/link'
import { getIconComponentsByName } from '../../../utils/icons-map';
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
            <div class="flex mt-8 mb-8 flex-wrap -mx-1 overflow-hidden">

                <div class="my-1 px-1 w-full overflow-hidden xl:w-1/2">
                    {footer.copyrightText ? footer.copyrightText : ''}
                </div>

                <div class="my-1 px-1 w-full overflow-hidden xl:w-1/2 flex justify-end">
                    { ! isEmpty( footer?.socialLinks ) && isArray( footer?.socialLinks ) ? (
                        <ul className="flex items-center">
                            { footer.socialLinks.map( socialLink => (
                                <li key={ socialLink?.iconName } className="ml-2" >
                                    <a href={socialLink?.iconUrl}>
                                        { getIconComponentsByName( socialLink?.iconName ) }
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : null }
                </div>

            </div>
        </footer>
    )
}
 
export default Footer;