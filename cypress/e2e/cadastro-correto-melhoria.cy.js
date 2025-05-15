describe('Pagina de cadastro', () => {
  it('Preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Eder Estevan');
    cy.get('[data-test="input-email"]').type('eder@email.com.br');
    cy.get('[data-test="input-password"]').type('Eder1234');
    cy.get('[data-test="input-confirm-password"]').type('Eder1234');
    cy.get('[data-test="submit-button"]').click();
  })
})



