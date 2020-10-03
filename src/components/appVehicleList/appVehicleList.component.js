import template from './appVehicleList.template'
import styles from './appVehicleList.styles'

import appVehicle from '../appVehicle/appVehicle.component'
import { store } from '../../store'

export default () => {
    const tagName = 'app-vehicle-list'

    const state = {
        vehicles: store.get().vehicle.list
    }

    const children = () => ({
        appVehicle
    })

    const hooks = ({ methods }) => ({
        beforeOnInit() {
            store.subscribe(dataStore => {
                methods.updateVehicles(dataStore)
            })
        }
    })

    const methods = ({ props, state }) => {

        const _getOldState = () => JSON.stringify(state.vehicles)
        const _getNewState = (dataStore) => JSON.stringify(dataStore.vehicle.list)

        const _getFilter  = (dataStore) => {
            const { brand, model, year, priceRange, version } = dataStore
            return {
                brand: brand.selected,
                model: model.selected,
                year: year.selected,
                price: priceRange.selected,
                version: version.selected
            }
        }

        const _hasValidFilter = (filter) => {
            const filterKeys = Object.keys(filter)
            return filterKeys.some( key => {
                return filter[key].value !== '' && filter[key].value !== 'undefined' && filter[key].value !== null
            })
        }

        const _isDiferent = (firstObject, lastObject) => {
            return firstObject !== lastObject
        }

        const _getKeys = (object) => Object.keys(object)

        const _getSection = (key, dataStore) => dataStore[key]

        const _getVehicles = (dataStore) => dataStore.vehicle.list

        const _getFilterKey = (key) => {
            const keyLowerCase = key.toLowerCase()
            let filterKey = null

            keyLowerCase === 'make' ? filterKey = 'brand' : keyLowerCase
            keyLowerCase === 'yearfab' ? filterKey = 'year' : keyLowerCase

            return filterKey
        }

        const _hasMatch = (vehicle, filter) => {
            const vehicleKeys = _getKeys(vehicle)
            return vehicleKeys.every( vKey => {
                const filterKey = _getFilterKey(vKey)
                const filterValue = filter[filterKey]?.value
                const vehicleValue =  vehicle[vKey] 
                return filterValue === vehicleValue               

            })
        }

        const _filterVehicles = (dataStore) => {
            const vehicles = _getVehicles(dataStore)
            const filter = _getFilter(dataStore)
            return vehicles.filter(vehicle => {
                if(_hasMatch(vehicle, filter)) return vehicle
            })
        }   
        
        const updateVehicles = (dataStore) => {
            const oldState = _getOldState()
            const newState = _getNewState(dataStore)
            const storeChanges = _isDiferent(oldState, newState)
            const filter = _getFilter(dataStore)
            const isInvalidFilter = !_hasValidFilter(filter)
            
            if (storeChanges && isInvalidFilter) {
                state.set({ vehicles: dataStore.vehicle.list })
                return
            }

            state.set({ vehicles: _filterVehicles(dataStore)})
        }        
        
        return {
            updateVehicles,
        }
    }   


    return {
        tagName,
        state,
        template,
        styles,
        children,
        hooks,
        methods
    }
}