
describe('All tests', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space', {auth:{username: "guest", password: "welcome2qauto"} })
  })

  it('Find text Registration', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.contains('.modal-open', 'Registration');
  });

  // Field Name
  it('Field Name empty', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('{selectall}{backspace}');
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('Qwer1234');
    cy.get('input[name="repeatPassword"]').type('Qwer1234');
    cy.contains("Register").click({ force: true });
    cy.contains('Name required')
  });
  it('Field Name wrong', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('тест'); //should('have.value', '');
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('Qwer1234');
    cy.get('input[name="repeatPassword"]').type('Qwer1234');
    cy.contains("Register").click({ force: true });
    cy.contains('Name is invalid')
  });

  it('Field Name lenght < 2 ', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('A'); //should('have.value', '');
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('Qwer1234');
    cy.get('input[name="repeatPassword"]').type('Qwer1234');
    cy.contains("Register").click({ force: true });
    cy.contains('Name has to be from 2 to 20 characters long')
  });

  it('Field Name lenght > 20 ', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('Qwertyuiopasdfghjklzxc'); // 21 symbol
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('Qwer1234');
    cy.get('input[name="repeatPassword"]').type('Qwer1234');
    cy.contains("Register").click({ force: true });
    cy.contains('Name has to be from 2 to 20 characters long')
  });

  it('Field Name have border color Red', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('Qwertyuiopasdfghjklzxc'); // 21 symbol
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('Qwer1234');
    cy.get('input[name="repeatPassword"]').type('Qwer1234');
    cy.contains("Register").click({ force: true });
    cy.get('input[name="name"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

// Fiel LastName
it('Field LastName empty', () => {
  cy.get('.hero-descriptor_btn').click();
  cy.get('input[name="name"]').type('Test');
  cy.get('input[name="lastName"]').type('{selectall}{backspace}');
  cy.get('input[name="email"]').type('test@test.com');
  cy.get('input[name="password"]').type('Qwer1234');
  cy.get('input[name="repeatPassword"]').type('Qwer1234');
  cy.contains("Register").click({ force: true });
  cy.contains('Last name required')
});
it('Field LastName wrong', () => {
  cy.get('.hero-descriptor_btn').click();
  cy.get('input[name="name"]').type('Test'); //should('have.value', '');
  cy.get('input[name="lastName"]').type('Тест');
  cy.get('input[name="email"]').type('test@test.com');
  cy.get('input[name="password"]').type('Qwer1234');
  cy.get('input[name="repeatPassword"]').type('Qwer1234');
  cy.contains("Register").click({ force: true });
  cy.contains('Last Name is invalid')
});

it('Field Last Name lenght < 2 ', () => {
  cy.get('.hero-descriptor_btn').click();
  cy.get('input[name="name"]').type('Test'); //should('have.value', '');
  cy.get('input[name="lastName"]').type('T');
  cy.get('input[name="email"]').type('test@test.com');
  cy.get('input[name="password"]').type('Qwer1234');
  cy.get('input[name="repeatPassword"]').type('Qwer1234');
  cy.contains("Register").click({ force: true });
  cy.contains('Last Name has to be from 2 to 20 characters long')
});

it('Field Last Name lenght > 20 ', () => {
  cy.get('.hero-descriptor_btn').click();
  cy.get('input[name="name"]').type('Test'); 
  cy.get('input[name="lastName"]').type('QwertyuiopasdfghjklzxcTest');
  cy.get('input[name="email"]').type('test@test.com');
  cy.get('input[name="password"]').type('Qwer1234');
  cy.get('input[name="repeatPassword"]').type('Qwer1234');
  cy.contains("Register").click({ force: true });
  cy.contains('Name has to be from 2 to 20 characters long')
});

it('Field Last Name have border color Red', () => {
  cy.get('.hero-descriptor_btn').click();
  cy.get('input[name="name"]').type('Test'); // 21 symbol
  cy.get('input[name="lastName"]').type('Qwertyuiopasdfghjklzxc');
  cy.get('input[name="email"]').type('test@test.com');
  cy.get('input[name="password"]').type('Qwer1234');
  cy.get('input[name="repeatPassword"]').type('Qwer1234');
  cy.contains("Register").click({ force: true });
  cy.get('input[name="lastName"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
});

// Check email
it('Field email wrong', () => {
  cy.get('.hero-descriptor_btn').click();
  cy.get('input[name="name"]').type('Test'); //
  cy.get('input[name="lastName"]').type('Test');
  cy.get('input[name="email"]').type('test@test');
  cy.get('input[name="password"]').type('Qwer1234');
  cy.get('input[name="repeatPassword"]').type('Qwer1234');
  cy.contains("Register").click({ force: true });
  cy.contains('Email is incorrect')
  });

  it('Field email empty', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('Test'); 
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('{selectall}{backspace}');
    cy.get('input[name="password"]').type('Qwer1234');
    cy.get('input[name="repeatPassword"]').type('Qwer1234');
    cy.contains("Register").click({ force: true });
    cy.contains('Email required')
  });

  it('Field email have border color Red', () => {
      cy.get('.hero-descriptor_btn').click();
      cy.get('input[name="name"]').type('Test'); 
      cy.get('input[name="lastName"]').type('Test');
      cy.get('input[name="email"]').type('test@test');
      cy.get('input[name="password"]').type('Qwer1234');
      cy.get('input[name="repeatPassword"]').type('Qwer1234');
      cy.contains("Register").click({ force: true });
      cy.get('input[name="email"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    });

  // Field Password
  it('Field password empty', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('Test'); 
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('{selectall}{backspace}');
    cy.get('input[name="repeatPassword"]').type('Qwer1234');
    cy.contains("Register").click({ force: true });
    cy.contains('Password required')
  });

  it('Field Password lenght < 8 ', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('Test'); 
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('1234567');
    cy.get('input[name="repeatPassword"]').type('Qwer1234');
    cy.contains("Register").click({ force: true });
    cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  });

  it('Field Password lenght > 15 ', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('Test'); 
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('Qwer123412345678');
    cy.get('input[name="repeatPassword"]').type('Qwer1234');
    cy.contains("Register").click({ force: true });
    cy.contains('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
  });

  it('Field Password have border color Red', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('Test'); 
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('Qwer123412345678');
    cy.get('input[name="repeatPassword"]').type('Qwer1234');
    cy.contains("Register").click({ force: true });
    cy.get('input[name="password"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

  // Field re-enter Password
  
  it('Field re-enter Passwords do not match', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('Test'); 
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('Qwer1234');
    cy.get('input[name="repeatPassword"]').type('Qwer12341');
    cy.contains("Register").click({ force: true });
    cy.contains('Passwords do not match')
  });

  it('Field re-enter Password empty', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('Test'); 
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('Qwer1234');
    cy.get('input[name="repeatPassword"]').type('{selectall}{backspace}');
    cy.contains("Register").click({ force: true });
    cy.contains('Re-enter password required')
  });
  
  it('Field re-enter Password have border color Red', () => {
    cy.get('.hero-descriptor_btn').click();
    cy.get('input[name="name"]').type('Test'); 
    cy.get('input[name="lastName"]').type('Test');
    cy.get('input[name="email"]').type('test@test.com');
    cy.get('input[name="password"]').type('Qwer1234');
    cy.get('input[name="repeatPassword"]').type('Qwer123412345678');
    cy.contains("Register").click({ force: true });
    cy.get('input[name="repeatPassword"]').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });

// Final registation

it('Registration success', () => {
  cy.get('.hero-descriptor_btn').click();
  cy.get('input[name="name"]').type('Andr'); 
  cy.get('input[name="lastName"]').type('Pi');
  cy.get('input[name="email"]').type('andr.podo+test1@gmail.com');
  cy.get('input[name="password"]').type('Qwer1234');
  cy.get('input[name="repeatPassword"]').type('Qwer1234');
  cy.contains("Register").click();
  cy.contains('My profile')
});

})