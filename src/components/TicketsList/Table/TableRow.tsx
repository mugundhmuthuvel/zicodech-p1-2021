import moment from 'moment';
import * as React from 'react';
import { ITicket } from '../../../axios/zdapis/zdapis.service';
import User from '../User/User';

interface TableRowProps {
    onClick: () => void;
    ticket: ITicket;
}

const TableRow: React.FunctionComponent<TableRowProps> = (props: TableRowProps) => {
    return (
        <div className="trow" onClick={props.onClick} data-testid="tr-row">
            <div className="tcol wsmall j-center">
                <button className="expand-icon-btn">
                    <i className="fas fa-expand-alt"></i>
                </button>
            </div>
            <div className="tcol wsmall">
                <p>#{props.ticket.id}</p>
            </div>
            <div className="tcol wsmall" data-testid="tr-status">
                <p>{props.ticket.status}</p>
            </div>
            <div className="tcol w30">
                <p>{props.ticket.subject}</p>
            </div>
            <div className="tcol w20">
                <User user={props.ticket.requester_id.toString()} />
            </div>
            <div className="tcol w10">
                <p>{moment(props.ticket.updated_at).fromNow()}</p>
            </div>
            <div className="tcol w10">
                <p>{props.ticket.type}</p>
            </div>
            <div className="tcol w10">
                <p>{props.ticket.priority}</p>
            </div>
        </div>
    );
}

export default TableRow;