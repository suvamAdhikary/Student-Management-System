import { Route, Switch } from "react-router-dom";
import PrivateRoutes from "../Components/PrivateRoutes";

export default function Routes() {

    return (<>

        <Switch>

            <Route path="/" exact >
                <h1>Masai Student Management System</h1>
            </Route>

            <PrivateRoutes path="/panel" >
                <h1>Admin Panel</h1>
            </PrivateRoutes>

            <Route path="/login" >
                Login
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