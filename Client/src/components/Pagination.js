import React from 'react';

function Pagination(props) {

  return (
    <div className="container">
      <nav className="pagination is-centered has-background-white has-3-padding rounded-border" role="navigation" aria-label="pagination">
        <a onClick={() => props.changePage(props.currentPage - 1)} className="pagination-previous">Previous</a>
        <a onClick={() => props.changePage(props.currentPage + 1)} className="pagination-next">Next page</a>
        <ul className="pagination-list">
          {props.currentPage != 1 && (<>
            <li><a onClick={() => props.changePage(1)} className="pagination-link" >1</a></li>
            <li><span className="pagination-ellipsis">&hellip;</span></li> <li><a onClick={() => props.changePage(props.currentPage - 1)} className="pagination-link">{props.currentPage - 1}</a></li></>)}
          <li><a className="pagination-link is-current" aria-current="page">{props.currentPage}</a></li>
          {props.currentPage != 75 && (
            <><li><a onClick={() => props.changePage(props.currentPage + 1)} className="pagination-link" >{props.currentPage + 1}</a></li>
              <li><span className="pagination-ellipsis">&hellip;</span></li>
              <li><a onClick={() => props.changePage(props.totalPages)} className="pagination-link">{props.totalPages}</a></li>
            </>)}

        </ul>
      </nav>
    </div>
  );

}

export default Pagination;