import styles from './appCheck.styles'
import template from './appCheck.template'
import { store } from '../../store'

export default () => {

    const tagName = 'app-check'
    
    const state = {
        checked: false,
    }

    const events = ({on, query, methods}) => ({
        onCheckButton () {
            const checkButton = query('.btn-check')
            on('click', [checkButton], ({target}) => {
                methods.toggleCheck()
            })
        }
    })

    const methods = ({props, state}) => ({
        toggleCheck () {
            state.set({checked: !state.checked})
                
        }
    })

    return {
        tagName,
        state,
        template, 
        styles,
        events,
        methods,
    }
}