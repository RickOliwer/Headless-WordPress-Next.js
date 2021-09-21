import * as SvgIconsComponent from '../components/icons'

/**
 * icons componen map
 * 
 * @param {string} name
 * @returns {*} 
 */
export const getIconComponentsByName = (name) => {
    const ComponentsMap = {
        facebook: SvgIconsComponent.FacebookFBrands,
        twitter: SvgIconsComponent.TwitterBrands,
        instagram: SvgIconsComponent.InstagramBrands,
        youtube: SvgIconsComponent.YoutubeBrands,

    }
    if ( name in ComponentsMap ) {
        const IconComponent = ComponentsMap[name];
        return <IconComponent />
    } else {
        return null
    }
}