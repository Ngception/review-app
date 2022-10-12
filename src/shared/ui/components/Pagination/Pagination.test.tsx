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

  test('clicking next button changes page number', async () => {
    const user = userEvent.setup();
    let currentPage = 1;

    const testProps = {
      totalPages: 2,
      currentPage,
      recordsPerPage: 25,
      setCurrentPage: (page: number) => {
        currentPage = page;
      }
    };

    const { rerender } = render(<Pagination {...testProps} />);

    await act(async () => {
      await user.click(screen.getByTestId('next-button'));
    });

    rerender(<Pagination {...testProps} />);

    expect(screen.getByTestId('page-2')).toHaveClass('is-current');
  });
});
