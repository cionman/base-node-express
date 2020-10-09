const crypto = require('crypto')
const bcrypt = require('bcrypt');
const key = '@!#AbcStadsee!232~37@3KSds39qwer'
const iv = '1234567890123456'
const saltRounds = 11;

module.exports = {
    sha512 : (str) => crypto.createHash('sha512').update(str).digest('base64'),
    encryptAES256 : (str) => {
        const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
        let result = cipher.update(str, 'utf8', 'base64');
        result += cipher.final('base64');
        return result
    },
    decryptAES256 : (str) => {
        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        let result = decipher.update(str, 'base64', 'utf8');
        result += decipher.final('utf8');
        return result
    },
    bcryptHash : (str) => bcrypt.hashSync(str, saltRounds),
    compareBcrypt: (str, hash) => bcrypt.compareSync(str, hash)
}