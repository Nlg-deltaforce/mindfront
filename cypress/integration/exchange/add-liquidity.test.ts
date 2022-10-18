describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0xd30854a284C72Ef4969B74b64628DB4bD697e900/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MTN')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'MUSD')
  })

  it('loads the MTV and tokens', () => {
    cy.visit('/add/MTV/0xd30854a284C72Ef4969B74b64628DB4bD697e900')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MTV')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'MTN')
  })

  it('loads the WMTV and tokens', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0xd30854a284C72Ef4969B74b64628DB4bD697e900')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'WMTV')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'MTN')
  })

  it('does not crash if MTV is duplicated', () => {
    cy.visit('/add/MTV/MTV')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MTV')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'MTV')
  })

  it('does not crash if address is duplicated', () => {
    cy.visit('/add/0xd30854a284C72Ef4969B74b64628DB4bD697e900/0xd30854a284C72Ef4969B74b64628DB4bD697e900')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MTN')
    cy.get('#add-liquidity-input-tokenb #pair').should('not.contain.text', 'MTN')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C/0xd30854a284C72Ef4969B74b64628DB4bD697e900')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.get('#add-liquidity-input-tokenb #pair').should('contain.text', 'MTN')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xD74b782E05AA25c50e7330Af541d46E18f36661C')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'QUACK')
    cy.visit('/add/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MUSD')
    cy.visit('/add/MTV')
    cy.get('#add-liquidity-input-tokena #pair').should('contain.text', 'MTV')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0xd30854a284C72Ef4969B74b64628DB4bD697e900-0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288')
    cy.url().should(
      'contain',
      '/add/0xd30854a284C72Ef4969B74b64628DB4bD697e900/0xb30ebc0Ec978472B4a500a717880fE4D8f8c3288',
    )
  })

  it('redirects /add/MTV-token to /add/MTV/token', () => {
    cy.visit('/add/MTV-0xd30854a284C72Ef4969B74b64628DB4bD697e900')
    cy.url().should('contain', '/add/MTV/0xd30854a284C72Ef4969B74b64628DB4bD697e900')
  })

  it('redirects /add/token-MTV to /add/token/MTV', () => {
    cy.visit('/add/0xd30854a284C72Ef4969B74b64628DB4bD697e900-MTV')
    cy.url().should('contain', '/add/0xd30854a284C72Ef4969B74b64628DB4bD697e900/MTV')
  })

  it('redirects /add/WMTV to /add/WMTV/token', () => {
    cy.visit('/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c-0xd30854a284C72Ef4969B74b64628DB4bD697e900')
    cy.url().should(
      'contain',
      '/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0xd30854a284C72Ef4969B74b64628DB4bD697e900',
    )
  })

  it('redirects /add/token-WMTV to /add/token/WMTV', () => {
    cy.visit('/add/0xd30854a284C72Ef4969B74b64628DB4bD697e900-0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c')
    cy.url().should(
      'contain',
      '/add/0xd30854a284C72Ef4969B74b64628DB4bD697e900/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    )
  })
})
