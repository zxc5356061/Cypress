/// <reference types="cypress" />

context('production area', () => {
    before (() => {
      cy.visit('https://ifps-mom-ifpsdev-eks005.sa.wise-paas.com/PProductionArea')
    })
    
    it('Test - Connect API', () => {
      cy.request('https://ifps-mom-api-ifpsdev-eks005.sa.wise-paas.com')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response).to.have.property('headers')
          expect(response).to.have.property('duration')
          expect(response.body.message).to.eq('ifps-mom-api')
        })
    })

    it('Test - Is Project MOM', () => {
      cy.wait(7000)
      cy.get('.project-name-text span').first().as('ProjectNameTextSpan')
      cy.get('@ProjectNameTextSpan').should('have.text', 'MOM')
    })

    it('Test - Is Page Production Area', () => {
      cy.get('.portal-default-layout-guide-wrapper').find('.guide-field.active').find('.guide-child-block.active').find('.guide-child-text span')
        .as('GuideChildTextSpan')
      cy.get('@GuideChildTextSpan').should('have.text', 'Production Area')
    })
  
  })
  