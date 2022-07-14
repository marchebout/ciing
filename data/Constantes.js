import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    URL: process.env.URL_UNIVA
}

export const CREDENCIALES = {
    VALID_CREDENTIALS: {
        USER: process.env.USER_UNIVA,
        PASS: process.env.PASS_UNIVA
    },
    INVALID_CREDENTIALS: {
        USER: 'User equivocado',
        PASS: 'Password equivocado'
    }
}

export const ERROR_MESSAGES = {
    ERROR1: 'Epic sadface: Username and password do not match any user in this service',
    ERROR2: 'Epic sadface: Username is required',
    ERROR3: 'Epic sadface: Password is required'
}