const genId1 = require('mzsv_xid');
const genId2 = require('yxrh_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|C4RyYapkBC|' + genId2()).digest('base64');
}


module.exports = generateKey;
