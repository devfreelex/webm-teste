export default () => /*css*/ `
    app-range-price .model-wrapper {
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

    app-range-price .box {
        display:block;
        float:left;
        width:100%;
        position:relative;
    }

    app-range-price .icon,
    app-range-price .label,
    app-range-price .value {
        display:block;
        float:left;
        color:#666;
    }

    app-range-price .label {
        padding:15px 5px 15px 15px
    }

    app-range-price .value {
        padding:15px 15px 15px 0
    }

    app-range-price .icon {
        padding:15px;
        position:absolute;
        top:0;
        right:0;
        cursor:pointer
    }

`