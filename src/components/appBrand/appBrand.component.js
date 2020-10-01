import template from './appBrand.template'
import styles from './appBrand.styles'

import appInput from '../appInput/appInput.component'
import appList from '../appList/appList.component'
import { store } from '../../store'


export default () => {

    const tagName = 'app-brand'

    const state = {
        isVisible: false,
        value:''
    }

    const children = () => ({
        appInput,
        appList
    })

    const hooks = ({methods}) => ({
        beforeOnInit () {
            store.subscribe((dataStore) => {
                methods.updateValue(dataStore)
                methods.updateVisibility(dataStore)
            })
        }
    })

    const events = ({on, query, methods}) => ({
        onClickToShow () {
            const btnList = query('.icon')
            on('click', [btnList], (e) => {
                methods.toggleList()
                // methods.setValue({})
                // console.log(e.dataset)
            })
        }
    })

    const methods = ({props:dataProps, state}) => {
        const { object: props } = dataProps.get()
        const dataKey = props.listDataKey

        const toggleList = () => {
            const { isVisible } = state.get()
            state.set({isVisible: !isVisible})
        }   

        const updateVisibility = (dataStore) => {
            const isVisible = dataStore[dataKey].isVisible
            state.set({isVisible})
        }

        const setValue = ({dataset}) => {
            const { id, value } = dataset
            console.log(dataset)
        }

        const updateValue = (dataStore) => {
            const {value: storeValue } = dataStore[dataKey]['selected']
            const {value: stateValue } = state.get()
            if(storeValue === stateValue) return
            state.set({ value: storeValue })
        }
        
        return { 
            toggleList,
            updateVisibility,
            updateValue,
            setValue
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