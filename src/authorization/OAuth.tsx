import Loader from "react-loader-spinner";
import * as React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { withSnackbar } from 'notistack';

interface IProp extends RouteComponentProps<any, any> {}

class OAuth extends React.Component<IProp> {
    public componentDidMount = async () => {
        const isAuthenticated = localStorage.getItem("accessToken");
        if (isAuthenticated) {
            (this.props as any).history.push("/");
        }
        const params = this.getJsonFromUrl(this.props.location.hash);
        let accesscode = params.access_token ? params.access_token : null;
        if (accesscode) {
            localStorage.setItem("accessToken", accesscode);
            (this.props as any).history.push("/");
        } else {
            const errorDesc = params.get('error_description');
            (this.props as any).enqueueSnackbar(errorDesc, { variant: "error" });
        }
    };

    private getJsonFromUrl = (str: string) => {
        console.log(str);
        const query = str.substr(1);
        const result: any = {};
        query.split('&').forEach(function(part) {
          const item = part.split('=');
          result[item[0]] = decodeURIComponent(item[1]);
        });      
        return result;
    };

    render() {
        return (
            <React.Fragment>
                <div className="loader">
                    <Loader type="Puff" color="#00ADB5" />
                </div>
            </React.Fragment>
        );
    }
}
//@ts-ignore
export default withRouter(withSnackbar(OAuth));