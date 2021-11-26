import React from 'react';
import Loader from 'react-loader-spinner';
import { Redirect, Route, Switch as Routes } from 'react-router-dom';
import { formAuthorizationLink } from './axios/zdapis/zdapis.service';
import DashboardHome from './components/DashboardHome/DashboardHome';
import Pageheader from './components/Pageheader/Pageheader';
import Sidebar from './components/Sidebar/Sidebar';
import TicketDetail from './components/TicketDetail/TicketDetail';
import TicketsList from './components/TicketsList/TicketsList';

interface IProp {}

interface IState {
  isAuthenticated: boolean;
}

class App extends React.Component<IProp, IState> {
  public constructor(props: IProp) {
    super(props);
    const atoken = localStorage.getItem("accessToken");
    this.state = {
      isAuthenticated: atoken ? true : false,
    };
  }

  public componentDidMount = () => {
    if (!this.state.isAuthenticated) {
      window.location.replace(formAuthorizationLink());
    }
  };

  public render() {
    return this.state.isAuthenticated ? (
      <div className="base-container" data-testid="base-cntr">
        <Sidebar />
        <div className="main-content">
          <Pageheader />
          <Routes>
            <Route path="/tickets/:ticket_id" component={TicketDetail} />
            <Route path="/tickets" component={TicketsList} />
            <Route path="/" {...{ exact: true }} component={DashboardHome} />
            <Route path="">
              <Redirect from="" to="/" />
            </Route>
          </Routes>
        </div>
      </div>
    ) : (
      <div className="loader">
        <Loader type="Puff" color="#00ADB5" />
      </div>
    );
  }
}
export default App;
