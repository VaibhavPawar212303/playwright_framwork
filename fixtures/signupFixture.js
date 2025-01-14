import base from "@playwright/test"
import RegisterPage from "../pages/registrationPage"



exports.test = base.test.extend({
    registerPage : async({page},use)=>{
        await use(new RegisterPage(page))
    }
})

exports.expect = base.expect;