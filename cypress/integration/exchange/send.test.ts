describe('Send', () => {
  it('should redirect', () => {
    cy.visit('/send')
    cy.url().should('include', '/swap')
  })

  it('should redirect with url params', () => {
    cy.visit(
      '/send?inputCurrency=0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288&outputCurrency=0xd30854a284C72Ef4969B74b64628DB4bD697e900',
    )
    cy.url().should(
      'contain',
      '/swap?inputCurrency=0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288&outputCurrency=0xd30854a284C72Ef4969B74b64628DB4bD697e900',
    )
  })
})
