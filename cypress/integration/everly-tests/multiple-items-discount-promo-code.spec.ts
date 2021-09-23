
import LoginPage from '../everly-page-objects/LoginPage'
import {Constants} from '../everly-page-objects/Constants'
import HomePage from '../everly-page-objects/HomePage';
import MensHealthTestPage from '../everly-page-objects/MensHealthTestPage';
import TestosteroneTestPage from '../everly-page-objects/TestosteroneTestPage';


describe('multiple items discount promo code', () => {

    before(()=> {
        cy.visit('/');
    })

    afterEach(() => {
        Cypress.Cookies.preserveOnce('_sp_id.2ff8','tatari-session-cookie','_vwo_uuid_v2','tt_sessionId'); 
    })

    it('login to everlywell', () => { 
        LoginPage.userLogin(Constants.USER,Constants.PASSWORD)   
    })

    it('navigate to testosterone test', () => {
        HomePage.navigateToTestosteroneTest()
    })

    it('add testosterone test', () => {
        TestosteroneTestPage.addItemToCart()
    })

    it('navigate to mens health test', () => {
        HomePage.navigateToMensHealthTest()
    })

    it('add mens health test', () => {
        MensHealthTestPage.addItemToCart()
    })

    it('add promotion code', () => {
        MensHealthTestPage.addPromotionCode()
    })

    it('verify discount added in cart', () => {
        //verify automatic discount and promo applied
        MensHealthTestPage.verifyDiscountAddedInCart()
        MensHealthTestPage.clickCheckOut()
    })

    after(() => {
        cy.clearCookies()
    })

})