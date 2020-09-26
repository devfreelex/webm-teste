import template from './appList.template'
import styles from './appList.styles'
import { store } from '../../store'

export default () => {

    const tagName = 'app-list'

    const state = {
        isSelected: false,
        isVisible: false,
        uId: null,
        value: '',
        list: []        
    }

    const hooks = ({methods}) => ({
        beforeOnInit () {
            methods.setList()
            methods.onListChange()
        }
    })

    const events = ({on, query, queryAll, methods}) => ({
        onClickItem () {
            const itemList = queryAll('.item')
            on('click', itemList, methods.hideList)
        }
    })

    const methods = ({props: dataProps, state, elm}) => {
        const { object: props } = dataProps.get()
        const dataKey = props.listDataKey
        const dataStore = store.get()[dataKey]

        const setList = () => {
            const list = dataStore.list
            state.set({ list })
        }

        const onListChange = () => {
            store.subscribe((storeState) => {
                const localIsVisible = state.isVisible
                const storeIsVisible = storeState[dataKey].isVisible
                if (localIsVisible !== storeIsVisible) showList()
            })
        }

        const showList = () => {
            state.set({ isVisible: dataStore.isVisible })
        }

        const hideList = () => {
            store.update((dataStore) => {
                dataStore[dataKey].isVisible = false
            })           
        }

        return {
            setList,
            onListChange,
            showList,
            hideList
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