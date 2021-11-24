import * as React from 'react';
import { getUserById } from '../../../axios/zdapis/zdapis.service';

interface UserProps {
    user: string;
}
 
interface UserState {
    user: any;
    isLoading: boolean;
}
 
class User extends React.Component<UserProps, UserState> {
    public state = { user: {} as any, isLoading: true  };
    public componentDidMount = () => {
        getUserById(this.props.user).then(resp => {
            this.setState({ user: resp.data });
        })
    }
    public render() { 
        return this.state.isLoading ? (
            <div className="loading-anime">
                <i className="fas fa-spinner"></i>
            </div>
        ) : (
            <p>
                {this.state.user.name}
            </p>
        );
    }
}
 
export default User;