import template from './appInput.template'
import styles from './appInput.styles'

export default () => {

    const tagName = 'app-input'

    const state = {
        value:''
    }

    return {
        state,
        tagName,
        template,
        styles
    }
}