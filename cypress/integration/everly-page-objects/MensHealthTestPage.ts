import {Constants} from './Constants'


class MensHealthTestPage {

    private meansHealthInfoSection = "//h2[@data-testid='heroProductName'][normalize-space(text()) = \"Men's Health Test\"]"   
    private hormonesLevelsText = "//div[@data-testid='heroMeasuresText']//span[normalize-space(text()) = 'Measures Levels of Key Male Hormones']"  
    private productQuantity = "//select[@data-testid='productQuantity']"     
    private addToCart = "//button[@data-testid='addToCartButton']" 
    private mensHealthCartCard = "//div[@data-testid='cart-product']//*[normalize-space(text()) = \"Men's Health Test\"]"
    private cartQuantityDropdown = "(//select[@data-testid='cart-item-quantity'])[2]"      
    private cartSubtotal = "//div[@data-testid='cart-subtotal']"
    private cartTotalPrice = "//div[@data-testid='cart-total-price']"      
    private promotionCode = "//button[@data-testid='cart-promo-link']"      
    private promotionCodeInput = "//input[@data-testid='cart-promo-input']" 
    private applyBtn = "(//input[@data-testid='cart-promo-input']/following::button[@type='submit'])[1]"      
    private appliedPromo = "//div[@data-testid='cart-applied-promo-wrapper']"      
    private checkOut = "//a[@data-testid='checkout-link']"  
    private emailInputField = "//input[@data-testid='email-checkout-input']"      

    //----methods 
    verifyMensHealthPage(){
        //cy.xpath(this.meansHealthInfoSection).should('be.visible')
        cy.xpath(this.hormonesLevelsText).should('be.visible')
    }

    selectQuantityAddToCart(){
        cy.wait(4000)
        cy.xpath(this.productQuantity).should('be.visible').select('5')
        cy.wait(4000)
        cy.xpath(this.addToCart).should('not.be.disabled').click({force: true})
        cy.wait(4000)
    }

    veirfyMensHealthAndQtyInCart(){
        cy.xpath(this.mensHealthCartCard).should('be.visible')
        cy.xpath(this.cartQuantityDropdown).find('option:selected').should('have.text', '5');
    }

    enterPromotionCode(){
        cy.xpath(this.promotionCode).should('be.visible').click()
        cy.xpath(this.promotionCodeInput).type('2020')
        cy.xpath(this.applyBtn).should('not.be.disabled').click()
        cy.xpath(this.appliedPromo).should('be.visible')
    }

    veirfyDiscountInCart(){
        // ---when automatic discount is applied the subtotal should reflect this
        //--Testosterone Test   $49.00 for Qty 5
        //---Men's Health Test $199.00 for Qty 5
        //--- $49.00 + $199.00 = $248.00
        //--- verifying the cart subtotal value is $248.00
        cy.xpath(this.cartSubtotal).should('have.text',Constants.SUBTOTAL_THREE)
        //--- Discount takes off 12% or $29.76
        //--- $248.00 - $29.76 = $218.24
        //--- verifying the subtotal value is $218.24
        cy.xpath(this.cartTotalPrice).should('have.text',Constants.TOTAL_PRICE_THREE)
    }

    clickCheckOut(){
        cy.xpath(this.checkOut).should('be.visible').click()
        cy.xpath(this.emailInputField).should('be.visible')
        cy.wait(4000)
    }
    
    // ----main functions ----
    addItemToCart(){
        this.verifyMensHealthPage()
        this.selectQuantityAddToCart()
    }

    addPromotionCode(){
        this.enterPromotionCode()
    }

    verifyDiscountAddedInCart(){
       this.veirfyMensHealthAndQtyInCart()
       this.veirfyDiscountInCart()
    }

}
export default new MensHealthTestPage();