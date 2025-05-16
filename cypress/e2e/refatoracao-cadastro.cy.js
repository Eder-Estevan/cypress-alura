
describe('Pagina de login', () => {
  beforeEach(() => {
     cy.visit('https://adopet-frontend-cypress.vercel.app/');
     cy.contains('a', 'Cadastrar').click();

  })


  it.only('Realizar cadastro',() =>{
    cy.cadastrar('Eder Estevan', 'senha1@senha.com.br', 'Senha@12346');
  })
  
})



