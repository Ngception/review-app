describe('review-list.cy.js', () => {
  beforeEach(() => {
    cy.visit('localhost:3000/reviews');
  });

  it('displays at least one review', () => {
    cy.get('[data-testid="review-list-item"]').should(
      'have.length.at.least',
      1
    );
  });
});
