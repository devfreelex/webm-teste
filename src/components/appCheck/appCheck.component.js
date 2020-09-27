import styles from './appCheck.styles'
import template from './appCheck.template'
import { store } from '../../store'

export default () => {

    const tagName = 'app-check'
    
    const state = {
        checked: false,
    }

    const hooks = ({ methods }) => ({
        beforeOnInit () {
            // methods.updateState()
        }
    })

    const events = ({on, query, methods}) => ({
        onCheckButton () {
            const checkButton = query('.btn-check')
            on('click', [checkButton], ({target}) => {
                methods.toggleCheck()
                methods.setType()
                methods.logState()
            })
        }
    })

    const methods = ({props, state}) => ({
        toggleCheck () {
            state.set({checked: !state.checked})
                
        },
        setType () {
            const { type } = props.get().object
            store.update( dataStore => {
                type === 'new' ? 
                    dataStore.vehicleType.new = !dataStore.vehicleType.new : 
                    dataStore.vehicleType.worn = !dataStore.vehicleType.worn 
            })

        },

        logState () { 
            console.log(store.get().vehicleType)
        }
    })

    return {
        tagName,
        state,
        template, 
        styles,
        events,
        methods,
        hooks
    }
}