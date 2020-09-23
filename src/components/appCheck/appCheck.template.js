export default ({props, state}) => {

    const squareFragment = () => /*html*/ `
        <div class="btn-check unchecked">
            <i class="las la-stop"></i> ${props.object.label}
        </div>
    `
    const squareCheckedFragment = () => /*html*/ `
        <div class="btn-check checked">
            <i class="las la-check-square"></i> ${props.object.label}
        </div>
    `

    return /*html*/ `
    <div class="check-wrapper">
        ${state.checked ? squareCheckedFragment() : squareFragment()}
    </div>
`
}