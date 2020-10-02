import styles from './appMain.styles'
import template from './appMain.template'

import appHeader from '../appHeader/appHeader.component'
import appTabs from '../appTabs/appTabs.component'
import appVehicleList from '../appVehicleList/appVehicleList.component'

export default () => {
    const tagName = 'app-main'

    const children = () => ({
        appHeader,
        appTabs,
        appVehicleList
    })

    return {
        tagName,
        template,
        styles,
        children,
    }
}