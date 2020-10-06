import template from './appYear.template'
import styles from './appYear.styles'

import appInput from '../appInput/appInput.component'
import appList from '../appList/appList.component'
import { store } from '../../store'


export default () => {

    const tagName = 'app-year'

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


        const _filterVehicles = (dataStore, year) => {
            
            const vehicles = dataStore.vehicle.filtered
            const result = vehicles.filter( vehicle => {
                if (parseInt(vehicle.YearFab) === parseInt(year)) return vehicle
            })
            
            store.update( dataStore => dataStore.vehicle.filtered = result)

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
            const storeValue = dataStore.year.selected.value
            const stateValue = state.get().value
            const stateIsDiferent = _hasChages(+storeValue, +stateValue)
            if (stateIsDiferent) {
                state.set({value: storeValue})
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