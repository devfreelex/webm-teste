export default () => /*css*/ `
    app-tabs .tabs-wrapper {
        display:block;
        float:left;
        width:100%;
    }

    app-tabs .tab {
        display:block;
        float:left;
        border-bottom:3px transparent solid;
        font-size: 1.2em;
        line-height:.5em;
        text-transform:uppercase;
        color:#666;
        transition: .2s ease-in;
    }

    app-tabs .tab:hover {
        cursor:pointer;
        background:#fff;
    }

    app-tabs .tab.active,
    app-tabs .tab:hover {
        border-color: red
    }    

    app-tabs .tab-block {
        display:block;
        float:left;
        max-width:175px;
        margin: 30px 15px 0 15px;
    }

    app-tabs .title {
        display:block;
        float:left;
        width:100px;
        padding-bottom:15px;
        position:relative;
    }

    app-tabs span {
        display:block;
        float:left;
        width:100%;
        padding:5px;
        font-size: .6em;
    }

    app-tabs span + span {
        font-size:1.2em
    }

    app-tabs .icon {
        display:block;
        float:left;
        width:1em;
        font-size:1.6em;
        padding-top:12px;
        margin-right:10px;
    }

    app-tabs .btn-sell {
        display:block;
        float:right;
        position:relative;
        top:20px;
    }


`