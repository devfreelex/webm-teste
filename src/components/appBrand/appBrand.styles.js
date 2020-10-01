export default () => /*css*/ `
    app-brand .brand-wrapper {
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

    app-brand .box {
        display:block;
        float:left;
        width:100%;
        position:relative;
    }

    app-brand .icon,
    app-brand .label,
    app-brand .value {
        display:block;
        float:left;
        color:#666;
    }

    app-brand .label {
        padding:15px 5px 15px 15px
    }

    app-brand .value {
        padding:15px 15px 15px 0
    }

    app-brand .icon {
        padding:15px;
        position:absolute;
        top:0;
        right:0;
        cursor:pointer
    }

`