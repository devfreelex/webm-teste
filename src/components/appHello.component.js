const appHello = () => {

    const tagName = 'app-hello'

    const state = {
        title:'Hello World!'
    }

    const template = ({props, state}) => {
        return /*html*/`<h1 class="title">${state.title}</h1>`
    }


    const styles = () => {
        return /*css*/`
            app-hello .title {
                color: blue;
                text-align:center;
            }
        `
    }

    return {
        tagName,
        state,
        template,
        styles
    }
}

export { appHello }