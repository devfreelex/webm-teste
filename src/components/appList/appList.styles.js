export default () => /*css*/ `

    app-list .list-wrapper{
        position:relative;
        z-index:100
    }

    app-list .list-wrapper,
    app-select .list,
    app-select .item  {
        display:block;
        float:left;
        width:100%;
    }
    app-list .list {
        max-height:225px;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, .2);
        border-top:1px #ebebeb solid;
        position:relative;
        top:-1px;
        left:-1px; 
        overflow-x:hidden;
        overflow-y:scroll; 
        display:none;    
    }

    app-list .list.active {
        display:block;
    }

    app-list .item {
        padding:15px;
        border:1px #ebebeb solid;
        border-top:0;
        background:#fff;
        color:#666;
        font-size: 1.2em;
        cursor:pointer;
    }

    app-list .item:hover {
        background:#f9f9f9;
    } 
`