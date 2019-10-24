if(process.env.NODE_ENV==='production'){
    module.exports = require("./dist/zzbmath.min.js")
}else{
    module.exports = require("./dist/zzbmath.js")
}