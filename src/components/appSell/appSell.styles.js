    export default () => /*css*/ `
        app-sell {
            display:block;
            float:left;
            width:100%;
        } 
        
        app-sell .sell-wrapper {
            display:block;
            float:left;
            width:100%;
            padding:15px 30px;
            text-align:center;
            font-size:.875em;
            font-weight:600;
            border-radius:3px;
            border: 2px orange solid;
            color: orange;
            cursor:pointer;
            transition: .3s
        }

        app-sell .sell-wrapper:hover {
            background: orange;
            color:#fff;
        }


    `