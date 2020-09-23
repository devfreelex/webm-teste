import styles from './appCheck.styles'
import template from './appCheck.template'

export default () => {

    const tagName = 'app-check'
    
    const state = {
        checked: true
    }

    return {
        tagName,
        state,
        template, 
        styles
    }
}