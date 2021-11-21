import * as React from 'react';
import Pagination from '../Pagination/Pagination';
import "./TicketsList.scss";

interface TicketsListProps {

}

interface TicketsListState {

}

class TicketsList extends React.Component<TicketsListProps, TicketsListState> {
    // state = { :  }
    render() {
        return (
            <React.Fragment>
                <Pagination />
                <div className="table-contents">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th className="fit" scope="col">Expand</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                                <tr>
                                    <th className="fit" scope="row">
                                        <button className="icon-btn">
                                            <i className="fas fa-expand-alt"></i>
                                        </button>
                                    </th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <Pagination />
            </React.Fragment>
        );
    }
}

export default TicketsList;