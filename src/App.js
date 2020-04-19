import React from "react";
import "./styles.css";
import { Grid, Card } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <Grid
        container
        spacing={10}
        justify="center"
        style={{ backgroundColor: "#5435" }}
      >
        <Grid item>
          <Card
            style={{
              padding: 95,
              textAlign: "center",
              color: "#000",
              backgroundColor: "pink",
              border: "thin solid #000"
            }}
          >
            1
          </Card>
        </Grid>
        <Grid item>
          <Card
            style={{
              padding: 95,
              textAlign: "center",
              color: "#000",
              backgroundColor: "cyan",
              border: "thin solid #000"
            }}
          >
            2
          </Card>
        </Grid>
        <Grid item>
          <Card
            style={{
              padding: 100,
              textAlign: "center",
              color: "#000",
              backgroundColor: "yellow",
              border: "thin solid #000"
            }}
          >
            3
          </Card>
        </Grid>
        <Grid item>
          <Card
            style={{
              padding: 95,
              textAlign: "center",
              color: "#000",
              backgroundColor: "lightblue",
              border: "thin solid #000"
            }}
          >
            4
          </Card>
        </Grid>
        <Grid item>
          <Card
            style={{
              padding: 95,
              textAlign: "center",
              color: "#000",
              backgroundColor: "grey",
              border: "thin solid #000"
            }}
          >
            5
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
