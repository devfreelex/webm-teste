import styles from './appCarFilter.styles'
import template from './appCarFilter.template'

import appCheck from '../appCheck/appCheck.component'
import appPlace from '../appPlace/appPlace.component'
import appRange from '../appRange/appRange.component'

export default () => {
    
    const tagName = 'app-car-filter'

    const children = () => ({
        appCheck,
        appPlace,
        appRange
    })

    return {
        tagName,
        template,
        styles,
        children
    }
}