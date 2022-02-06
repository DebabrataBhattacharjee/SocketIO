import React from 'react';
import { Navigate, Outlet, } from 'react-router-dom';
import { connect } from 'react-redux';

class AuthenticatedRoute extends React.Component {
    render() {
        const { userName } = this.props;
        console.log('userName', userName);
        return userName ? <Outlet /> : <Navigate to='/' />
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.login.userName
    }
}

export default connect(mapStateToProps)(AuthenticatedRoute)

