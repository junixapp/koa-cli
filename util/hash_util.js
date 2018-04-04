'use strict'
'use strict'

const crypto = require('crypto');


const FixedSalt = "QingBlog"

/**
 * 对密码进行加密
 * @param password
 * @param salt
 */
function hash_psw(password, salt = "") {
    const sha1_hash = crypto.createHash('sha1')
    sha1_hash.update(password)
    sha1_hash.update(salt)
    sha1_hash.update(FixedSalt)
    return sha1_hash.digest('hex')
}

module.exports = {
    hash_psw
}