export default ({ props, state }) => {

    const repeat = (dataList, templateFragment) => {
        return dataList.map((dataItem) => {
            return templateFragment(dataItem)
        }).join('')
    }

    const itemListFragment = (item) => /*html*/ `<li class="item" data-id="${item.id}">${item.value}</li>`

    const listFragment = (dataList) => /*html*/ `
        <ul class="list ${state.isVisible ? 'active' : ''}">
            ${repeat(dataList, itemListFragment)}
        </ul>
    `

    return /*html*/ `
        <div class="list-wrapper">
            ${listFragment(state.list)}
        </div>
    `
}