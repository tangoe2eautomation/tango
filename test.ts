var path = require("path");
const git = require('simple-git/promise');
//
var repo;
var index;
var oid;
var repository;

console.log('Cloning repo: ');
let remote = `https://vkadiyala@vmware.com:VMware123@github.com/tangoe2eautomation/tango.git`;
require('simple-git')()
    .addConfig('user.name', 'Venkata Kadiyala')
    .addConfig('user.email', 'vkadiyala@vmware.com');
require('simple-git')()
     .add('./*')
     .commit("first commit!")
     .push(['-u', 'origin', 'master'], () => console.log('done'));

