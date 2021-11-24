import * as React from 'react';
import { getTickets, ITicket } from '../../axios/zdapis/zdapis.service';
import Pagination from '../Pagination/Pagination';
import { withSnackbar } from 'notistack';
import "./TicketsList.scss";
import { RouteComponentProps, withRouter } from 'react-router';
import TableRow from './Table/TableRow';

interface TicketsListProps extends RouteComponentProps<null, null> {

}

interface TicketsListState {
    tickets: ITicket[];
    pagination: {
        currentPage: number;
        totalPages: number;
    },
}

class TicketsList extends React.Component<TicketsListProps, TicketsListState> {
    public state: TicketsListState = {
        tickets: [],
        pagination: {
            currentPage: 0,
            totalPages: 99,
        }
    };

    public componentDidMount = () => {
        this.getTicketsFromAPI(1);
    };

    private getTicketsFromAPI = async (page: number) => {
        if (page-1 < 0 || page > this.state.pagination.totalPages) {
            (this.props as any).enqueueSnackbar("We have reached the end of tickets.", { variant: "info" })
            return;
        }
        try {
            const ticketsResponse = await (await getTickets(page)).data;
            this.setState({
                tickets: ticketsResponse.tickets,
                pagination: {
                    currentPage: page,
                    totalPages: (ticketsResponse.count % 4 === 0 ? ticketsResponse.count / 4 : parseInt((ticketsResponse.count / 4).toString()) + 1)
                } 
            });
        } catch (e) {
            (this.props as any).enqueueSnackbar("Oops! An error occurred. Please try again later.", { variant: "error" })
        }
    }

    public render() {
        return (
            <React.Fragment>
                <Pagination
                    onNextClicked={() => this.getTicketsFromAPI(this.state.pagination.currentPage + 1)}
                    onPrevClicked={() => this.getTicketsFromAPI(this.state.pagination.currentPage - 1)}
                    page={this.state.pagination.currentPage}
                    total={this.state.pagination.totalPages}
                />
                <div className="table-contents">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <div className="thead">
                                <div className="row">
                                    <div className="col">Expand</div>
                                    <div className="col">#ID</div>
                                    <div className="col">Status</div>
                                    <div className="col">Subject</div>
                                    <div className="col">Requester</div>
                                    <div className="col">Requester Updated</div>
                                    <div className="col">Type</div>
                                    <div className="col">Priority</div>
                                </div>
                            </div>
                            <div className="tbody">
                                {this.state.tickets.map((tckt, idx) => (
                                    <TableRow ticket={tckt} onClick={() => console.log(idx)} />
                                ))}
                            </div>
                        </table>
                    </div>
                </div>
                <Pagination
                    onNextClicked={() => this.getTicketsFromAPI(this.state.pagination.currentPage - 1)}
                    onPrevClicked={() => this.getTicketsFromAPI(this.state.pagination.currentPage+1)}
                    page={this.state.pagination.currentPage}
                    total={this.state.pagination.totalPages}
                />
            </React.Fragment>
        );
    }
}
//@ts-ignore
export default withRouter(withSnackbar(TicketsList));