describe('Pagina de login', () => {
  beforeEach(() => {
     cy.visit('https://adopet-frontend-cypress.vercel.app/');
     cy.get('[data-test="login-button"]').click();

  })

  it('Deve preencher os campos de login corretamente e autenticar o usuario na pagina', () => {   
    cy.login('eder@email.com.br', 'Eder1234' );
  
  })
})



