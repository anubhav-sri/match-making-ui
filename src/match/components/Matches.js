import * as React from "react";
import connect from "react-redux/lib/connect/connect";
import getMatches from "../GetMatches";
import Match from "./Match";

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
                this.state.matches.map(m => <Match match={m}/>)
            )
        }
        return ("");

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
