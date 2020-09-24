export default () => /*css*/ `
    app-input {}
    app-input .input-wrapper {
        display:block;
        float:left;
        width:100%;
    }

    app-input {
        display:block;
        float:left;
        width:100%;
    }

    app-input .icon + .label {
        display:block;
        float:left;
        padding:15px 0 0 5px;
        color:#666;
    }

    .label {
        display:block;
        float:left;
        padding:15px 0 0 15px;
        color:#666;
    }

    app-input .icon {
        display:block;
        float:left;
        font-size:1.6em;
        padding:12px 0 0 12px;
        color:#666;
    }

    app-input input {
        display:block;
        float:left;
        padding:10px 10px 10px 0;
        position:relative;
        top:4px;
        font-weight:600;
        font-size:1em;
        color:#666;
        border:0;
        outline:0;
    }    

    app-input .icon + .label + input {
        width:calc(100% - 90px);        
    }
    app-input .label + input {
        width:calc(100% - 49px); 
        padding-left:5px;       
    }
`