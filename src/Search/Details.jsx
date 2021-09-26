import React from "react";
import Button from "@mui/material/Button";
import {makeStyles} from "@material-ui/core";
import {Grid, Typography} from "@mui/material";
import {useState} from "react";

const useStyle = makeStyles({
   gridGap: {
      margin: ".5rem",
      padding: ".5rem",
   },
   btn: {
      backgroundColor: "red",
      margin: "1rem 0",
   },
   link: {
      cursor: "pointer",
      color: "blue",
   },
});

function Details(props) {
   const classes = useStyle();
   const [read, setRead] = useState(false);

   return (
      <Grid item sm={12} md={3} lg={3} className={classes.gridGap}>
         {/* //?Added the title, book image and author */}
         <Typography variant="h4">{props.title}</Typography>
         <img src={props.image} alt="Book" />
         <Typography variant="h6">{props.author}</Typography>

         {/* //?Added the read more */}
         <Typography variant="p">
            {props.description.toString().slice(0, 100)}
            <p onClick={() => setRead(true)}>
               {read ? (
                  props.description
               ) : (
                  <span className={classes.link}>{props.description && "...Read more"}</span>
               )}
            </p>
         </Typography>

         {/* //?Added the buy button and price */}
         {props.buy && (
            <Button
               className={classes.btn}
               variant="contained"
               color="info"
               href={props.buy}
               target="_blank"
            >
               Buy ₹{props.price}
            </Button>
         )}
      </Grid>
   );
}

export default Details;
