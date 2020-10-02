import styles from './appCarFilter.styles'
import template from './appCarFilter.template'

import appCheck from '../appCheck/appCheck.component'
import appPlace from '../appPlace/appPlace.component'
import appSuperFilter from '../appSuperFilter/appSuperFilter.component'
import appClear from '../appClear/appClear.component'
import appExecFilter from '../appExecFilter/appExecFilter.component'
import appSelect from '../appSelect/appSelect.component'
import appBrand from '../appBrand/appBrand.component'
import appModel from '../appModel/appModel.component'
import appYear from '../appYear/appYear.component'
import appPriceRange from '../appPriceRange/appPriceRange.component'
import appVersion from '../appVersion/appVersion.component'

import { http } from '../../services/http.service'
import { store } from '../../store'

export default () => {

    const tagName = 'app-car-filter'

    const state = {
        place: { isVisible: false },
    }

    const children = () => ({
        appCheck,
        appPlace,
        appSuperFilter,
        appClear,
        appExecFilter,
        appSelect,
        appBrand,
        appModel,
        appYear,
        appPriceRange,
        appVersion
    })

    const hooks = ({ methods }) => ({
        beforeOnInit() {
            methods.getVehicles()
            methods.getBrands()
            store.subscribe(dataStore => {
                methods.getModels()
                methods.getVersions()
            })
        }
    })

    const methods = () => {
        let lastBrandId, lastModelId = null

        const getBrands = async () => {
            const httpService = http()
            const reqParams = { endPoint: 'make' }
            const data = await httpService.get(reqParams)
            const brandList = data.map(item => ({ id: item.ID, value: item.Name }))
            store.update(dataStore => dataStore.brand.list = brandList)
        }

        const getModels = async () => {
            const dataStore = store.get()
            const { id } = dataStore.brand.selected
            const hasInvalidQuery = !id || lastBrandId === id

            if (hasInvalidQuery) return

            lastBrandId = id
            const httpService = http()
            const reqParams = { endPoint: 'model', query: 'MakeID', value: id }
            const data = await httpService.get(reqParams)
            const modelList = data.map(item => ({ id: item.ID, value: item.Name }))
            store.update(dataStore => dataStore.model.list = modelList )

        }

        const getVersions = async () => {
            const dataStore = store.get()
            const { id } = dataStore.model.selected
            const hasInvalidQuery = !id || lastModelId === id

            if (hasInvalidQuery) return

            lastModelId = id
            const httpService = http()
            const reqParams = { endPoint: 'version', query: 'ModelID', value: id }
            const data = await httpService.get(reqParams)
            console.log(data)
            const version = data.map(item => ({ id: item.ID, value: item.Name }))
            store.update(dataStore => dataStore.version.list = version)
        }        

        const getVehicles = async () => {
            const httpService = http()
            const reqParams = { endPoint: 'vehicles', query: 'Page', value: 1 }
            const vehicleList = await httpService.get(reqParams)
            store.update(dataStore => {
                dataStore.vehicle.list = vehicleList
                setYears(dataStore)
                setPrices(dataStore)
            })            
        }

        const getUniqValues = (data) => {
            return data.filter(function (item, pos, ary) {
                return !pos || item.value != ary[pos - 1]['value'];
            });            
        }

        const sortValues = (data) => {
            return data.sort((a, b) => a.value - b.value)
        }

        const setYears = (dataStore) => {
            const vehicles = store.get().vehicle.list
            const data = vehicles.map( (vehicle, index) => ({id: index + 1, value: vehicle.YearFab}))
            const sortedYears = sortValues(data)
            const uniqYears = getUniqValues(sortedYears)

            dataStore.year.list = uniqYears
        }

        const setPrices = (dataStore) => {
            const vehicles = store.get().vehicle.list
            const data = vehicles.map((vehicle, index) => ({ id: index + 1, value: parseFloat(vehicle.Price) }))
            const sortedPrices = sortValues(data)
            const uniquePrices = getUniqValues(sortedPrices)

            dataStore.priceRange.list = uniquePrices
        }


        return {
            getBrands,
            getModels,
            getVersions,
            getVehicles,
            setYears,
            setPrices
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