export default ({props, state}) => {

    return /*html*/ `
        <div class="range-wrapper">
            <app-input
                data-props="{
                    'dataKey':'${props.object.inputDataKey}',
                    'label':'${props.object.inputLabel}'
                }"
            ></app-input>
            <app-list
                data-props="{'listDataKey':'${props.object.listDataKey}'}"
            ></app-list>
        </div>
    `
}