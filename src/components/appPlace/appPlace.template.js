export default ({ props, state }) =>  /*html*/ `
        <div class="place-wrapper">
            <i class="las la-times-circle clear"></i>
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