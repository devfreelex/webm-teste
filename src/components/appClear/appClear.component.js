import template from '../appClear/appClear.template'
import styles from '../appClear/appClear.styles'
import { store } from '../../store'

export default () => {

    const tagName = 'app-clear'

    const hooks = () => ({
        beforeOnInit () {
            store.subscribe((dataStore) => console.log(dataStore))
        }
    })

    const events = ({ on, query, methods }) => ({
        onClickToClear() {
            const btnClear = query('#clear')
            on('click', [btnClear], methods.clearFilters)
        }
    })

    const methods = ({ props, state }) => ({
        clearFilters() {
            const storeData = store.get()
            const filterKeys = ['place', 'range', 'brand', 'model', 'year', 'priceRange', 'version']
            filterKeys.forEach(filterKey => storeData[filterKey].selected = { id: null, value: '' })
            store.update(datastore => datastore.vehicle.filtered = [])
        }
    })
    return {
        tagName,
        template,
        styles,
        events,
        methods,
        hooks
    }
}