import template from './appList.template'
import styles from './appList.styles'
import { store } from '../../store'
import { eventEmitter } from '../../services/eventEmitter'
import { http } from '../../services/http.service'

export default () => {

    const tagName = 'app-list'

    const state = {
        isSelected: false,
        uId: null,
        value: '',
        list: []        
    }

    const hooks = ({methods}) => ({
        beforeOnInit () {
            methods.setList()
        }
    })

    const events = ({on, query, queryAll, methods}) => ({
        onSelectItem () {
            const itemList = queryAll('.item')
            on('click', itemList, ({target}) => {
                if(target.classList.contains('item')){
                    methods.setValue(target.dataset)
                    methods.setVisibility()
                }
            })
        }
    })

    const methods = ({props: dataProps, state, elm}) => {

        const { object: props } = dataProps.get()
        const dataKey = props.listDataKey
        const storeKey = store.get()[dataKey]

        const setVisibility = () => {
            dataProps.set({object: {isVisible: false}})     
        }

        const setList = () => {
            const list = storeKey.list
            const {isVisible} = dataProps.get().object
            state.set({ list, isVisible })
        }

        const setValue = ({value, id}) => {
            state.set({ value })  
            store.update((data) => {
                data[dataKey]['selected'] = { id, value }
            })     

        }


        return {
            setList,
            setVisibility,
            setValue
        }
    }



    return {
        tagName,
        state,
        template,
        styles,
        hooks,
        events,
        methods
    }
}