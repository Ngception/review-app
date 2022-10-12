/// <reference types="cypress" />

describe('review-list.cy.js', () => {
  beforeEach(() => {
    cy.visit('/reviews');
  });

  it('displays at least one review', () => {
    cy.getByTestId('review-list-item').should('have.length.at.least', 1);
  });

  it('skip link should skip to first focusable element', () => {
    const skipLink = cy.getByTestId('skip-link');

    skipLink.focus();
    skipLink.click();
    cy.getByTestId('review-list-item-container').should('have.focus');
  });
});
