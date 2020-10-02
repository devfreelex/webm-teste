export default ({ state, props }) => /*html*/`
    <div class="main-wrapper">
        <div class="container">
            <app-header></app-header>
            <app-tabs></app-tabs>
            <router-view></router-view>        
        </div>
        <app-vehicle-list></app-vehicle-list>
    </div>
`

