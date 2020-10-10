const crypto = require('crypto')
const bcrypt = require('bcrypt');
require("dotenv").config();
const key = process.env.KEY
const iv = process.env.IV
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

        if(!str) return ""

        const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        let result = decipher.update(str, 'base64', 'utf8');
        result += decipher.final('utf8');
        return result
    },
    bcryptHash : (str) => bcrypt.hashSync(str, saltRounds),
    compareBcrypt: (str, hash) => bcrypt.compareSync(str, hash)
}
