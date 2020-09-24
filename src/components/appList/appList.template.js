export default ({ props, state }) => { console.log(props)

    const repeat = (dataList, templateFragment) => {
        return dataList.map((dataItem) => {
            return templateFragment(dataItem)
        }).join('')
    }

    const itemListFragment = (item) => /*html*/ `<li class="item" data-id="${item.id}">${item.value}</li>`

    const listFragment = (dataList) => /*html*/ `
        <ul class="list">
            ${repeat(dataList, itemListFragment)}
        </ul>
    `

    return /*html*/ `
        <div class="list-wrapper">
            ${listFragment(state[props.object.listDataKey])}
        </div>
    `
}