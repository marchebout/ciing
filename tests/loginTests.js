import { Selector } from 'testcafe'
import loginPage from '../pages/loginPage'
import homePage from '../pages/homePage'
import { URLS, CREDENCIALES, ERROR_MESSAGES } from '../data/Constantes'

fixture`Casos de prueba para la función de login`
    .page`${URLS.URL}`

test('El usuario debe iniciar sesión correctamente', async t => {
    await loginPage.enviarInfo(CREDENCIALES.VALID_CREDENTIALS.USER,CREDENCIALES.VALID_CREDENTIALS.PASS)
    await t.expect(homePage.titulo.exists).ok()
})

test('Validar que credenciales incorrectas arrojen un error', async t => {
    await loginPage.enviarInfo(CREDENCIALES.INVALID_CREDENTIALS.USER,CREDENCIALES.INVALID_CREDENTIALS.PASS)
    await t.expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGES.ERROR1)
})

test('Validar que el usuario sea requerido', async t => {
    await loginPage.enviarInfo(null,CREDENCIALES.VALID_CREDENTIALS.PASS)
    await t.expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGES.ERROR2)
})

test('Validar que el password sea requerido', async t => {
    await loginPage.enviarInfo(CREDENCIALES.VALID_CREDENTIALS.USER,null)
    await t.expect(loginPage.errorMessage.innerText).contains(ERROR_MESSAGES.ERROR3)
})
