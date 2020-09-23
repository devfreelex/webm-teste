import styles from './appTabs.styles'
import template from './appTabs.template'

import appSell from '../appSell/appSell.component'

export default () => {

    const tagName = 'app-tabs'

    const children = () => ({
        appSell
    })

    return {
        tagName,
        styles,
        template,
        children
    }
}