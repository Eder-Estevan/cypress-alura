describe('Pagina de login', () => {
  beforeEach(() => {
     cy.visit('https://adopet-frontend-cypress.vercel.app/');
     cy.get('[data-test="login-button"]').click();

  })

  it('Deve preencher os campos de login corretamente e autenticar o usuario na pagina', () => {   
    cy.get('[data-test="input-loginEmail"]').type('eder@email.com.br');
    cy.get('[data-test="input-loginPassword"]').type('Eder1234');
    cy.get('[data-test="submit-button"]').click();
  })
})



