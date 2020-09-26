import template from './appSelect.template'
import styles from './appSelect.styles'

import appInput from '../appInput/appInput.component'
import appList from '../appList/appList.component'
import { store } from '../../store'


export default () => {

    const tagName = 'app-select'

    const state = {
        isVisible: false
    }

    const children = () => ({
        appInput,
        appList
    })

    const hooks = ({methods}) => ({
        beforeOnInit () {
            store.subscribe((dataStore) => {
                methods.updateVisibility(dataStore)
            })
        }
    })

    const events = ({on, query, methods}) => ({
        onClickToShow () {
            const btnList = query('.icon')
            on('click', [btnList], () => methods.toggleList())
        }
    })

    const methods = ({props:dataProps, state}) => {
        const { object: props } = dataProps.get()
        const dataKey = props.listDataKey

        const toggleList = () => {
            store.update((dataStore) => {
                dataStore[dataKey].isVisible = !state.isVisible
            })
        }   

        const updateVisibility = (dataStore) => {
            console.log(dataStore[dataKey], state.get().isVisible)
            state.isVisible = dataStore[dataKey].isVisible
        }
        
        return { 
            toggleList,
            updateVisibility
        }
    }

    return {
        tagName,
        state,
        template,
        styles,
        children,
        events,
        methods,
        hooks
    }
}