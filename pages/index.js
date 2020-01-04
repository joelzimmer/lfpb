import React from "react";
import Head from "next/head";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles, CardContent, CardActions } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Home = () => {
  const classes = useStyles();

  const handleAuthorize = () => {};

  return (
    <div>
      <Head>
        <title>Test App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <div className={classes.root}>
        <Grid container direction="row">
          <Grid container xs={12} justify="center" alignItems="center">
            <Grid item>
              <Typography variant="h2" align="center" component="h2">
                Welcome to the LFPB Challenge 2020
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="center" alignItems="center">
            <Grid item>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="body2" component="p">
                    To get started, log in with Google.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={handleAuthorize} color="primary">Authorize</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
