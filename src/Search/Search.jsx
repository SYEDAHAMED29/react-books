import React, {useState} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {Container, Grid, Typography} from "@mui/material";
import axios from "axios";
import Details from "./Details";

const apiKey = "AIzaSyDEYdTddq5aVsLK8YzyTTS7VG5RPlEJ9S4";

function Search() {
   const [book, setBook] = useState("");
   const [result, setResult] = useState([]);

   async function loadData() {
      try {
         const response = await axios.get(
            "https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey
         );

         setResult(response.data.items);
      } catch (error) {
         window.alert("Please provide a valid book name");
         window.location.replace("/search");
      }
   }

   function handleClick(e) {
      e.preventDefault();
      loadData();
   }
   return (
      <Container>
         <Typography variant="h3" color="secondary">
            Book Search
         </Typography>

         {/* //?Books Search */}
         <form action="" onSubmit={handleClick}>
            <TextField
               label="Book Search"
               variant="outlined"
               onChange={(e) => setBook(e.target.value)}
               value={book}
               fullWidth
            />

            <Button variant="contained" color="success" size="large" onClick={handleClick}>
               Search
            </Button>
         </form>

         {/* //?Books Information */}
         <Grid container direction="row" justifyContent="space-between" alignItems="baseline">
            {result.map((book) => {
               try {
                  return (
                     <Details
                        key={book.id}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        description={book.volumeInfo.description}
                        buy={book.saleInfo.buyLink}
                        price={book.saleInfo.retailPrice.amount}
                     />
                  );
               } catch (err) {
                  return (
                     <Details
                        key={book.id}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        description={""}
                        buy={""}
                        price={""}
                     />
                  );
               }
            })}
         </Grid>
      </Container>
   );
}

export default Search;
