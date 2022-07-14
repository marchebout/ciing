import { Selector, t } from 'testcafe'

class loginPage {
    constructor(){
        this.user = Selector('#user-name')
        this.pass = Selector('#password')
        this.button = Selector('#login-button')
        this.errorMessage = Selector('h3')
    }

    async enviarInfo(user, pass){
        if(user != null){
            await t.typeText(this.user,user)
        }
        if(pass != null){
            await t.typeText(this.pass,pass)
        }
        await t.click(this.button)
    }
}

export default new loginPage