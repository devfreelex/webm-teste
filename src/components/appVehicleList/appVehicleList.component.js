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
        const showVehicles = (dataStore) => {
            
            if (dataStore.vehicle.filtered.length) {
                return state.set({ vehicles: dataStore.vehicle.filtered })
            }

            state.set({ vehicles: []})            
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