import template from './appModel.template'
import styles from './appModel.styles'

import appInput from '../appInput/appInput.component'
import appList from '../appList/appList.component'
import { store } from '../../store'


export default () => {

    const tagName = 'app-model'

    const state = {
        isVisible: false,
        value: store.get().model.value
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
            on('click', [btnList], () => methods.toggleList())
        }
    })

    const methods = ({props:dataProps, state}) => {
        const { object: props } = dataProps.get()
        const dataKey = props.listDataKey

        const _hasChages = (val1, val2) => {
            return val1 !== val2
        }    
        

        const _filterVehicles = (dataStore, model) => {

            const vehicles = dataStore.vehicle.filtered.filter(vehicle => {
                if (vehicle.Model === model) return vehicle
            })

            if(vehicles.length) store.update((dataStore) => dataStore.vehicle.filtered = vehicles)

        }        

        const toggleList = () => {
            const { isVisible } = state.get()
            state.set({isVisible: !isVisible})
        }   

        const updateVisibility = (dataStore) => {
            const isVisible = dataStore[dataKey].isVisible
            state.set({isVisible})
        }

        const updateValue = (dataStore) => {
            const { value: storeValue } = dataStore[dataKey]['selected']
            const { value: stateValue } = state.get()
            const stateIsDiferent = _hasChages(stateValue, storeValue)
            if (stateIsDiferent) {
                state.set({ value: storeValue })
                _filterVehicles(dataStore, storeValue)
            }
        }
        
        return { 
            toggleList,
            updateVisibility,
            updateValue,
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