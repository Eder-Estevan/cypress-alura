describe('Pagina de login', () => {
  beforeEach(() => {
     cy.visit('https://example.cypress.io/todo');
    // cy.get('[data-test="login-button"]').click();

  })

  it('Deve preencher os campos de login corretamente e autenticar o usuario na pagina', () => {   
    cy.adiciona('Trocar a ração', 'Dar banho com água gelada');
  
  })
})








// describe('Pagina de login', () => {
//   beforeEach(() => {
//      cy.visit('https://adopet-frontend-cypress.vercel.app/');
//      cy.get('[data-test="login-button"]').click();

//   })



// describe('Alimentando o gato', () => {
//   beforeEach(() => {
//      cy.visit('https://example.cypress.io/todo');
//     //  cy.get('[data-test="login-button"]').click();

//   })

//   it('Deve preencher os campos de login corretamente e autenticar o usuario na pagina', () => {   
//     cy.adiciona('item');


// No arquivo commands.js, escreva o comando personalizado:

// Cypress.Commands.add('adiciona', (item)=>{
//      cy.get('[data-test=new-todo]').type(`${item}{enter}`)
// })


//O comando personalizado cria um novo comando chamado adiciona que utiliza o parâmetro item para armazenar o argumento em texto e o digita no campo da lista. Após essa execução, há a opção {enter} que é aplicada para simular o input do teclado da pessoa usuária.