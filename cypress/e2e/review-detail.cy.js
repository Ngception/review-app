describe('review-detail.cy.js', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/reviews');
    cy.get('[data-testid="review-list-item"]').first().click();
  });

  it('displays detail view for a review', () => {
    cy.get('[data-testid="review-detail"]').should('exist');
  });

  it('can add a response to review', () => {
    const name = 'John Doe',
      content =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    cy.get('[data-testid="name-input"]').type(name);
    cy.get('[data-testid="content-textarea"]').type(content);
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[data-testid="response-item"]').should('exist');
    cy.get('[data-testid="response-author"]').should('contain.text', name);
    cy.get('[data-testid="response-content"]').should('contain.text', content);
  });

  it('can edit a response for review', () => {
    const name = 'John Doe',
      content =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      newContent =
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';

    cy.get('[data-testid="name-input"]').type(name);
    cy.get('[data-testid="content-textarea"]').type(content);
    cy.get('[data-testid="submit-button"]').click();
    cy.get('[data-testid="dropdown"]').click();
    cy.contains('Edit').click();
    cy.get('[data-testid="content-input"]').type(newContent);
    cy.get('[data-testid="update-button"]').click();

    cy.get('[data-testid="response-content"]').should(
      'contain.text',
      newContent
    );
  });
});
