import { Selector } from "testcafe";

class homePage {
    constructor(){
        this.titulo = Selector('.title').withText('PRODUCTS')
    }
}

export default new homePage