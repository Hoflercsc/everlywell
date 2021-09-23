
import LoginPage from '../everly-page-objects/LoginPage'
import {Constants} from '../everly-page-objects/Constants'
import HomePage from '../everly-page-objects/HomePage';
import TestosteroneTestPage from '../everly-page-objects/TestosteroneTestPage';
//import CheckoutPage from '../everly-page-objects/CheckoutPage'; // not actually created 

describe('check out feature test fail', () => {

    before(()=> {
        cy.visit('/');
    })

    afterEach(() => {
        Cypress.Cookies.preserveOnce('_sp_id.2ff8','tatari-session-cookie','_vwo_uuid_v2'); 
    })
    
    it('login to everly', () => { 
        LoginPage.userLogin(Constants.USER,Constants.PASSWORD)   
    })

    it('naviage to Testosterone test', () => {
        HomePage.navigateToTestosteroneTest()
    })

    it('add to cart testosterone test', () => {
        TestosteroneTestPage.addItemToCart()
    })

    it('add promotion code in cart', () => {
        TestosteroneTestPage.addPromotionCode()
    })

    it('verify promo code discount and checkout', () => {
        // Remeber no automatic discount applied just promo code
        TestosteroneTestPage.verifyPromoSavingsNoDiscount()
        TestosteroneTestPage.clickCheckOut()
    })

    it('fill check out shipping payment information form', () => {
        //--- classes not created but this is how i would test check out
        //--- this would fail because of incorrect informatiion entered
        //CheckoutPage.incorrectShippingInformation()
        //CheckoutPage.incorrectPaymentInformation()
        //ChekoutPage.placeOrder.click()
    })

    after(() => {
        cy.clearCookies()
    })

})