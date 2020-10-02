export default () => /*css*/ `
    app-version .model-wrapper {
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

    app-version .box {
        display:block;
        float:left;
        width:100%;
        position:relative;
    }

    app-version .icon,
    app-version .label,
    app-version .value {
        display:block;
        float:left;
        color:#666;
    }

    app-version .label {
        padding:15px 5px 15px 15px
    }

    app-version .value {
        padding: 15px 15px 15px 0;
        font-size: .875em;
        line-height: 1.4em;
        font-weight: bold;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width:calc(100% - 90px);
    }

    app-version .icon {
        padding:15px;
        position:absolute;
        top:0;
        right:0;
        cursor:pointer
    }

`