import { Route, Switch } from "react-router-dom";
import PrivateRoutes from "../Components/PrivateRoutes";
import AdminPanel from "./AdminPanel";
import Home from "./Home";
import Login from "./Login";

export default function Routes() {

    return (<>

        <Switch>

            <Route path="/" exact >
                <Home />
            </Route>

            <PrivateRoutes path="/panel" >
               <AdminPanel />
            </PrivateRoutes>

            <Route path="/login" >
                <Login />
            </Route>

            <Route path="/testing" >
                Testing...
            </Route>

            <Route>
                404 Page not found
            </Route>
        </Switch>

    </>)
}