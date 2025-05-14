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



// *****  Exercícios  *****
// Com o Cypress, escreva os códigos dos seguintes testes:

// 1- Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;

// describe('Visitar pagina do AdoPet', () => {
//   it('Clicar no botão "ver pets disponiveis para adoção', () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
    



//   }




// 2- Visite a página de principal do AdoPet e teste os botões header;
// 3- Visite a página de /login do Adopet;
// 4- Visite a página de /home do Adopet;
// 5- Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.