export default ({props, state}) => {

    return /*html*/ `
    <div class="model-wrapper">
            <div class="box">
                <div class="label">${props.object.inputLabel}:</div>
                <div class="value">${state.value}</div>
                <i class="las la-angle-down icon"></i>
            </div>
            <app-list
                data-props="{
                    'isVisible':${state.isVisible},
                    'listDataKey':'priceRange'
                }"
            ></app-list>
    </div>
`
}