export default () => /*css*/ `
    app-vehicle .vehicle-wrapper {
        display:block;
        float:left;
        width:100%;
        margin-bottom:15px;
        height:350px;
        background:#fff;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, .2)
    }

    app-vehicle .title,
    app-vehicle .version,
    app-vehicle .year,
    app-vehicle .price {
        display:block;
        float:left;
        width:100%;
        padding:5px 0;
        font-size: .875em;
        line-height:1.3em
    }

    app-vehicle .image img {
        display:block;
        float:left;
        width:100%;        
    }

    app-vehicle .box-text {
        display:block;
        float:left;
        width:100%;            
        padding:0 15px;
    }
`