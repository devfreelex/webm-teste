import styles from './appMain.styles'
import template from './appMain.template'

import appHeader from '../appHeader/appHeader.component'
import appTabs from '../appTabs/appTabs.component'

export default () => {

    const tagName = 'app-main'

    const children = () => ({
        appHeader,
        appTabs
    })

    return {
        tagName,
        template,
        styles,
        children
    }
}