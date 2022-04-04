
import {Route, useHistory} from "react-router-dom";
import {withRouter} from 'react-router-dom';





const AdminController = props => {

    const history = useHistory();
    let isAdmin = localStorage.getItem("isAdmin")
    

    const path = window.location.pathname;




    if (isAdmin) {
        return (
            <div>
                {props.children}
            </div>
        )
    }
      
    else {
        history.push("/");
        return null;
    }

}
export default withRouter(AdminController);