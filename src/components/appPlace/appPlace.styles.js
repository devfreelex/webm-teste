export default () => /*css*/ `
    app-place .place-wrapper {
        display:block;
        float:left;
        width:100%;
        font-size: .875em;        
        border:1px #ebebeb solid;
        border-radius:3px;
        padding-bottom:15px;
        height:45px;
        background:#fff;
        position:relative;
    }
    
    app-place .clear {
        display:block;
        float:left;
        padding:12px;
        position:absolute;
        right:0;
        z-index:10;
        font-size:1.5em;
        cursor:pointer;
        color:#666
    }

    app-place .clear:hover {
        color:red
    }

`