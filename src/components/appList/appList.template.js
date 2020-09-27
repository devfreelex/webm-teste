export default ({ props, state }) => {

    const repeat = (dataList, templateFragment) => {
        return dataList.map((dataItem) => {
            return templateFragment(dataItem)
        }).join('')
    }

    const itemListFragment = (item) => {
        return  /*html*/ `
            <li class="item" 
            data-id="${item.id}"
            data-value="${item.value}"
            >${item.value}</li>
        `
    }

    const listFragment = (dataList) => {
        return /*html*/ `
            <ul class="list ${props.object.isVisible === true ? 'active' : ''}">
                ${repeat(dataList, itemListFragment)}
            </ul>
        `
    }

    return /*html*/ `
        <div class="list-wrapper">
            ${listFragment(state.list)}
        </div>
    `
}