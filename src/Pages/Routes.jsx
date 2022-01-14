import { Route, Switch } from "react-router-dom";
import PrivateRoutes from "../Components/PrivateRoutes";
import AdminPanel from "./AdminPanel";
import Home from "./Home";
import Login from "./Login";
import styled from "styled-components";

const Wrapper = styled.div`

    margin-top: 7vh;
`;

export default function Routes() {

    return (<Wrapper>

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

    </Wrapper>)
}