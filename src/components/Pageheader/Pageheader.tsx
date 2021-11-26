import * as React from 'react';
import { WithRouterProps } from 'react-router';
import { Link, withRouter } from 'react-router-dom';

interface PageheaderProps extends WithRouterProps { }

interface ICrumb {
    name: string;
    path: string;
}

interface PageheaderState {
    crumbs: ICrumb[];
    pageTitle: string;
}

class Pageheader extends React.Component<PageheaderProps, PageheaderState> {
    public constructor(props: PageheaderProps) {
        super(props);
        this.state = {
            crumbs: [],
            pageTitle: "",
        }
    }
    public componentDidMount = () => {
        this.formBreadcrumb();
    };
    public componentDidUpdate = (prevProps: PageheaderProps) => {
        if (this.props.location.pathname !== prevProps.location.pathname) this.formBreadcrumb();
    };

    private formBreadcrumb = () => {
        if (this.props.location.pathname === "/") this.setState({ crumbs: [{ name: "Dashboard", path: "/" }], pageTitle: "Dashboard" });
        else if (this.props.location.pathname === "/tickets") this.setState({
            crumbs: [
                { name: "Dashboard", path: "/" },
                { name: "Tickets List", path: "/tickets" }
            ],
            pageTitle: "Tickets"
            });
        else if (this.props.location.pathname.includes("/tickets/")) this.setState({
            crumbs: [
                { name: "Dashboard", path: "/" },
                { name: "Tickets List", path: "/tickets" },
                { name: "Ticket Detail", path: this.props.location.pathname }
            ],
            pageTitle: "Ticket Detail"
            });
    };

    render() {
        return (
            <React.Fragment>
                <header>
                    <h1 className="page-title">{this.state.pageTitle}</h1>
                    <div className="breadcrumbs">
                        {this.state.crumbs.map((bcitem, ind) => (
                            <Link key={ind} to={bcitem.path} className={`bc-item ${ind+1 === this.state.crumbs.length ? "active" : ""}`}>{bcitem.name}</Link>
                        ))}
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

export default withRouter(Pageheader);