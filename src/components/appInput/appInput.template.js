export default ({props, state}) => {

    const labelFragment = () => /*html*/ `
        <div class="label">${props.object.label}: </div>
    `

    const iconFragment = () => /*html*/ `<i class="${props.object.icon} icon"></i>`    

    return /*html*/ `
        <div class="input-wrapper">
            ${props.object.icon ? iconFragment() : ''}
            ${props.object.label ? labelFragment() : ''}
            <input type="text" value="${state.value || ''}">
        </div>
`

}