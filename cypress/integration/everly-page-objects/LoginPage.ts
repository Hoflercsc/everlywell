class LoginPage {

    private login = "//span[normalize-space(text()) = 'Login']"    
    private loginUsername = "//input[@data-test='email-field']"   
    private loginPassword = "//input[@data-test='password-field']"    
    private accountloginButton = "//input[@data-test='login-button']"

    userLogin(userName: string, password: string){
          cy.xpath(this.login).should('be.visible').click()
          cy.xpath(this.loginUsername).should('be.visible').type(userName)
          cy.xpath(this.loginPassword).should('be.visible').type(password)
          cy.xpath(this.accountloginButton).click()
    }

}

export default new LoginPage();