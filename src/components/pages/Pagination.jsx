import { NavLink } from 'react-router-dom'

export default function Pagination(page) {
    var pages = page;
    if(page.page>10 && page.page<12){
        pages = page.page;
    }else{
        pages = page;
    }
    const pageNumbers = Array.from({ length: pages }, (_, index) => page.page + index);
  return (
    <>
        <div className="pagii">
            <nav className="pagination-outer" aria-label="Page navigation">
                <ul className="pagination">
                    <li className="page-item">
                        <NavLink to={`/blogs/${page.page>1 ? page.page-1 : 1}`} className="page-link" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </NavLink>
                    </li>
                    {pageNumbers.map((pageNumber) => (
                    <li key={pageNumber} className={`page-item ${pageNumber === page.page ? 'active' : ''}`}>
                        <NavLink to={`/blogs/${pageNumber}`} className="page-link">
                        {pageNumber}
                        </NavLink>
                    </li>
                    ))}
                    <li className="page-item">
                        <NavLink to={`/blogs/${page.page+1}`} className="page-link" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div> 
    </>
  )
}
