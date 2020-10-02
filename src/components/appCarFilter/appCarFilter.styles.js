export default () => /*css*/ `
    app-car-filter {
        display:block;
        float:left;
        width:100%;
        padding:0 0 45px 0;
        background:#f5f5f5;
    }

    app-car-filter .filter-wrapper  {
        display:block;
        float:left;
        width:100%;
        padding:15px;
        background:#fff;
    }

    app-car-filter .check-group{
        display:block;
        float:left;
        width:100%;
    }
    app-car-filter .check-box {
        display:block;
        float:left;
        padding:0 7.5px 0 7.5px
    }

    app-car-filter .place-box {
        display:block;
        float:left;
        width:calc(100% - 130px);
        padding:0
    }

    app-car-filter .range-box {
        display:block;
        float:left;
        width:100%;
        max-width:130px;
        padding:0;
        position:relative;
        left:-1px;
    }

    app-car-filter .clear-box {
        padding:30px 7.5px 0 0;
        display:block;
        float:left;
        width:120px;
    }

    app-car-filter .exec-box{
        padding:15px 15px 0 7.5px;
        display:block;
        float:left;
        width:calc(100% - 120px);
        position:relative;
    }    
`