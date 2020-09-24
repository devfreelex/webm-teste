import template from './appList.template'
import styles from './appList.styles'

export default () => {

    const tagName = 'app-list'

    const state = {
        isSelected:false,
        value:'',
        list: [
            { value: 'val 1', id: 1 },
            { value: 'val 2', id: 2 },
            { value: 'val 3', id: 3 },
            { value: 'val 4', id: 4 },
            { value: 'val 5', id: 5 },
        ]
    }

    return {
        tagName,
        state,
        template,
        styles
    }
}