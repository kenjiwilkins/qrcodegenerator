import { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import QRcode from "qrcode.react";
import "./App.css";

function App() {
  const [url, setURL] = useState("https://www.google.com");
  const [size, setSize] = useState(128);
  function handleURL(url: string) {
    setURL(url);
  }
  function handleSize(size: string | number) {
    setSize(typeof size === "string" ? parseInt(size) : size);
  }
  function download() {
    let canvas = document.getElementById("canvas") as HTMLCanvasElement;
    let url = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.download = `${url}.png`;
    link.href = url;
    link.click();
  }

  return (
    <div className="App">
      <AppBar position="static" className="app-bar">
        <Typography variant="h6">QR Code Generator by Kenji Wilkins</Typography>
      </AppBar>
      <Container maxWidth="lg" className="app-container">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="url"
              value={url}
              onChange={(e) => handleURL(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">URL: {url}</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="qrcode-container">
          <Grid item xs={12}>
            <QRcode value={url} size={size} renderAs="canvas" id="canvas" />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <FormControl>
              <Select
                value={size}
                onChange={(e) => handleSize(e.target.value)}
                size="small"
              >
                <MenuItem value={64}>small</MenuItem>
                <MenuItem value={128}>medium</MenuItem>
                <MenuItem value={196}>large</MenuItem>
              </Select>
              <FormHelperText>change QRcode size</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="button-container">
          <Grid item xs={12}>
            <Button variant="outlined" onClick={() => download()}>
              Download
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} className="button-container">
          <Grid item xs={12}>
            <Button variant="outlined" onClick={() => window.open(url)}>
              Go to URL
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
