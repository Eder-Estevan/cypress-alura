// *** Exercícios ***
// 1- Refatore os testes já realizados aplicando o método beforeEach().
// describe('Teste de páginas no Adopet', () => {
//     beforeEach(() => {
//         cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     })
//     it('deve  clicar no botão ‘Ver pets disponíveis para adoção”', () => {
//         cy.get('.button').click()     
       
//     });

//     it("deve testar os botão de home", ()=>{
//        cy.get('.header__home').click()  

//     })

//     it("Deve testar os botão de mensagens", ()=>{
//         cy.get('.header__message').click()  
//     })

//     it("Visita a página de /login do Adopet", ()=>{
//         cy.visit('https://adopet-frontend-cypress.vercel.app/login');
//     })

//     it("Visita a página de /home do Adopet", ()=>{
//         cy.visit('https://adopet-frontend-cypress.vercel.app/home');
//     })

//     it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
//         cy.visit('https://adopet-frontend-cypress.vercel.app/home');
//         cy.get('.header__message').click()  
//     })
    
// });




// 2- Visite a página principal do AdoPet e verifique se o title com o texto “AdoPet” está presente no html.

// describe('Testes na Página principal', () => {
//     beforeEach(() => {
//         cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     })
//     it('deve clicar no botão ‘Ver pets disponíveis para adoção”', () => {
//         cy.title().should('eq', 'AdoPet');
     
//     });
 
// });

// 3- Visite a página principal do AdoPet e verifique se o texto “Quem ama adota!” está presente no html.




// 4- Visite a página principal do AdoPet e verifique se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html.

// describe('Teste quem ama adota', () => {
//     beforeEach(() => {
//         cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     })
   
//     it('Verifica mensagem de texto', () =>{
//         cy.contains('p', 'Quem ama adota!').should('be.visible')
//     })

//     it('Verifica mensagem de texto', () =>{
//         cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible')
//     })
 
//   });



// 5- Teste o login com um fluxo diferente: Visite a página principal do Adopet, clique no botão de ícone de mensagem no header e escreva nome e senha válidos na página de login.

// describe('Fluxo de Login', () => {
//     beforeEach(() => {
//         cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     })
   
//     it('Verifica mensagem de texto', () =>{
//         cy.get('.header__message').click();
//         cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
//       cy.get('[data-test="input-loginPassword"]').type('Senha123');
//       cy.get('[data-test="submit-button"]').click();  

//     })
       
//  });