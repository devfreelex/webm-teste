import { r9x } from 'r9x_js'
import main from './components/appMain/appMain.component'
import appCarFilter from './components/appCarFilter/appCarFilter.component'
import { appNotFound } from './components/appNotFound.component'

import './assets/reset.css'


const routes = {
    firstRoute: { hash: '#/', component: appCarFilter },
    defaultRoute: { hash: '#/404', component: appNotFound },
    otherRoutes: [
        { hashExp: /^\#\/$/, component: appCarFilter },
    ]
}

const app = r9x()

app.use({
    main,
    routes,
})

app.init()