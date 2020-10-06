import template from '../appExecFilter/appExecFilter.template'
import styles from '../appExecFilter/appExecFilter.styles'
import { store } from '../../store'

export default () => {
    
    const tagName = 'app-exec-filter'

    const events = ({query, on, methods}) => ({
        filterOnClick () {
            const btnFilter = query('#btnExec')
            on('click', [btnFilter], methods.execFilter)
        }
    })

    const methods = () => {

        const _getStoreData = () => store.get()

        const _getResult = (vehiclesFiltered, allVehicles) => {
            if(!vehiclesFiltered || !vehiclesFiltered.length) return allVehicles
            return vehiclesFiltered
        }

        const _filterByBrand = (vehicles) => {
            const { brand } = _getStoreData()
            const resultByBrandFilter = vehicles.filter(vehicle => vehicle.Make === brand.selected.value)
            return _getResult(resultByBrandFilter, vehicles)
        }
        const _filterByModel = (vehicles) => {
            const { model } = _getStoreData()
            const resultByModelFilter = vehicles.filter(vehicle => vehicle.Model === model.selected.value)
            return _getResult(resultByModelFilter, vehicles)
        }
        const _filterByYear = (vehicles) => {
            const { year } = _getStoreData()
            const resultByYearFilter = vehicles.filter(vehicle => +vehicle.YearFab === +year.selected.value)
            return _getResult(resultByYearFilter, vehicles)
        }

        const _filterByPrice = (vehicles) => {
            const { priceRange } = _getStoreData()
            const resultByPriceFilter = vehicles.filter(vehicle => parseFloat(vehicle.Price) <= parseFloat(priceRange.selected.value))
            return _getResult(resultByPriceFilter, vehicles)
        }

        const _filterByVersion = (vehicles) => {
            const { version } = _getStoreData()
            const resultByVersionFilter = vehicles.filter(vehicle => vehicle.Version === version.selected.value)
            return _getResult(resultByVersionFilter, vehicles)
        }

        const _setFilteredVehicles = (vehicles) => {
            store.update(dataStore => dataStore.vehicle.filtered = vehicles)
        }

        const execFilter = () => {
            const storeData = store.get()
            const brandFilterResult = _filterByBrand(storeData.vehicle.list)
            const modelFilterResult = _filterByModel(brandFilterResult)
            const yearFilterResult = _filterByYear(modelFilterResult)
            const priceFilterResult = _filterByPrice(yearFilterResult)
            const versionFilterResult = _filterByVersion(priceFilterResult)
            _setFilteredVehicles(versionFilterResult)
        }

        return {
            execFilter
        }
    }

    return {
        tagName,
        template,
        styles,
        events, 
        methods
    }
}