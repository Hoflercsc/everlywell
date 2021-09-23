
import LoginPage from '../everly-page-objects/LoginPage'
import {Constants} from '../everly-page-objects/Constants'
import HomePage from '../everly-page-objects/HomePage';
import TestosteroneTestPage from '../everly-page-objects/TestosteroneTestPage';

describe(' discount plus promo code test', () => {

    before(()=> {
        cy.visit('/');
    })

    afterEach(() => {
        Cypress.Cookies.preserveOnce('_sp_id.2ff8','tatari-session-cookie','_vwo_uuid_v2','tt_sessionId'); 
    })

    it('login to everly well', () => { 
        LoginPage.userLogin(Constants.USER,Constants.PASSWORD)   
    })

    it('navigate to testosterone test', () => {
        HomePage.navigateToTestosteroneTest()
    })

    it('add to cart testosterone test', () => {
        TestosteroneTestPage.addItemToCart()
    })

    it('add promotion code', () => {
        TestosteroneTestPage.addPromotionCode()
    })

    it('verify discount and checkout', () => {
        //verify automatic discount and promo applied
        TestosteroneTestPage.verifyDiscountAddedInCart()
        TestosteroneTestPage.clickCheckOut()
    })

    after(() => {
        cy.clearCookies()
    })

})