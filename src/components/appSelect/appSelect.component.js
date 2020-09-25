import template from './appSelect.template'
import styles from './appSelect.styles'

import appInput from '../appInput/appInput.component'
import appList from '../appList/appList.component'

export default () => {

    const tagName = 'app-select'

    const state = {
        list:[
            {id:1, value:'Val 1'},
            {id:1, value:'Val 1'},
            {id:1, value:'Val 1'},
            {id:1, value:'Val 1'},
            {id:1, value:'Val 1'},
        ]
    }

    const children = () => ({
        appInput,
        appList
    })

    return {
        tagName,
        state,
        template,
        styles,
        children
    }
}