export default ({ props, state }) => {
    console.log(props)

    return /*html*/ `
        <div class="place-wrapper">
            <app-input
                data-props="{
                    'dataKey':'${props.object.inputDataKey}',
                    'icon':'${props.object.inputIcon}',
                    'label':'${props.object.inputLabel}'
                }"
            ></app-input>
            <app-list
                data-props="{'listDataKey':'${props.object.listDataKey}'}"
            ></app-list>
        </div>
    `
}