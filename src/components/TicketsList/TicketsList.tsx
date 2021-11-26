import * as React from 'react';
import { getTickets, ITicket } from '../../axios/zdapis/zdapis.service';
import Pagination from '../Pagination/Pagination';
import { withSnackbar } from 'notistack';
import "./TicketsList.scss";
import { RouteComponentProps, withRouter } from 'react-router';
import TableRow from './Table/TableRow';
import Loader from 'react-loader-spinner';

interface TicketsListProps extends RouteComponentProps<null, null> {

}

interface TicketsListState {
    tickets: ITicket[];
    pagination: {
        currentPage: number;
        totalPages: number;
    },
    isLoading: boolean;
}

class TicketsList extends React.Component<TicketsListProps, TicketsListState> {
    public state: TicketsListState = {
        tickets: [],
        pagination: {
            currentPage: 0,
            totalPages: 99,
        },
        isLoading: true
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
            const ticketsResponse = await getTickets(page);
            if (ticketsResponse) {
                console.log(ticketsResponse);
                this.setState({
                    tickets: ticketsResponse.data.tickets,
                    pagination: {
                        currentPage: page,
                        totalPages: (ticketsResponse.data.count % 4 === 0 ? ticketsResponse.data.count / 4 : parseInt((ticketsResponse.data.count / 4).toString()) + 1)
                    },
                    isLoading: false,
                });
            }
        } catch (e) {
            this.setState({ isLoading: false }, () => {
                (this.props as any).enqueueSnackbar("Oops! An error occurred. Please try again later.", { variant: "error" });
            });
        }
    }

    public render() {
        return (
            <React.Fragment>
                <Pagination
                    onNextClicked={() => this.setState({ isLoading: true }, () => this.getTicketsFromAPI(this.state.pagination.currentPage + 1))}
                    onPrevClicked={() => this.setState({ isLoading: true }, () => this.getTicketsFromAPI(this.state.pagination.currentPage - 1))}
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
                        {<div className="tbody" data-testid="tkt-tbody">
                            <div className="tbody">
                                {this.state.tickets.map((tckt, idx) => (
                                    <TableRow key={idx} ticket={tckt} onClick={() => console.log(idx)} />
                                ))}
                            </div>
                        </div>}
                    </div>
                </div>
                <Pagination
                    onNextClicked={() => this.getTicketsFromAPI(this.state.pagination.currentPage - 1)}
                    onPrevClicked={() => this.getTicketsFromAPI(this.state.pagination.currentPage + 1)}
                    page={this.state.pagination.currentPage}
                    total={this.state.pagination.totalPages}
                />
                {this.state.isLoading && (<div className="loader-bg" data-testid="loader">
                    <Loader type="Puff" color="#00ADB5" />
                </div>)}
            </React.Fragment>
        );
    }
}
//@ts-ignore
export default withRouter(withSnackbar(TicketsList));