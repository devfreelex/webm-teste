export default () => /*css*/ `
    app-year .model-wrapper {
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

    app-year .box {
        display:block;
        float:left;
        width:100%;
        position:relative;
    }

    app-year .icon,
    app-year .label,
    app-year .value {
        display:block;
        float:left;
        color:#666;
    }

    app-year .label {
        padding:15px 5px 15px 15px
    }

    app-year .value {
        padding:15px 15px 15px 0
    }

    app-year .icon {
        padding:15px;
        position:absolute;
        top:0;
        right:0;
        cursor:pointer
    }

`