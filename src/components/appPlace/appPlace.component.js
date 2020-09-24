import styles from './appPlace.styles'
import template from './appPlace.template'

import appInput from '../appInput/appInput.component'
import appList from '../appList/appList.component'

export default () => {

    const tagName = 'app-place'

    const children = () => ({
        appInput,
        appList
    })

    return {
        tagName,
        template,
        styles,
        children
    }
}