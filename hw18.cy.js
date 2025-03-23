
describe('authorize on site', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {auth:{username: "guest", password: "welcome2qauto"} })
  })

  it('Find all button on header', () => {
    cy.get('button').should('have.length.greaterThan', 0);
  });
  it('should find a button by its exact text', () => {
    // Знаходимо кнопку з конкретним текстом
    cy.contains('button', 'Sign up').should('exist');
  });
  it('should find all links in the footer', () => {
    // Перевіряємо, чи є посилання у футері
    cy.get('footer a').should('have.length.greaterThan', 0).each((link) => {
        cy.wrap(link).should('have.attr', 'href'); // Переконуємось, що у посилань є атрибут href
    });
  });

})