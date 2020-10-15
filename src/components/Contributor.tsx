import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

interface Contributor {
  avatar?: string;
  city?: string;
  college?: string;
  github: string;
  name: string;
  organization?: string;
  quote: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      display: "flex",
    },
    cardDetails: {
      display: "flex",
      flexDirection: "column",
    },
    cardContent: {
      flex: "1 0 auto",
    },
    cardCover: {
      width: 151,
    },
  })
);

const openGithubProfile = (username: string) => {
  window.open(`https://github.com/${username}`, "_blank");
};

export default function ContributorCard(props: Contributor) {
  const classes = useStyles();

  return (
    <Card
      className={classes.cardRoot}
      onClick={() => openGithubProfile(props.github)}
    >
      <div className={classes.cardDetails}>
        <CardContent className={classes.cardContent}>
          <Typography component="h5" variant="h5">
            {props.name}
          </Typography>
          {props.organization && (
            <Typography variant="subtitle1" color="textSecondary">
              {props.organization}
            </Typography>
          )}
          {props.college && (
            <Typography variant="subtitle1" color="textSecondary">
              {props.college}
            </Typography>
          )}
          {props.quote && (
            <Typography variant="subtitle2" color="textSecondary">
              {`- "${props.quote}"`}
            </Typography>
          )}
        </CardContent>
      </div>
      <CardMedia
        className={classes.cardCover}
        image={`/contributors/${props.avatar || "default.png"}`}
        title={props.name}
      />
    </Card>
  );
}
