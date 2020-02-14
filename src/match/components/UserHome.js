import * as React from "react";
import Filters from "./Filters";
import Matches from "./Matches";

class UserHome extends React.Component {

    render() {
        return (
            <div>
                <Filters userId={this.props.userId}/>
                <br/>
                <Matches userId={this.props.userId}/>
            </div>
        )
    }
}

export default UserHome
