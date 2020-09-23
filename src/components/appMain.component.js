import { store } from '../store'

const appMain = () => {

    const tagName = 'app-main'

    const state = store.get()

    const children = () => ({})

    const template = ({state, props}) => {
        return /*html*/`
            <div class="app-main-wrapper">
                <router-view></router-view>
            </div>
        `
    }

    const styles = () => {
        return /*css*/`
           app-main {
            display: block;
            float: left;
            width: 100%;               
           }
        `
    }

    const hooks = ({state}) => ({
        afterOnInit () {

        }
    })

    return {
        tagName,
        state,
        template,
        styles,
        hooks,
        children
    }
}

export { appMain }