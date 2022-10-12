import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  test('renders Pagination component', () => {
    const testProps = {
      totalPages: 1,
      currentPage: 1,
      recordsPerPage: 10,
      setCurrentPage: jest.fn()
    };

    render(<Pagination {...testProps} />);

    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });

  test('clicking next, page number, or previous button changes page', async () => {
    const user = userEvent.setup();
    const testProps = {
      totalPages: 3,
      currentPage: 2,
      recordsPerPage: 25,
      setCurrentPage: jest.fn()
    };

    jest.spyOn(testProps, 'setCurrentPage');

    render(<Pagination {...testProps} />);

    const previousButton = screen.getByTestId('previous-button'),
      nextButton = screen.getByTestId('next-button'),
      pageThree = screen.getByTestId('page-3');

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pageThree).toBeInTheDocument();

    await act(async () => {
      await user.click(nextButton);
      await user.click(previousButton);
      await user.click(pageThree);
    });

    expect(testProps.setCurrentPage).toHaveBeenCalledTimes(3);
  });
});
