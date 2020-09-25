export default () => /*css*/ `
    app-select .select-wrapper {
        display: block;
        float: left;
        width: 100%;
        font-size: .875em;
        border: 1px #ebebeb solid;
        border-radius: 3px;
        padding-bottom: 15px;
        height: 45px;
        background: #fff;
    }

    app-select .box {
        display:block;
        float:left;
        width:100%;
        position:relative;
    }

    app-select .icon,
    app-select .label,
    app-select .value {
        display:block;
        float:left;
        color:#666;
    }

    app-select .label {
        padding:15px 5px 15px 15px
    }

    app-select .value {
        padding:15px 15px 15px 0
    }

    app-select .icon {
        padding:15px;
        position:absolute;
        top:0;
        right:0;
        cursor:pointer
    }

`