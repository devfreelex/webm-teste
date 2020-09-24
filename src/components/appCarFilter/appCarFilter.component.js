import styles from './appCarFilter.styles'
import template from './appCarFilter.template'

import appCheck from '../appCheck/appCheck.component'
import appSelect from '../appSelectInput/appSelectInput.component'

export default () => {
    
    const tagName = 'app-car-filter'

    const children = () => ({
        appCheck,
        appSelect
    })

    return {
        tagName,
        template,
        styles,
        children
    }
}