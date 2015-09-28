/**
 * Created by cc on 14-5-13.
 */
'use strict';
var main = require("./index.js");
main.data = {
    port:"",
    host:"",
    time:60000,//默认一分钟
    remote_user_id:"",
    remote_shop_id:""
};
var res = main.check();
if(res.key == 1){


}
