import * as React from "react";
import connect from "react-redux/lib/connect/connect";
import getMatches from "../reducers/GetMatches";
import Match from "./Match";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

class Matches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: false,
            success: false,
            error: null,
            matches: [],
        };

    }

    componentDidMount() {
        this.props.getMatches(this.props.userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({
                success: this.props.success.success,
                error: this.props.error,
                pending: this.props.pending.pending,
                matches: this.props.matches.matches,
            });
        }
    }

    render() {
        if (this.state.success) {
            return (
                <div>
                    <div>
                        Found {this.state.matches.length} Matches for you
                    </div>
                    <Grid container spacing={3}>
                        {this.state.matches.map(m => <Grid item xs={12}><Match match={m}/></Grid>)}
                    </Grid>
                </div>
            )
        }
        return ("No Matches Found For You");

    }
}

const mapStateToProps = state => ({
    error: state.error,
    matches: state.matches,
    pending: state.pending,
    success: state.success
});

const mapDispatchToProps = () => (dispatch) => {
    return {
        getMatches: (userId) => dispatch(getMatches(userId))
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Matches)
