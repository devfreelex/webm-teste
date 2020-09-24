export default () => /*css*/ `
    app-check .check-wrapper {
        display:inline-block;
    }

    app-check .btn-check {
        display:block;
        float:left;
        color:#666
    }

    app-check .btn-check:hover {
        cursor: pointer
    }

    app-check i {
        color:#666;
        font-size:1.2em;
        position:relative;
        top:1px;
    }


    app-check .btn-check.checked i {
        color:red
    }

    app-check .btn-check.unchecked i {
        color:#666
    }
`