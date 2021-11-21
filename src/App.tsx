import React from 'react';
import { Route, Switch as Routes } from 'react-router-dom';
import DashboardHome from './components/DashboardHome/DashboardHome';
import Pageheader from './components/Pageheader/Pageheader';
import Sidebar from './components/Sidebar/Sidebar';
import TicketDetail from './components/TicketDetail/TicketDetail';
import TicketsList from './components/TicketsList/TicketsList';

function App() {
  return (
    <div className="base-container">
      <Sidebar />
      <div className="main-content">
        <Pageheader />
        <Routes>
          <Route path="/tickets/:ticket_id" component={TicketDetail} />
          <Route path="/tickets" component={TicketsList} />
          <Route path="/" component={DashboardHome} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
