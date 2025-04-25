class HomePage {
    // Локатори елементів сторінки
    get navPanel() {
      return cy.get('#signinEmail');
    }

    isOpened () {
        this.navPanel
    }
  }
  
  // Експорт класу для використання в тестах
  export default new HomePage();