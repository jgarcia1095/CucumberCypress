import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})

When('I type any word', () => {
  cy.get('.gLFyf').type('lo que sea')
})