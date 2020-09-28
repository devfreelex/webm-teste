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
            methods.listenUpdateEvents()
            methods.setList()
            // methods.updateList()
        }
    })

    const events = ({on, query, queryAll, methods}) => ({
        onClickItem () {
            const itemList = queryAll('.item')
            on('click', itemList, ({target}) => {
                if(target.classList.contains('item')){
                    methods.setValue(target)
                    methods.setVisibility()
                }
            })
        }
    })

    const methods = ({props: dataProps, state, elm}) => {
        // console.log(dataProps.get())
        const { object: props } = dataProps.get()
        const dataKey = props.listDataKey
        const eventToEmit = props.event
        const dataStore = store.get()[dataKey]

        const setVisibility = () => {
            dataProps.set({object: {isVisible: false}})     
        }

        const setList = () => {
            const list = dataStore.list
            const {isVisible} = dataProps.get().object
            state.set({ list, isVisible })
        }

        const setValue = ({dataset}) => { 
            const id = +dataset.id
            const query = dataset.query
            store.update((dataStore) => {
                dataStore[dataKey].value = dataset.value
                if (eventToEmit) eventEmitter.emit(eventToEmit, { value: id, query, endPoint: eventToEmit })
            })           
        }

        const listenUpdateEvents = () => {
            if(!eventToEmit || eventToEmit === 'undefined') return
            eventEmitter.subscribe(eventToEmit, async (reqParams) => {
                const data = await getData(reqParams)
            })
        }

        const getData = async (reqParams) => {
            if(!reqParams.endPoint || !reqParams.query || !reqParams.value) return
            const httpService = http()
            const data = await httpService.get(reqParams)

            const dataList = data.map(item => ({ id: item.ID, value: item.Name }))
            store.update(dataStore => dataStore[eventToEmit].list = dataList)
        }

        const updateList = () => {
            // store.subscribe( dataStore => {
            //     if (eventToEmit && eventToEmit !== 'undefined' ) {
            //         console.log(dataStore)
            //     }
            // })
        }

        return {
            setList,
            setVisibility,
            setValue,
            listenUpdateEvents,
            updateList
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