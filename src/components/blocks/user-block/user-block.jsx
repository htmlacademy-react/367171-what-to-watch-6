import React from "react";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../constants/auth";
import Tooltip from "../tooltip/tooltip";
import {logOut} from "../../../store/actions";
import {RoutePath} from "../../constants/routes";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";
import {logout} from "../../../store/api-actions";

const LogOut = ({onClick}) => <div style={{cursor: `pointer`}} onClick={onClick}>Log out</div>;

LogOut.propTypes = {onClick: PropTypes.func};

const SignIn = () => {
  const history = useHistory();
  const onSignIn = (evt)=> {
    evt.preventDefault();
    history.push(RoutePath.LOGIN);
  };

  return (
    <a href="#" className="login-link" onClick={onSignIn}>Sign in</a>
  );
};

const UserBlock = ({authorizationStatus, onLogOut}) => {

  return authorizationStatus === AuthorizationStatus.AUTH ?
    (<Tooltip title={<LogOut onClick={onLogOut}/>} style={{marginLeft: `auto`}}>
      <div className="user-block">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </div>
    </Tooltip>) : <SignIn/>;
};

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string,
  onLogOut: PropTypes.func
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  onLogOut() {
    dispatch(logout({login: null, password: null}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
