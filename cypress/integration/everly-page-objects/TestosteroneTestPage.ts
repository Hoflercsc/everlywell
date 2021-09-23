import {Constants} from './Constants'


class TestosteroneKitPage {

    private testosteroneInfoSection = "//h2[@data-testid='heroProductName'][normalize-space(text()) = 'Testosterone Test']"   
    private testosteroneLevelsText = "//div[@data-testid='heroMeasuresText']//span[normalize-space(text()) = 'Measures Levels of Free Testosterone']"      
    private productQuantity = "//select[@data-testid='productQuantity']"     
    private addToCart = "//button[@data-testid='addToCartButton']" 
    private testosteroneCartCard = "//div[@data-testid='cart-product']//*[normalize-space(text()) = 'Testosterone Test']"
    private cartQuantityDropdown = "//select[@data-testid='cart-item-quantity']"      
    private cartSubtotal = "//div[@data-testid='cart-subtotal']"
    private cartTotalPrice = "//div[@data-testid='cart-total-price']"      
    private promotionCode = "//button[@data-testid='cart-promo-link']"      
    private promotionCodeInput = "//input[@data-testid='cart-promo-input']" 
    private applyBtn = "(//input[@data-testid='cart-promo-input']/following::button[@type='submit'])[1]"      
    private appliedPromo = "//div[@data-testid='cart-applied-promo-wrapper']"      
    private checkOut = "//a[@data-testid='checkout-link']"  
    private emailInputField = "//input[@data-testid='email-checkout-input']"      


    //----methods 
    verifyTestosteronePage(){
        cy.xpath(this.testosteroneInfoSection).should('be.visible')
        cy.xpath(this.testosteroneLevelsText).should('be.visible')
    }

    selectQuantityAddToCart(){
        cy.wait(4000)
        cy.xpath(this.productQuantity).should('be.visible').select('5')
        cy.wait(2000)
        cy.xpath(this.addToCart).should('not.be.disabled').click({force: true})
        cy.wait(4000)
    }

    veirfyTestosteroneAndQtyInCart(){
        cy.xpath(this.testosteroneCartCard).should('be.visible')
        cy.xpath(this.cartQuantityDropdown).find('option:selected').should('have.text', '5')
    }

    enterPromotionCode(){
        cy.xpath(this.promotionCode).should('be.visible').click()
        cy.wait(1000)
        cy.xpath(this.promotionCodeInput).type('2020')
        cy.wait(1000)
        cy.xpath(this.applyBtn).should('not.be.disabled').click()
        cy.wait(1000)
        cy.xpath(this.appliedPromo).should('be.visible') // promo code should appear
    }

    veirfyDiscountInCart(){
         // ---when automatic discount is applied the subtotal should reflect this
        //--- verifying the subtotal value is $49.00
        cy.xpath(this.cartSubtotal).should('have.text',Constants.SUBTOTAL_ONE)
        //--- promo code takes off 12% or $5.88
        //--- $49.00 - $5.88 = $43.12
        //--- verifying the cart total price is $43.12
        cy.xpath(this.cartTotalPrice).should('have.text',Constants.TOTAL_PRICE_ONE)
    }

    veirfyPromoCodeNoDiscountInCart(){
        //--- REMINDER NO AUTOMATIC DISCOUNT APPLIED JUST PROMO CODE 
        // Testosterone test 5 Qty normal price $245.00
        //--- verifying the subtotal value is $245.00
        cy.xpath(this.cartSubtotal).should('have.text',Constants.SUBTOTAL_TWO)
        //--- promo code takes off 12% or $29.40
        //---- $245.00 - $29.40 = $215.60
        //--- verifying the cart total price value is $215.60
        cy.xpath(this.cartTotalPrice).should('have.text',Constants.TOTAL_PRICE_TWO)
    }

    clickCheckOut(){
        cy.xpath(this.checkOut).should('be.visible').click()
        cy.xpath(this.emailInputField).should('be.visible')
        cy.wait(4000)
    }
    
    // ----main functions ----
    addItemToCart(){
        this.verifyTestosteronePage()
        this.selectQuantityAddToCart()
    }

    addPromotionCode(){
        this.enterPromotionCode()
    }

    //--- verifying the subtotal value is $49.00
    verifyDiscountAddedInCart(){
       this.veirfyTestosteroneAndQtyInCart()
       this.veirfyDiscountInCart()
    }

    verifyPromoSavingsNoDiscount(){
        this.veirfyPromoCodeNoDiscountInCart()
     }

}
export default new TestosteroneKitPage();