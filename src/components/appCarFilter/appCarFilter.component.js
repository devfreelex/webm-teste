import styles from './appCarFilter.styles'
import template from './appCarFilter.template'

import appCheck from '../appCheck/appCheck.component'
import appPlace from '../appPlace/appPlace.component'
import appSelect from '../appSelect/appSelect.component'
import appSuperFilter from '../appSuperFilter/appSuperFilter.component'
import appClear from '../appClear/appClear.component'
import appExecFilter from '../appExecFilter/appExecFilter.component'
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
        appSelect,
        appSuperFilter,
        appClear,
        appExecFilter
    })

    const hooks = ({methods}) => ({
        beforeOnInit () {
            methods.getBrands()
        }
    })

    const methods = () => ({
        async getBrands () {
            const httpService = http()
            const reqParams = { endPoint: 'make'}
            const data = await httpService.get(reqParams)
            const brandList = data.map(item => ({ id: item.ID, value: item.Name }))
            store.update(dataStore => dataStore.brand.list = brandList)
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