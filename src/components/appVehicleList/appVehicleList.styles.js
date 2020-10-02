export default () => /*css*/ `
    app-vehicle-list,
    app-vehicle-list .vehicle-list-wrapper {
        display:block;
        float:left;
        width:100%;
        background:#fff
    }

    app-vehicle-list .container {
        display:block;
        width:100%;
        max-width:933px;
        margin:0 auto;
        padding-top:15px;
    }

    app-vehicle-list .container::after {
        content:'';
        display: block;
        width: 100%;   
        clear:both              
    }
`