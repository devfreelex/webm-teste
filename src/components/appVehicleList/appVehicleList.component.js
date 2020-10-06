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
        afterOnInit() {
            store.subscribe( dataStore => {
                methods.showVehicles(dataStore)
            })
        }
    })

    const methods = ({ props, state }) => {

        const _hasChanges = (oldValue, newValue) => oldValue !== newValue

        const _hasFilteredVehicles = (vehicles) => vehicles.length

        const showVehicles = (dataStore) => {
            const vehiclesInStore = JSON.stringify(dataStore.vehicle.filtered)
            const vehiclesInState = JSON.stringify(state.get().vehicles)
            const stateIsDiferent = _hasChanges(vehiclesInState, vehiclesInStore)
            const hasFilteredVehicles = _hasFilteredVehicles(dataStore.vehicle.filtered)
            if (stateIsDiferent && hasFilteredVehicles) {
                return state.set({ vehicles: dataStore.vehicle.filtered })
            }

        }

        return {
            showVehicles
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