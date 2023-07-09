import classes from  './paginate.module.css';
export default function Paginate({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
  previousPage,
  nextPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={`${classes.pagination} container`}>
      <ul className={`${classes.pagination}`}>
        <li onClick={previousPage} className={`${classes.pageNumber}`}>
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={
              `${classes.pageNumber}` +
              (number === currentPage ? `${classes.active}` : "")
            }
          >
            {number}
          </li>
        ))}
        <li onClick={nextPage} className={`${classes.pageNumber}`}>
          Next
        </li>
      </ul>
    </div>
  );
};


