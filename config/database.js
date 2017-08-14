const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports={
    /*uri: 'mongodb://localhost:27017/mean-site',*/
    uri: 'mongodb://lolswslol:eidthiktoa@ds145283.mlab.com:45283/angular2-test', //Production
    secret: crypto,
    db: 'angular2-test'
};