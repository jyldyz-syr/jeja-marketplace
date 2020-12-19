import React, {useContext}from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
import {productsContext} from "../../contexts/ProductsContext"

export default function PaymentForm() {
  // const { cartData, calcTotalPrice } = useContext(
  //   productsContext
  // );
  return (
    <React.Fragment>
      <Container>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>

        {/* <Typography variant="h6" gutterBottom>
         Total Amount to Pay : 
         {calcTotalPrice(cartData.products)}
        </Typography> */}




        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardNumber"
              label="Card number"
              fullWidth
              autoComplete="cc-number"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="expDate"
              label="Expiry date"
              fullWidth
              autoComplete="cc-exp"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
            />
          </Grid>
        </Grid>

        <Link to="/">
          <button
            style={{
              backgroundColor:"#007bff", 
              borderRadius:"5px", 
              color:"white",
              marginLeft: "1000px",
              marginTop: "10px",
              marginBottom: "50px",
              padding:"7px"
            }}
          >
            {" "}
            Finish{" "}
          </button>
        </Link>
      </Container>
    </React.Fragment>
  );
}
