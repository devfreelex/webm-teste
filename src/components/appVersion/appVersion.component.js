import template from './appVersion.template'
import styles from './appVersion.styles'

import appInput from '../appInput/appInput.component'
import appList from '../appList/appList.component'
import { store } from '../../store'


export default () => {

    const tagName = 'app-version'

    const state = {
        isVisible: false,
        value: ''
    }

    const children = () => ({
        appInput,
        appList
    })

    const hooks = ({methods}) => ({
        beforeOnInit () {
            store.subscribe((dataStore) => { console.log(dataStore)
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
        

        const _filterVehicles = (dataStore, version) => {

            const vehicles = dataStore.vehicle.filtered
            const result = vehicles.filter(vehicle => {
                if (vehicle.Version === version) return vehicle
            })
            store.update(dataStore => dataStore.vehicle.filtered = result)

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
            const storeValue = dataStore.version.selected.value
            const stateValue = state.get().value
            const stateIsDiferent = _hasChages(storeValue, stateValue)
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