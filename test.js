'use strict';

const md5 = require('./index');

const testData = {
    str: 'this is string',
    necessary: 'c60e33b27c755308244516984c777842'
};

if(md5(testData.str) === testData.necessary){
    console.log('Ok');
} else {
    throw new Error('Module was wrong');
}
