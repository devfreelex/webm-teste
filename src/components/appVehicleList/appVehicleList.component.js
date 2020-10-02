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

    const methods = ({ props, state }) => ({
        updateVehicles(dataStore) {
            const oldState = JSON.stringify(state.vehicles)
            const newState = JSON.stringify(dataStore.vehicle.list)
            if (oldState !== newState) state.set({ vehicles: dataStore.vehicle.list })
        }
    })    


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