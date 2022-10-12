/// <reference types="cypress" />

describe('review-list.cy.js', () => {
  beforeEach(() => {
    cy.visit('/reviews');
  });

  it('displays at least one review', () => {
    cy.getByTestId('review-list-item').should('have.length.at.least', 1);
  });
});
