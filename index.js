/**
 * Created by cc on 14-5-13.
 */
'use strict';
var M_Message = require("k-m-message");
function _check(){
    var res_key = 0;
    var argv = process.argv;
    argv = argv.slice(2,argv.length);
    for(var i = 0; i < argv.length; i++){
        var item = argv[i].split("=");
        this.data[item[0]] = item[1];
    }
    if(this.file){
        var data = M_File.read(this.file);
        for(var i in data){
            if(typeof this.data[i] != "undefined"){
                this.data[i] = data[i];
            }
        }
    }
    for(var i in this.data){
        if(!this.data[i]){
            res_key = 1;
            console.log(i+"未知");
            break;
        }
    }
    return M_Message.getMessage(res_key,message);
}
var M_File = require("k-m-file");
var message = ["成功","参数有误"];

module.exports = {
    file:"",
    data:{},
    check:_check
}