export default ({props, state}) =>/*html*/ `
    <div class="filter-wrapper">
        <h1>Filter Wrapper</h1>

        <div class="check-box">
            <app-check data-props="{'label':'Novos'}"></app-check>
        </div>
        <div class="check-box">
            <app-check data-props="{'label':'Usados'}"></app-check>
        </div>
        <div class="place-box">
            <app-place 
                data-props="{
                    'inputDataKey':'value', 
                    'inputIcon':'las la-map-marker-alt',
                    'inputLabel':'Onde',
                    'listDataKey': 'list'
                }"></app-place>
        </div>
        <div class="range-box">
                <app-range 
                data-props="{
                    'inputDataKey':'value', 
                    'inputLabel':'Raio',
                    'listDataKey': 'list'
                }"></app-range>
        </div>
    </div>
`