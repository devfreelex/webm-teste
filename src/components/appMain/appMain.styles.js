export default () => {
    return /*css*/`
           app-main {
            display: block;
            float: left;
            width: 100%;               
           }

           app-main .main-wrapper {
               display:block;
               width:100%;
               max-width:933px;
               margin:0 auto;
           }

           app-main .main-wrapper::after {
               content:'';
               display:block;
               width:100%;
               clear:both
           }
        `
}