// Приклад класу для сторінки авторизації
class LoginPage {
    // Локатори елементів сторінки
    get emailInput() {
      return cy.get('#signinEmail');
    }
  
    get passwordInput() {
      return cy.get('#signinPassword');
    }
  
    get loginButton() {
      return cy.contains("Login");
    }
  
    // Методи для взаємодії з елементами
    typeEmail(email) {
      this.emailInput.type(email);
      return this;
    }
  
    typePassword(password) {
      this.passwordInput.type(password, {sensitive:true});
      return this;
    }
  
    clickLoginButton() {
      this.loginButton.click();
    }
  }
  
  // Експорт класу для використання в тестах
  export default new LoginPage();