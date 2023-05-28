const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
    return bcrypt.hashSync(plainPassword, 10)
}

const comparePassword = (plainPassword, hashPassword) => {
    //* plainPassword : Contraseña que recibimos del Login
    //* hashedPassword : Contraseña que tenenemos guardada en la base de datos
    //! Esta utilidad se usa cuando hacemos un login y recibimos la contraseña del usuario 
    //! y la comparamos con la que tenemos en la DB
    return bcrypt.compareSync(plainPassword, hashedPassword)
}


module.exports = { 
    hashPassword, 
    comparePassword
}