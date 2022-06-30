import {
  PaginationButton,
  PaginationContainer,
  PaginationLabel,
} from "../styles/pagination";

interface Props {
  page: number;
  setPage: (page: number) => void;
  total: number;
  limit: number;
}

const Pagination = ({ page, setPage, total, limit }: Props) => {
  const goToFirstPage = () => setPage(1);

  const goToLastPage = () => setPage(getLastPage());

  const incrementPage = () => page < getLastPage() && setPage(page + 1);

  const decrementPage = () => page > 1 && setPage(page - 1);

  const atFirstPage = () => page === 1;

  const atLastPage = () => page === getLastPage();

  const getLastPage = () => Math.ceil(total / limit);

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => goToFirstPage()}
        disabled={atFirstPage()}
      >
        {"<<"}
      </PaginationButton>
      <PaginationButton
        onClick={() => decrementPage()}
        disabled={atFirstPage()}
      >
        {"<"}
      </PaginationButton>
      <PaginationLabel>{page}</PaginationLabel>
      <PaginationButton onClick={incrementPage} disabled={atLastPage()}>
        {">"}
      </PaginationButton>
      <PaginationButton onClick={goToLastPage} disabled={atLastPage()}>
        {">>"}
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
