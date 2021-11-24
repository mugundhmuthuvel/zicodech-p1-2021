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
        if (page - 1 < 0 || page > this.state.pagination.totalPages) {
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
                    <div className="custom-table">
                        <div className="thead">
                            <div className="trow">
                                <div className="tcol wsmall">Expand</div>
                                <div className="tcol wsmall">#ID</div>
                                <div className="tcol wsmall">Status</div>
                                <div className="tcol w30">Subject</div>
                                <div className="tcol w20">Requester</div>
                                <div className="tcol w10">Requester Updated</div>
                                <div className="tcol w10">Type</div>
                                <div className="tcol w10">Priority</div>
                            </div>
                        </div>
                        <div className="tbody">
                            <div className="tbody">
                                {this.state.tickets.map((tckt, idx) => (
                                    <TableRow key={idx} ticket={tckt} onClick={() => console.log(idx)} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination
                    onNextClicked={() => this.getTicketsFromAPI(this.state.pagination.currentPage - 1)}
                    onPrevClicked={() => this.getTicketsFromAPI(this.state.pagination.currentPage + 1)}
                    page={this.state.pagination.currentPage}
                    total={this.state.pagination.totalPages}
                />
            </React.Fragment>
        );
    }
}
//@ts-ignore
export default withRouter(withSnackbar(TicketsList));