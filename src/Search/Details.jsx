import React from "react";
import Button from "@mui/material/Button";
import {makeStyles} from "@material-ui/core";
import {Grid, Typography} from "@mui/material";

const useStyle = makeStyles({
  gridGap: {
    margin: "1rem",
    padding: "1rem",
  },
});

function Details(props) {
  const classes = useStyle();

  return (
    <Grid item sm={12} md={4} lg={3} className={classes.gridGap}>
      <Typography variant="h4">{props.title}</Typography>
      <img src={props.image} alt="Book image" />
      <Typography variant="h6">{props.author}</Typography>
      <Typography variant="p">{props.description}</Typography>
      {props.buy && (
        <Button
          variant="contained"
          color="info"
          href={props.buy}
          target="_blank"
        >
          Buy Now
        </Button>
      )}
    </Grid>
  );
}

export default Details;
