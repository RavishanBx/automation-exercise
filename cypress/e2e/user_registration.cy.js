import UserRegistration from "../page_objects/UserRegistration.js";
context('User Registration', () => {
    const ln = new UserRegistration();

    describe('User Registration',() => {
        beforeEach('Visit the site', () => {
            cy.visit('https://automationexercise.com/');
        })

        it('Home page should be visible successfully', () => {
            ln.verifyHomePageLoading();
        });

        it('Sign up page should load successfully', () => {
            ln.clickSignUpBtn();
            ln.verifyNavigatingSignUpPage();
            ln.verifySignUpPageLoading();
        });

        it('Should give error if clicked sign up btn without filling out fields', () => {
            ln.clickSignUpBtn();
            ln.verifyNavigatingSignUpPage();
            ln.verifySignUpPageLoading();
            ln.clickSignUpFormBtn();
            ln.signUpPageNavigationError();
        });

    });
});