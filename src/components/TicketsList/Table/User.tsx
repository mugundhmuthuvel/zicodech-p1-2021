import * as React from 'react';
import { getUserById, IUser } from '../../../axios/zdapis/zdapis.service';

interface UserProps {
    user: string;
}

interface UserState {
    user: IUser;
    isLoading: boolean;
}

class User extends React.Component<UserProps, UserState> {
    public state = { user: {} as IUser, isLoading: true };
    public componentDidMount = () => {
        getUserById(this.props.user).then(resp => {
            // this.setState({ user: resp.data.user, isLoading: false });
        })
    }
    public render() {
        return this.state.isLoading ? (
            <div className="small-loader"></div>
        ) : (
            <p>
                {this.state.user.name}
            </p>
        );
    }
}

export default User;