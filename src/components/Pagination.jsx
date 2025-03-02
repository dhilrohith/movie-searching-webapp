const Pagination = ({ currentPage, onPageChange }) => {
    return (
      <div className="flex items-center gap-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded"
        >
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  