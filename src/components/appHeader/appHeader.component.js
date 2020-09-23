import styles from './appHeader.styles'
import template from './appHeader.template'

export default () => {

    const tagName = 'app-header'

    const state = {
        title:'Webmotors'
    }

    return {
        tagName,
        state,
        template,
        styles
    }
}