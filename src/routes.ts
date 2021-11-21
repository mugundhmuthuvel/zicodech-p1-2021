import DashboardHome from "./components/DashboardHome/DashboardHome";
import TicketDetail from "./components/TicketDetail/TicketDetail";
import TicketsList from "./components/TicketsList/TicketsList";

const routes = [
    { path: "/", name: "Dashboard", element: DashboardHome },
    { path: "/tickets", name: "Tickets List", element: TicketsList },
    { path: "/tickets/:ticket_id", name: "Ticket Detail", element: TicketDetail },
];

export default routes;