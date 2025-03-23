
describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {auth:{username: "guest", password: "welcome2qauto"} })
  })

  it('My first test', () => {
    cy.get('.todo-list li').should('have.length', 2)
  })
})