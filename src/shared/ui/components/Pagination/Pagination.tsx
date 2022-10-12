import { FC, MouseEvent } from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  recordsPerPage: number;
  setCurrentPage: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = (props: PaginationProps) => {
  const pageNumbers = Array.from(Array(props.totalPages + 1).keys()).slice(1);

  const nextPage = (event: MouseEvent) => {
    event.preventDefault();

    if (props.currentPage === props.totalPages) {
      return;
    }

    props.setCurrentPage(props.currentPage + 1);
  };

  const prevPage = (event: MouseEvent) => {
    event.preventDefault();

    if (props.currentPage === 1) {
      return;
    }

    props.setCurrentPage(props.currentPage - 1);
  };

  return (
    <nav
      data-testid="pagination"
      className="pagination is-centered pb-5"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
        <a
          data-testid="previous-button"
          href="#"
          className="button pagination-link"
          onClick={prevPage}
        >
          Previous page
        </a>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              data-testid={`page-${number}`}
              href="#"
              className={`button pagination-link ${
                props.currentPage === number ? 'is-current' : ''
              }`}
              aria-current={props.currentPage === number ? 'page' : undefined}
              aria-label={`Page ${number}`}
              onClick={() => props.setCurrentPage(number)}
            >
              {number}
            </a>
          </li>
        ))}
        <a
          data-testid="next-button"
          href="#"
          className="button pagination-link"
          onClick={nextPage}
        >
          Next page
        </a>
      </ul>
    </nav>
  );
};
