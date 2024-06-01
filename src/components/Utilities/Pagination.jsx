const Pagination = ({ page, lastPage, setPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollToTop();
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      {page == 1 ? (
        <button onClick={handlePrevPage} disabled>
          Prev
        </button>
      ) : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-color-accent hover:underline"
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>

      {page == lastPage ? (
        <button
          onClick={handleNextPage}
          disabled
        >
          Next
        </button>
      ) : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-color-accent hover:underline"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
