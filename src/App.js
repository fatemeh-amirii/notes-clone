import Login from "./components/LoginRegister/Login";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Note from "./components/Note/Note";
import Update from "./components/Note/Update";
import Register from "./components/LoginRegister/Register";
import ShowNotes from "./components/Note/ShowNotes";
import AdminPage from "./components/Admin/AdminPage";
import Success from "./components/ShowMessage/Success";


import Controller from "./components/Controler/controller";
import AdminController from "./components/Admin/Controller/controller"
import EditAdmin from "./components/Admin/EditAdmin";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Header />
          <Login />
        </Route>
      
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route exact path="/register">
          <Header />
          <Register />
        </Route>

    
        <Route exact path="/success">
          <Header />
          <Success />
        </Route>

        <Route  path="/myProfile">
            <Header />
           <Profile/>
          </Route>

        <Controller>
        <AdminController>
          <Route  path="/admin" >
            <AdminPage/>
          </Route>

          <Route  path="/adminEdit" >
          <EditAdmin/>
          </Route>
          
          </AdminController>

          {/* <Route path="/editeNote">
            <Header />
            <Update />
          </Route> */}

          <Route path="/note">
            <Header />
            <Note />
          </Route>

          <Route  path="/ShowNotes">
            <Header />
            <ShowNotes />
          </Route>
          
        

        
        </Controller>
     
        
      </Switch>
    </Router>
  );
}

export default App;
