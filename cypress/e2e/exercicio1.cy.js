// Exercícios
// Com o Cypress, escreva os códigos dos seguintes testes:

// 1- Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”;


//   describe('Visitar pagina do AdoPet', () => {
//   it('PClicar no botão "ver pets disponiveis para adoção', () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
//     cy.contains('a', 'Ver pets disponíveis para adoção').click();
//   })
// })




// 2- Visite a página de principal do AdoPet e teste os botões header;


//   describe('Visite a página de principal do AdoPet', () => { 
//   it('Teste os botões header', () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
//         // cy.get('.header__message').click()  
//         // cy.get('.header__home').click();
//         // cy.get('.header__message').click()  
//   })
// })



// 3- Visite a página de /login do Adopet;

//  describe('Visite a página de /login do Adopet', () => { 
//   it.only('Teste o botão login', () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app/');
//        cy.contains('a', 'Fazer login' ).click();
      
         
//   })
// })

// ou 

    //  it("Visita a página de /login do Adopet", ()=>{
    //     cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    // })



// 4- Visite a página de /home do Adopet;
    // it("Visita a página de /home do Adopet", ()=>{
    //     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    // })


// 5- Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”.

    //  it("Visita a página de /home do AdoPet e clique no botão “Falar com o responsável”", ()=>{
    //     cy.visit('https://adopet-frontend-cypress.vercel.app/home');
    //     cy.get('.header__message').click()  
    // })