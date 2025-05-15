describe('Pagina de cadastro', () => {
  it('Preencher os campos do formulario corretamente para cadastrar um novo usuario', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name = "nome"]').type('Eder Estevan');
    cy.get('input[name = "email"]').type('eder@email.com.br');
    cy.get('input[name = "password"').type('Eder1234');
    cy.get('input[name = "confirm_password"]').type('Eder1234');
    cy.contains('button' , 'Cadastrar').click();
  })
})



