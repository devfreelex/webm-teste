import styles from './appCarFilter.styles'
import template from './appCarFilter.template'

import appCheck from '../appCheck/appCheck.component'
import appPlace from '../appPlace/appPlace.component'
import appSelect from '../appSelect/appSelect.component'
import appSuperFilter from '../appSuperFilter/appSuperFilter.component'
import appClear from '../appClear/appClear.component'

export default () => {
    
    const tagName = 'app-car-filter'

    const state = {
        place: { isVisible: false }
    }

    const children = () => ({
        appCheck,
        appPlace,
        appSelect,
        appSuperFilter,
        appClear
    })

    return {
        tagName,
        state,
        template,
        styles,
        children
    }
}