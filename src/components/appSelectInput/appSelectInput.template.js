export default ({props, state}) => {

    const repeat = (dataList, templateFragment) => {
        return dataList.map((dataItem) => {
            return templateFragment(dataItem)
        }).join('')
    }

    const iconFragment = () => /*html*/ `<i class="${props.object.icon} icon"></i>`

    const labelFragment = () => /*html*/ `
        <div class="label">${props.object.label}: </div>
        <input class="value" value="Resultado"></input>
    `

    const itemListFragment = (item) => /*html*/ `<li class="item" data-id="${item.id}">${item.value}</li>`

    const listFragment = (dataList) => /*html*/ `
        <ul class="list">
            ${repeat(dataList, itemListFragment)}
        </ul>
    `

    return /*html*/ `
        <div class="select-wrapper">
            ${props.object.icon ? iconFragment(): ''}
            ${props.object.label ? labelFragment(): ''}
            ${listFragment(state[props.object.dataKey])}
        </div>
    `
}