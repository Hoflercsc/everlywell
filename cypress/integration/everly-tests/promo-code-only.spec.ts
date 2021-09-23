
import LoginPage from '../everly-page-objects/LoginPage'
import {Constants} from '../everly-page-objects/Constants'
import HomePage from '../everly-page-objects/HomePage';
import TestosteroneTestPage from '../everly-page-objects/TestosteroneTestPage';

describe('promo code only test', () => {

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

    after(() => {
        cy.clearCookies()
    })

})