import styles from './appCarFilter.styles'
import template from './appCarFilter.template'

import appCheck from '../appCheck/appCheck.component'

export default () => {
    
    const tagName = 'app-car-filter'

    const children = () => ({
        appCheck
    })

    return {
        tagName,
        template,
        styles,
        children
    }
}