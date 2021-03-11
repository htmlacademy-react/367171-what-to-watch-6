import React, {useRef} from "react";
import {useHistory} from "react-router-dom";
import {RoutePath} from "../../constants/routes";
import {connect} from "react-redux";
import {login} from "../../../store/api-actions";
import PropTypes from "prop-types";

const AuthForm = ({onSubmit}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
    history.push(RoutePath.ROOT);
  };

  return (
    <form action="#" className="sign-in__form">

      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input ref={loginRef}
            className="sign-in__input"
            type="email"
            placeholder="Email address"
            name="user-email"
            id="user-email"/>
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input ref={passwordRef}
            className="sign-in__input"
            type="password"
            placeholder="Password"
            name="user-password"
            id="user-password"/>
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>

      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" onClick={handleSubmit}>Sign in</button>
      </div>
    </form>
  );
};

AuthForm.propTypes = {onSubmit: PropTypes.func};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthForm};
export default connect(null, mapDispatchToProps)(AuthForm);
