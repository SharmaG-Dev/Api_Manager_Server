const crypto = require('crypto-js')



const Encrypt = (text, secretkey) => {
    const encrypted = crypto.AES.encrypt(text, secretkey)

    return encrypted
}


const Dcrypt = (encrypted, secretkey) => {
    const dcrypted = crypto.AES.decrypt(encrypted, secretkey).toString(crypto.enc.Utf8)

    return dcrypted
}



module.exports = { Encrypt, Dcrypt }

