describe('Remove Liquidity', () => {
  it('redirects from address-address to address/address', () => {
    cy.visit('/remove/0xd30854a284C72Ef4969B74b64628DB4bD697e900-0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.url().should(
      'contain',
      '/remove/0xd30854a284C72Ef4969B74b64628DB4bD697e900/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288',
    )
  })

  it('mtv-mtn remove', () => {
    cy.visit('/remove/MTV/0xd30854a284C72Ef4969B74b64628DB4bD697e900')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MTV')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MTN')
  })

  it('mtn-mtv remove', () => {
    cy.visit('/remove/0xd30854a284C72Ef4969B74b64628DB4bD697e900/MTV')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MTN')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MTV')
  })

  it('loads the two correct tokens', () => {
    cy.visit('/remove/0xd30854a284C72Ef4969B74b64628DB4bD697e900/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MTN')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MUSD')
  })

  it('does not crash if MTV is duplicated', () => {
    cy.visit('/remove/MTV/MTV')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MTV')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MTV')
  })

  it('does not crash if token is duplicated', () => {
    cy.visit('/remove/0xd30854a284C72Ef4969B74b64628DB4bD697e900/0xd30854a284C72Ef4969B74b64628DB4bD697e900')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'MTN')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MTN')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/remove/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0xd30854a284C72Ef4969B74b64628DB4bD697e900')
    cy.get('#remove-liquidity-tokena-symbol').should('contain.text', 'QUACK')
    cy.get('#remove-liquidity-tokenb-symbol').should('contain.text', 'MTN')
  })
})
