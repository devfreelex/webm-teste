import styles from './appSelectInput.styles'
import template from './appSelectInput.template'

export default () => {

    const tagName = 'app-select'

    const state = {
        list:[
            {value:'val 1', id:1},
            {value:'val 2', id:2},
            {value:'val 3', id:3},
            {value:'val 3', id:3},
        ]
    }

    return {
        tagName,
        state,
        template,
        styles
    }
}