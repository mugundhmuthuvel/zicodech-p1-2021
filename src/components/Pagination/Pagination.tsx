import * as React from 'react';

interface PaginationProps {
    onPrevClicked: () => void;
    onNextClicked: () => void;
    page: number;
    total: number;
}
 
const Pagination: React.FunctionComponent<PaginationProps> = (props: PaginationProps) => {
    return ( 
        <div className="pagination-container">
            <p>Showing 25 per page</p>
            <button {...{disabled: props.page - 1 === 0 }} onClick={props.onPrevClicked} {...{"aria-label": "prev-btn"}} className="btn-icon go-left">
                <i className="fas fa-chevron-left"></i>
            </button>
            <p>{props.page} of {props.total} page(s)</p>
            <button {...{ disabled: props.page === props.total }} onClick={props.onNextClicked} {...{"aria-label": "next-btn"}} className="btn-icon go-right">
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
     );
}
 
export default Pagination;