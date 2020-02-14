import * as React from "react";
import Filters from "./Filters";
import Matches from "./Matches";
import {ExpansionPanel} from "@material-ui/core";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

class UserHome extends React.Component {

    render() {
        return (
            <div>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                    > Filter Matches
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Filters userId={this.props.userId}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <br/>
                <Matches userId={this.props.userId}/>
            </div>
        )
    }
}

export default UserHome
