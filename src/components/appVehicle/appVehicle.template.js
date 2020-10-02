export default ({props, state}) => /*html*/ `
    <div class="vehicle-wrapper">
        <div class="image">
            <img src="${props.object.img}" alt="${props.object.make} ${props.object.model}">
        </div>
        <div class="box-text">
            <div class="title">${props.object.make} ${props.object.model}</div>
            <div class="version">${props.object.version}</div>
            <div class="year">${props.object.yearFab} / ${props.object.yearModel}</div>
            <div class="price">${props.object.price}</div>
        </div>
    </div>
`