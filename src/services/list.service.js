const listService = (state) => {

    const showList = () => {
        state.list.isVisible = true
    }

    return {
        showList
    }
}

export { listService }