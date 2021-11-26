import * as React from 'react';
import Avatar from 'react-avatar';
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
    public componentDidMount = async () => {
        const userResp = await getUserById(this.props.user);
        if (userResp) {
            this.setState({ user: userResp.data.user, isLoading: false });
        }
    }
    public render() {
        return this.state.isLoading ? (
            <div className="small-loader" data-testid="user-loader"></div>
        ) : (
            <div className="d-flex align-items-center" data-testid="user-name">
                <Avatar name={this.state.user.name} round={true} size="30" />
                <p style={{ marginLeft: "5px" }}>
                    {this.state.user.name}
                </p>
            </div>
        );
    }
}

export default User;