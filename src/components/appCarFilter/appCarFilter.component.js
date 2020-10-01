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
        appModel
    })

    const hooks = ({ methods }) => ({
        beforeOnInit() {
            methods.getBrands()
            store.subscribe(dataStore => {
                methods.getModels()

            })
        }
    })

    const methods = () => {
        let lastBrandId = null

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
            store.update(dataStore => dataStore.model.list = modelList)

        }

        return {
            getBrands,
            getModels
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