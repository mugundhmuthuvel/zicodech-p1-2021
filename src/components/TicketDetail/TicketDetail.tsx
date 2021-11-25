import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { getTicketById, ITicketDetail } from '../../axios/zdapis/zdapis.service';
import User from '../TicketsList/Table/User';
import "./TicketDetail.scss";
interface TicketDetailProps extends RouteComponentProps<any, null> { }

interface TicketDetailState {
    ticket: ITicketDetail;
    ticket_id: number;
    isLoading: boolean;
}

class TicketDetail extends React.Component<TicketDetailProps, TicketDetailState> {
    public state: TicketDetailState = {
        ticket: {} as ITicketDetail,
        ticket_id: (this.props as any).match.params.ticket_id,
        isLoading: true,
    };

    public componentDidMount = async () => {
        const response = await getTicketById(this.state.ticket_id.toString());
        this.setState({ ticket: response.data.ticket, isLoading: false });
    };

    public render() {
        return this.state.isLoading ? (
            <div className="small-loader"></div>
        ) : (
            <React.Fragment>
                <div className="detail-header">
                    <button className="icon-btn">
                        <i className="fas fa-chevron-left"></i>
                        Back
                    </button>
                    <h3>Ticket Number {this.state.ticket_id}</h3>
                </div>
                <div className="detail-body">
                    <div className="main-panel">
                        <div className="data-group">
                            <label>Subject</label>
                            <p>{this.state.ticket.subject}</p>
                        </div>
                        <div className="data-group">
                            <label>Description</label>
                            <p>{this.state.ticket.description}</p>
                        </div>
                    </div>
                    <div className="right-panel">
                        <div className="data-group">
                            <label>Requester</label>
                            <User user={this.state.ticket.requester_id.toString()} />
                        </div>
                        <div className="data-group">
                            <label>Assignee</label>
                            <User user={this.state.ticket.assignee_id.toString()} />
                        </div>
                        <div className="data-group">
                            <label>Tags</label>
                            <p>{this.state.ticket.tags.join(", ")}</p>
                        </div>
                        <div className="data-group">
                            <label>Status</label>
                            <p className={`status ${this.state.ticket.status}`}>{this.state.ticket.status.charAt(0).toUpperCase() + this.state.ticket.status.slice(1)}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(TicketDetail);