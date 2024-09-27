/// <reference types="cypress" />
describe.skip('page', () => {
  beforeEach(() => {
    console.log('test start')
  })

  afterEach(() => {
    console.log('test end')
  })

  it('fails', () => {
    cy.visit('https://example.cypress.io')

    cy.then(() => {
      expect(false).to.eq(true)
    })
  })
})
