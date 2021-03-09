import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function _(SpecificComponent, option, adminRoute = null) {
  // null: 아무나 출입 가능
  // true: 로그인한 유저만
  // false: 로그인한 유저는 출입 불가능
  // adminRoute === true: admin만 출입 가능

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        // not login
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          //login
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (!option) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}
