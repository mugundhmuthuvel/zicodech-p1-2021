import * as React from 'react';

interface PaginationProps {
    
}
 
const Pagination: React.FunctionComponent<PaginationProps> = () => {
    return ( 
        <div className="pagination-container">
            <p>Showing 25 per page</p>
            <button className="btn-icon">
                <i className="fas fa-chevron-left"></i>
            </button>
            <p>1 of 256 page(s)</p>
            <button className="btn-icon">
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
     );
}
 
export default Pagination;