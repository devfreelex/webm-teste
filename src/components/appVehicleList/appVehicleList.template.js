export default ({props, state}) => {

    const vehicleFragment = (data) => /*html*/ `
    <div class="grid-4">
        <app-vehicle
        data-props="{
            'img':'${data.Image}',
            'make':'${data.Make}',
            'model':'${data.Model}',
            'version':'${data.Version}',
            'yearFab':'${data.YearFab}',
            'yearModel':'${data.YearModel}',
            'price':'${data.Price}'            
        }"        
        ></app-vehicle>
    </div>
    `

    const repeat = (fragment, data) => {
        return data.map(item => fragment(item)).join('')
    }

    return /*html*/ `
    <div class="vehicle-list-wrapper">
        <div class="container">
            <div class="grid">
            ${repeat(vehicleFragment, state.vehicles)}
            </div>
        </div>
    </div>
`}