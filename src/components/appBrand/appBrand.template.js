export default ({props, state}) => {

    return /*html*/ `
    <div class="brand-wrapper">
            <div class="box">
                <div class="label">${props.object.inputLabel}:</div>
                <div class="value">${state.value}</div>
                <i class="las la-angle-down icon"></i>
            </div>
            <app-list
                data-props="{
                    'isVisible':${state.isVisible},
                    'listDataKey':'${props.object.listDataKey}',
                    'event':'${props.object.event}',
                    'query':'${props.object.query}'
                }"
            ></app-list>
    </div>
`
}