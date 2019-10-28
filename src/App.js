import React, { Component } from 'react';
import {
  AppBar, Button, Container, Grid, TextField, Typography, FormControl, Select, MenuItem, FormHelperText,
} from '@material-ui/core';
import QRcode from 'qrcode.react';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      url:'',
      size:128
    }
    this.handleURL = this.handleURL.bind(this)
  }

  handleURL = value => {
    this.setState({
      url:value
    })
  }

  handleSize = value => {
    this.setState({
      size:value
    })
  }

  download = () => {
    let canvas = document.getElementById('canvas');
    let url = canvas.toDataURL("image/png");
    let link = document.createElement('a');
    link.download = `${this.state.url}.png`;
    link.href = url;
    link.click();
    console.log('called: ')
  }

  render() {
    const url = this.state.url
    const size = this.state.size
    return (
      <div>
        <AppBar position='static' style={{textAlign:'center'}}>
          <Typography variant='h6'>
            QR Code Generator by Kenji Wilkins
          </Typography>
        </AppBar>
        <Container maxWidth='lg' style={{textAlign:'center', paddingTop:16}}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label='url'
                value={url}
                onChange={(e) => this.handleURL(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <FormControl>
                <Select
                  value={size}
                  onChange={(e) => this.handleSize(e.target.value)}
                >
                  <MenuItem value={64}>small</MenuItem>
                  <MenuItem value={128}>medium</MenuItem>
                  <MenuItem value={196}>large</MenuItem>
                </Select>
                <FormHelperText>change QRcode size</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{paddingTop:48}}>
            <Grid item xs={12}>
              <QRcode
                value={url}
                size={size}
                renderAs='canvas'
                id='canvas'
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{paddingTop:16}}>
            <Grid item xs={12}>
              <Button variant='outlined' onClick={() => this.download()}>
                Download
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{paddingTop:16}}>
            <Grid item xs={12}>
              <Button variant='outlined' onClick={() => window.open(url)}>
                Go to URL
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;