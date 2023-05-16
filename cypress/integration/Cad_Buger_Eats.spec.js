describe('Cadastro de entregador', function () {
        
    })
    it('Verifica título da aplicação', function(){
        cy.visit('https://buger-eats.vercel.app/')
        cy.title().should('be.equal','Buger Eats')
    })
    it('Clica no botão de cadastro', function(){
        cy.get('a')
        .click()
    })
    it('preenche os campos', function(){
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input')
          .type('Jameson Rodrigues de Oliveira')
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input')
          .type('09083744435')
        cy.get(':nth-child(3) > :nth-child(1) > input')
          .type('teste@teste.com')  
        cy.get(':nth-child(3) > :nth-child(2) > input')  
          .type('81983765463')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input')
          .type('13176668')  
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input')
          .click()  
          
    
    })      
    it('seleciona metodo de entrega', function(){
        cy.get('.delivery-method > :nth-child(1)').click()
    })

    it('upload de cnh', function(){
        cy.get('p')
        cy.get('input[type="file"]')
      .as('fileInput')
      .attachFile('CNH.pdf')
    })

    it('Enviar form', function(){
        cy.get('.button-success')
        .click    
    })

    

