import React from "react";

import {Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";

import reactbooks from "../assets/react-books.jpg";
import SearchIcon from "@mui/icons-material/Search";

import "./Initial.css";

function Initial() {
   return (
      <Grid container>
         <Grid item lg={6} md={6} xs={12}>
            <div className="title">
               <h1>
                  Find your <span>Book 📗</span> and lose Yourself😅
               </h1>

               <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  color="success"
                  style={{margin: "2rem 0"}}
                  href="/search"
                  startIcon={<SearchIcon fontSize="large" color="action" />}
               >
                  Search
               </Button>
            </div>
         </Grid>

         <Grid item lg={6} md={6} xs={12}>
            <img className="bookImage" src={reactbooks} alt="simple book background" />
         </Grid>
      </Grid>
   );
}

export default Initial;
