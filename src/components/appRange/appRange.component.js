import styles from './appRange.styles'
import template from './appRange.template'

import appInput from '../appInput/appInput.component'
import appList from '../appList/appList.component'

export default () => {

    const tagName = 'app-range'

    const state = {
        isSelected: false,
        value:'',
        list:[
            {id:1, range:'10km'},
            {id:1, range:'30km'},
            {id:1, range:'60km'},
            {id:1, range:'100km'},
        ]
    }

    const children = () => ({
        appInput,
        appList
    })

    return {
        state,
        tagName,
        template,
        styles,
        children
    }
}