import * as React from "react";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import FavoriteIcon from '@material-ui/icons/FavoriteSharp';
import {CardHeader} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    badge: {
        float: "right",
    },
});


function subHeader(match) {
    return (<div><span className="age">{match.age} yrs, </span>
        <span className="height">{match.heightInCm} cms </span>
    </div>);
}

function header(match, classes) {
    return (<div>
        <span className="display-name">{match.displayName}</span>
        <span className={classes.badge}>
            <Badge badgeContent={match.contactsExchanged} color="primary"
                   className="contacts-exchanged"/>
        </span>
    </div>);
}

export default function Match(props) {
    const classes = useStyles();
    let favoriteIcon;
    if (props.match.favourite === true) {
        favoriteIcon = <FavoriteIcon className="favourite-icon" name="fav-icon"/>;
    } else {
        favoriteIcon = "";
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    favoriteIcon
                }
                title={header(props.match, classes)}
                subheader={subHeader(props.match)}
                className="match-header"
            />
            <CardMedia
                className={classes.media}
                image={props.match.mainPhoto}
                title={props.match.displayName}
            />
            <CardContent className="match-content">
                <div className="religion">{props.match.religion}</div>
                <div className="city-name">Lives in {props.match.city.name}</div>
                <div className="job-title">Works as {props.match.jobTitle}</div>
                <div className="compatibility-score">{props.match.compatibilityScore * 100}%</div>
            </CardContent>
        </Card>
    );
}
