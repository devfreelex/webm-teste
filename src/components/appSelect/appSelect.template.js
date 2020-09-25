export default ({props, state}) => {

    return /*html*/ `
    <div class="select-wrapper">
            <div class="box">
                <div class="label">${props.object.inputLabel}:</div>
                <div class="value">Valor</div>
                <i class="las la-angle-down icon"></i>
            </div>
            <app-list
                data-props="{'listDataKey':'${props.object.listDataKey}'}"
            ></app-list>
    </div>
`
}