import * as React from 'react';
import "./TicketDetail.scss"

interface TicketDetailProps {

}

const TicketDetail: React.FunctionComponent<TicketDetailProps> = () => {
    return (
        <div className="detail-header">
            <button className="icon-btn">
                <i className="fas fa-chevron-left"></i>
                Back
            </button>
            <h3>Ticket Number #w245-r456</h3>
        </div>
    );
}

export default TicketDetail;