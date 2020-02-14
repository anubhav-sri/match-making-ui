import React from 'react';
import './App.css';
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Provider from "react-redux/lib/components/Provider";
import store from "./store";
import Container from "@material-ui/core/Container";
import {BrowserRouter as Router, Route} from "react-router-dom";
import UserHome from "./match/components/UserHome";

function App() {
    return (<Provider store={store}>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" noWrap className="heading">Spark Dates, Made for all
                    </Typography>
                </Toolbar>
            </AppBar>
            <div>
                <Container maxWidth="sm">
                    <Router>
                        <Route path="/users/:userId/"
                               component={(props) => <UserHome userId={props.match.params.userId}/>}/>
                    </Router>
                </Container>
            </div>
        </Provider>
    );
}

export default App;
