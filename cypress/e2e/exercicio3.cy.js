// // *** Exercícios ***
// // 1- Rode seus testes em modo headless;

// Rode no terminal o comando: npx cypress run


// // 2- Crie relatórios em json;

// const { defineConfig } = require("cypress");

//   module.exports = defineConfig({
//      e2e: {
//       setupNodeEvents(on, config) {
//         // implement node event listeners here
//       },
//       video: true,
//       reporter: 'mochawesome',
//       reporterOptions: {
//         reportDir: 'cypress/results',
//         overwrite: false,
//         html: true,
//         json: true,
//         timestamp: "mmddyyyy_HHMMss" 
//       }
//     },
//   });



// // 3- Grave os testes no Cypress Cloud com o recurso de record;

// npx cypress run --record --key 6c3b70e2-f8d7-4899-9f2f-36ab91bc6177

// // 4- Aplique o comando personalizado de login em outros fluxos de teste. Exemplo: usuário acessa página de mensagem, é redirecionado para o login;

// describe('Fluxo de Login', () => {
//     beforeEach(() => {
//         cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     })
   
//     it('Verifica mensagem de texto', () =>{
//         cy.get('.header__message').click();
//         cy.login('ana@email.com','Senha123');    
//     })
//  });


// // 5- Na tela de home, verifique se as imagens dos pets aparecem.

//  it('Verifica imagens dos animais', () =>{
//         cy.visit('https://adopet-frontend-cypress.vercel.app/home');
//         cy.get('.cards').should('be.visible');
      
//     })