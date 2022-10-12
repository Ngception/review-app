/// <reference types="cypress" />

describe('review-detail.cy.js', () => {
  const name = 'John Doe',
    content =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  beforeEach(() => {
    cy.visit('/reviews');
    cy.getByTestId('review-list-item').first().click();
  });

  it('displays detail view for a review', () => {
    cy.getByTestId('review-detail').should('exist');
    cy.getByTestId('review-place').should('exist');
    cy.getByTestId('review-rating').should('exist');
    cy.getByTestId('review-content').should('exist');
    cy.getByTestId('review-author').should('exist');
    cy.getByTestId('review-published-at').should('exist');
  });

  it('can add a response to review', () => {
    cy.getByTestId('name-input').type(name);
    cy.getByTestId('content-textarea').type(content);
    cy.getByTestId('submit-button').click();

    cy.getByTestId('response-item').should('exist');
    cy.getByTestId('response-author').should('contain.text', name);
    cy.getByTestId('response-content').should('contain.text', content);
  });

  it('can edit a response for review', () => {
    const newContent =
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

    cy.getByTestId('name-input').type(name);
    cy.getByTestId('content-textarea').type(content);
    cy.getByTestId('submit-button').click();
    cy.getByTestId('dropdown').click();
    cy.contains('Edit').click();
    cy.getByTestId('content-input').type(newContent);
    cy.getByTestId('update-button').click();

    cy.getByTestId('response-content').should('contain.text', newContent);
  });
});
