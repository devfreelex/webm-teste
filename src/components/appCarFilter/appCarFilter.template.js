export default ({props, state}) =>/*html*/ `
    <div class="filter-wrapper">
        <h1>Filter Wrapper</h1>

        <div class="check-box">
            <app-check data-props="{'label':'Novos'}"></app-check>
        </div>
        <div class="check-box">
            <app-check data-props="{'label':'Usados'}"></app-check>
        </div>
    </div>
`