// **** Exercícios ****

// 1- Faça uma request para a API do AdoPet com um usuário autenticado e verifique se, ao acessar a página de /perfil, há o nome do usuário em sua resposta.


describe('Api Adopet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZGQ3ZWFkNi1lYjQxLTQ1ZGQtOGE3NS0wM2IwMjI4NWJiZTciLCJhZG9wdGVyTmFtZSI6ImNhbWlsYSIsImlhdCI6MTcwODk1NTE3OCwiZXhwIjoxNzA5MjE0Mzc4fQ.fdtfjYaan12Z7SOVU02rb_HpmXt76XbhZMszI1eVJc8`
    
          it('Nome do perfil', () => {
              cy.request({
                  method: 'GET' ,
                  url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/0dd7ead6-eb41-45dd-8a75-03b02285bbe7',
                  headers: { authorization }
                 
              }).then((res) => {
                  expect(res.status).to.be.equal(200)
                  expect(res.body).is.not.empty
                  expect(res.body).to.have.property('perfil')
              expect(res.body.perfil.nome).to.be.equal('camila')
                               
              })
          })
      })


// 2- Na página de exemplos do cypress, verifique se a funcionalidade de delete funciona.

 it('Consegue deletar todas as tarefas', () => {
      cy.contains('Clear completed').click()
      cy.get('.todo-list li')
        .should('have.length', 1)
        .should('not.have.text', 'Pay electric bill')
       cy.contains('Clear completed').should('not.exist')
    })


// 3- Na página de exemplos do cypress. verifique se a funcionalidade de filtrar tarefas funciona.

it('Para filtrar tarefas completas', () => {
       cy.contains('Completed').click()

      cy.get('.todo-list li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'Pay electric bill')

      cy.contains('Walk the dog').should('not.exist')
    })