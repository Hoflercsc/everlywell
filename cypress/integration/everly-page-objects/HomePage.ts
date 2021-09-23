class HomePage {

    private shopMenu = "//button[@data-testid='desktop-menu-button-1']"  
    private shopMenuDrawer = "//nav[@data-testid='desktop-menu-drawer-shop']"
    private mensHealth = "[data-testid=desktop-menu-drawer-shop] > :nth-child(2)"    
    private testosteroneTest = "//a[@data-testid='testosterone-test']"    
    private mensHealthTest = "//a[@data-testid='mens-health-test']"    

    clickShop(){
        cy.xpath(this.shopMenu).click()
    }

    verifyShopMenuDrawerVisible(){
        cy.xpath(this.shopMenuDrawer).should('be.visible')
    }

    clickMensHealth(){
        cy.get(this.mensHealth).click()
    }

    clickTestosteroneTest(){
        cy.xpath(this.testosteroneTest).click()
    }

    clickMensHealthTest(){
        cy.xpath(this.mensHealthTest).click()
    }

    navigateToTestosteroneTest(){
        this.clickShop()
        this.verifyShopMenuDrawerVisible()
        this.clickMensHealth()
        this.clickTestosteroneTest()
    }

    navigateToMensHealthTest(){
        this.clickShop()
        this.verifyShopMenuDrawerVisible()
        this.clickMensHealth()
        this.clickMensHealthTest()
    }

}
export default new HomePage();