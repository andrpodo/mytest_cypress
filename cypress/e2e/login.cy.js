import LoginPage from '../support/POMs/loginPage';
import HomePage from '../support/POMs/homePage';


describe('Login Functionality', () => {

  beforeEach(() => {
        cy.visit('https://qauto.forstudy.space', {auth:{username: "guest", password: "welcome2qauto"} })
      })

  it('should login successfully with valid credentials', () => {
    cy.contains("Sign In").click();
    LoginPage
      .typeEmail('andr.podo+test1@gmail.com')
      .typePassword('Qwer1234')
      .clickLoginButton();

    // Додайте додаткові перевірки для підтвердження успішного входу
    HomePage.isOpened();
  });
});