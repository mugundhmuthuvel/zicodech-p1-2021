import * as React from 'react';
import { ITicket } from '../../../axios/zdapis/zdapis.service';
import User from './User';

interface TableRowProps {
    onClick: () => void;
    ticket: ITicket;
}

const TableRow: React.FunctionComponent<TableRowProps> = (props: TableRowProps) => {
    return (
        <div className="row" onClick={props.onClick}>
            <button className="icon-btn">
                <i className="fas fa-expand-alt"></i>
            </button>
            <div className="col">
                <p>#{props.ticket.id}</p>
            </div>
            <div className="col">
                <p>{props.ticket.status}</p>
            </div>
            <div className="col subject">
                <p>{props.ticket.subject}</p>
            </div>
            <div className="col">
                <User user={props.ticket.requester_id.toString()} />
            </div>
            <div className="col">
                <p>{props.ticket.updated_at}</p>
            </div>
            <div className="col">
                <p>{props.ticket.type}</p>
            </div>
            <div className="col">
                <p>{props.ticket.priority}</p>
            </div>
        </div>
    );
}

export default TableRow;