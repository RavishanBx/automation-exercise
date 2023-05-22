class UserRegistration{

verifyHomePageLoading(){
    cy.xpath('//h2[normalize-space()=\'Category\']')
        .as('displayCategoryTitle');
    cy.get('@displayCategoryTitle').should('be.visible');
}
clickSignUpBtn(){
    cy.xpath('//a[normalize-space()=\'Signup / Login\']')
        .as('clickSignUpBtn');
    cy.get('@clickSignUpBtn').click();
}
verifyNavigatingSignUpPage(){
    cy.url().should('include', '/login');
}

verifySignUpPageLoading(){
    cy.xpath('//h2[normalize-space()=\'New User Signup!\']')
        .as('displaySignUpTitle');
    cy.get('@displaySignUpTitle').should('be.visible');
}

clickSignUpFormBtn(){
    cy.xpath('//button[normalize-space()=\'Signup\']')
        .as('clickSignUp');
    cy.get('@clickSignUp').click();
}

signUpPageNavigationError(){
    cy.url().should('not.include', '/signup');
}






}

export default UserRegistration;