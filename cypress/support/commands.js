// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// // Cypress.Commands.add('login2demoeks005', (email, pw) => {
// //     //Clean cookies and local storage
// //     cy.clearLocalStorage().clearCookies()
// //     //Login
// //     cy.visit('https://ifp-organizer-ifpsdemo-eks005.sa.wise-paas.com/#/signIn')
// //     cy.get('form').get('input[placeholder="Username"]').type(email)
// //     cy.get('form').get('input[placeholder="Password"]').type(pw)
// //     cy.get('form').get('button[type="submit"]').click()
// //     //Check Account Name
// //     cy.get('.MuiTypography-root.jss106.jss108.MuiTypography-body1').click()
// //     cy.get('.MuiTypography-root.jss91').contains(email)
// // })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
