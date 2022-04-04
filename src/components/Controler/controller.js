 import React from "react";

import {Route, useHistory} from "react-router-dom";
import {withRouter} from 'react-router-dom';

function isAccessTokenExpired() {
    let accessExp = localStorage.getItem("expToken");
    if (accessExp !== undefined && accessExp !== null && accessExp !== "") {
        let now = Date.now();
        accessExp = new Date(accessExp);
        if ( accessExp <= now)
            return true;
        else return false;
    }
    else return true;
}

const Controller = props => {

    const history = useHistory();
    let isAuth = !isAccessTokenExpired();
   

    const path = window.location.pathname;




    if (isAuth) {
        return (
            <div>
                {props.children}
            </div>
        )
    }
      
    else {
        history.push("/register");
        return null;
    }

}

export default withRouter(Controller);
 