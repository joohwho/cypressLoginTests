class LoginPage{

    constructor() {
        this.element = {
            username: '#username',
            password: '#password',
            submit: '#submit'
        };
    }

    visitLoginPage(){
        cy.visit('https://practicetestautomation.com/practice-test-login/');
    }

    fillUsername(username){
        cy.get(this.element.username).type(username);
    }

    fillPassword(password){
        cy.get(this.element.password).type(password);
    }

    submitLogin(){
        cy.get(this.element.submit).click();
    }
}

export default LoginPage;
