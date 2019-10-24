export const add = (a, b) => a + b;
// export const add = (a: number, b: number) => a + b

describe('TypeScript', () => {
  it('works', () => {
    // const x: number = 42
    const x = 42
    expect(x).to.equal(42)
  })

  it('checks shape of an object', () => {
    const object = {
      age: 21,
      name: 'Joe',
    }
    expect(object).to.have.all.keys('name', 'age')
  })

  it('uses cy commands', () => {
    cy.wrap({}).should('deep.eq', {})
  })

  it('tests our example site', () => {
    cy.visit('https://example.cypress.io/')
    cy.get('.home-list')
      .contains('Querying')
      .click()
    cy.get('#query-btn').should('contain', 'Button')
  })

})