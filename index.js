'use strict';

const crypto = require('crypto');
module.exports = str => {
    const data = Buffer.from(str);
    return crypto.createHash('md5').update(data).digest('hex')
};
