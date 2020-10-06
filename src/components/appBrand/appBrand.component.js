import template from './appBrand.template'
import styles from './appBrand.styles'

import appInput from '../appInput/appInput.component'
import appList from '../appList/appList.component'
import { store } from '../../store'


export default () => {

    const tagName = 'app-brand'

    const state = {
        isVisible: false,
        value: store.get().brand.value
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
            })
        }
    })

    const methods = ({props:dataProps, state}) => {
        const { object: props } = dataProps.get()
        const dataKey = props.listDataKey

        const _hasChages = (val1, val2) => {
            return val1 !== val2
        }

        const _filterVehicles = (dataStore, brand) => {

            const vehicles = dataStore.vehicle.list.filter( vehicle => {
                if(vehicle.Make === brand) return vehicle
            })
            
            store.update((dataStore) => dataStore.vehicle.filtered = vehicles)
            
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
            const {value: storeValue } = dataStore[dataKey]['selected']
            const {value: stateValue } = state.get()
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