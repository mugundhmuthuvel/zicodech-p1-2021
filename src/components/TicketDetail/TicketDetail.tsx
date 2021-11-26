import * as React from 'react';
import Loader from 'react-loader-spinner';
import { RouteComponentProps, withRouter } from 'react-router';
import { getTicketById, ITicketDetail } from '../../axios/zdapis/zdapis.service';
import User from '../TicketsList/User/User';
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
        try {
            const response = await getTicketById(this.state.ticket_id + "");
            if (response) {
                this.setState({ ticket: response.data.ticket, isLoading: false });
            }
        } catch (er) {
            console.error(er);
        }
    };

    private getTicketStatus = (status: string) => {
        if (status) {
            return status.charAt(0).toUpperCase() + status.slice(1)
        }
    };

    public render() {
        return this.state.isLoading ? (
            <div data-testid="loader" className="small-loader"></div>
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
                            <label data-testid="tckt-sub">Subject</label>
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
                            <User user={this.state.ticket.requester_id + ""} />
                        </div>
                        <div className="data-group">
                            <label>Assignee</label>
                            <User user={this.state.ticket.assignee_id + ""} />
                        </div>
                        <div className="data-group">
                            <label>Tags</label>
                            <p>{this.state.ticket.tags ? this.state.ticket.tags.join(", ") : ""}</p>
                        </div>
                        <div className="data-group">
                            <label>Status</label>
                            <p className={`status ${this.state.ticket.status}`}>{this.getTicketStatus(this.state.ticket.status)}</p>
                        </div>
                    </div>
                </div>
                {this.state.isLoading && (<div className="loader-bg">
                    <Loader type="Puff" color="#00ADB5" />
                </div>)}
            </React.Fragment>
        );
    }
}

export default withRouter(TicketDetail);