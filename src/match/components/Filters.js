import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
import filterMatches from "../reducers/FilterMatches";
import connect from "react-redux/lib/connect/connect";
import Typography from "@material-ui/core/Typography";
import {initialFilters} from "./FilterStates";
import {clearFilters} from "../actions/FiltersActions";

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: false,
            success: false,
            error: null,
            filters: {...initialFilters},
        };

    }

    handleCheckedFilterChange(e) {
        e.preventDefault();
        const temp = {};
        temp[e.target.name] = e.target.checked;
        const value = Object.assign(this.state.filters, temp);
        this.setState({filters: value});
    };

    handleAgeRangeChange(e, newValue) {
        e.preventDefault();
        const value = Object.assign(this.state.filters, {ageRange: newValue});
        this.setState({filters: value});
    };

    handleDistanceRangeChange(e, newValue) {
        e.preventDefault();
        const value = Object.assign(this.state.filters, {distance: newValue});
        this.setState({filters: value});
    };

    handleHeightRangeChange(e, newValue) {
        e.preventDefault();
        const value = Object.assign(this.state.filters, {heightRange: newValue});
        this.setState({filters: value});
    };

    handleCompatibilityRangeChange(e, newValue) {
        e.preventDefault();
        const value = Object.assign(this.state.filters, {compatibilityRange: newValue});
        this.setState({filters: value});
    };

    resetFilters(e) {
        e.preventDefault();
        this.props.resetFilters();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props !== prevProps) {
            this.setState({
                success: this.props.success.success,
                error: this.props.error,
                pending: this.props.pending.pending,
                filters: this.props.filters.filters
            });
        }
    }

    handleFilterSubmit = (e) => {
        e.preventDefault();
        this.props.filterMatches("31eed42a-fdd1-4751-bcf3-00a4c8e40d7e", this.state.filters);
    };

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleFilterSubmit}>
                <FormControl component="fieldset">
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <FormControlLabel
                                value="true"
                                className="photo-filter"
                                control={<Checkbox
                                    name="hasPhoto"
                                    checked={this.state.filters.hasPhoto}
                                    onChange={this.handleCheckedFilterChange.bind(this)}
                                    color="primary"
                                />}
                                label="With Photo"
                                labelPlacement="end"
                            />
                        </Grid>
                        <Grid item xs={4}>

                            <FormControlLabel
                                className="in-contact-filter"
                                value="false"
                                control={<Checkbox
                                    name="inContact"
                                    checked={this.state.filters.inContact}
                                    onChange={this.handleCheckedFilterChange.bind(this)}
                                    color="primary"
                                />}
                                label="In Contact"
                                labelPlacement="end"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <FormControlLabel
                                className="favorite-filter"
                                value="false"
                                control={<Checkbox
                                    name="isFavorite"
                                    checked={this.state.filters.isFavorite}
                                    onChange={this.handleCheckedFilterChange.bind(this)}
                                    color="primary"
                                />}
                                label="Is Favorite"
                                labelPlacement="end"
                            />
                        </Grid>
                        <Grid item xs={4} className="age-filter">
                            <Typography id="ageRange" gutterBottom>
                                Age (Years)
                            </Typography>
                            <Slider min={18}
                                    max={95}
                                    value={this.state.filters.ageRange}
                                    name="ageRange"
                                    onChange={this.handleAgeRangeChange.bind(this)}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="ageRange"
                            />
                        </Grid>
                        <Grid item xs={4} className="distance-filter">
                            <Typography id="distanceRange" gutterBottom>
                                Distance (Kms)
                            </Typography>
                            <Slider
                                min={30}
                                max={300}
                                name="distanceRange"
                                value={this.state.filters.distance}
                                onChange={this.handleDistanceRangeChange.bind(this)}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                            />
                        </Grid>
                        <Grid item xs={4} className="height-filter">
                            <Typography id="heightRange" gutterBottom>
                                Height (Cms)
                            </Typography>
                            <Slider
                                min={135}
                                max={210}
                                name="heightRange"
                                value={this.state.filters.heightRange}
                                onChange={this.handleHeightRangeChange.bind(this)}
                                valueLabelDisplay="auto"
                                aria-labelledby="heightRange"
                                aria-label="heightRange"
                            />
                        </Grid>
                        <Grid item xs={4} className="compatibility-filter">
                            <Typography id="compatibility-range" gutterBottom>
                                Compatible (%)
                            </Typography>
                            <Slider
                                min={0.01}
                                max={0.99}
                                step={0.01}
                                value={this.state.filters.compatibilityRange}
                                name="compatibilityRange"
                                onChange={this.handleCompatibilityRangeChange.bind(this)}
                                valueLabelDisplay="auto"
                                valueLabelFormat={(v) => v * 100}
                                aria-labelledby="within-distance"
                            />
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={2}>
                                <Button variant="contained" color="primary" type="submit"
                                        disabled={this.state.pending}>
                                    Filter
                                </Button>
                            </Grid>
                            <Grid item xs={2}>
                                <Button variant="contained" color="primary" type="reset"
                                        disabled={this.state.pending}
                                        onClick={this.resetFilters.bind(this)}>
                                    Reset
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </FormControl>
            </form>


        )
    };
}

const mapStateToProps = state => ({
    error: state.error,
    pending: state.pending,
    success: state.success,
    filters: state.filters
});

const mapDispatchToProps = () => (dispatch) => {
    return {
        filterMatches: (userId, filters) => dispatch(filterMatches(userId, filters)),
        resetFilters: () => dispatch(clearFilters())
    };
};


export default connect(mapStateToProps,
    mapDispatchToProps)(Filters)
