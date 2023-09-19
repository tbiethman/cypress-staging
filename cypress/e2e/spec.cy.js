/// <reference types="cypress" />
describe('page', () => {
  beforeEach(() => {
    console.log('test start')
  })

  afterEach(() => {
    console.log('test end')
  })

  it('works', () => {
    cy.visit('https://example.cypress.io')
  })
})
