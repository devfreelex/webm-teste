export default ({ state, props }) => {
    return /*html*/`
            <div class="main-wrapper">
                <app-header></app-header>
                <app-tabs></app-tabs>
                <router-view></router-view>
            </div>
        `
}

