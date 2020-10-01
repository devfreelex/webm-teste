export default () => /*css*/ `
    app-model .model-wrapper {
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

    app-model .box {
        display:block;
        float:left;
        width:100%;
        position:relative;
    }

    app-model .icon,
    app-model .label,
    app-model .value {
        display:block;
        float:left;
        color:#666;
    }

    app-model .label {
        padding:15px 5px 15px 15px
    }

    app-model .value {
        padding:15px 15px 15px 0
    }

    app-model .icon {
        padding:15px;
        position:absolute;
        top:0;
        right:0;
        cursor:pointer
    }

`