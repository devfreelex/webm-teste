export default () => /*css*/ `
    app-select .select-wrapper {
        border:1px #ebebeb solid;
        border-radius:3px;
        padding-bottom:15px;
        height:45px;
        background:#fff
    }

    app-select .select-wrapper,
    app-select .list,
    app-select .item {
        display:block;
        float:left;
        width:100%;
        font-size: .875em;
    }

    app-select .list {
        max-height:225px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, .2);
        border-top:1px #ebebeb solid;
        position:relative;
        top:7px;
        left:-1px; 
        overflow-x:hidden;
        overflow-y:scroll; 
        display:none;    
    }

    app-select .list.active {
        display:block;
    }

    app-select .item {
        padding:15px;
        border:1px #ebebeb solid;
        border-top:0;
        background:#fff;
        color:#666;
        font-size: 1.2em;
        cursor:pointer;
    }

    app-select .item:hover {
        background:#f9f9f9;
    }    

    app-select .label {
        display:block;
        float:left;
        padding:15px 5px 0 5px;
        color:#666;
    }

    app-select .icon {
        display:block;
        float:left;
        font-size:1.6em;
        padding:12px 0 0 12px;
        color:#666;
    }

    app-select .value {
        display:block;
        float:left;
        width:calc(100% - 90px);
        padding:10px 10px 10px 0;
        position:relative;
        top:4px;
        font-weight:600;
        font-size:1em;
        border:0;
        outline:0;
    }

`