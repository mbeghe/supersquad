import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroesList from './HeroesList';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import SquadStats from './SquadStats';
import Background from '../assets/background.jpg';
import { withStyles } from 'material-ui';

const styles = theme => ({
    app: {
        backgroundImage: `url(${Background})`,
        hight: '100%',
        backgroundSize: 'cover'
    }
});

class App extends Component {
    
    render(){
        const { classes } = this.props;
        return(
            <div  className={classes.app} >
                <Typography variant="display3" align="center" >
                    SuperSquad
                </Typography>
                <Grid container align="center" >
                    <Grid item md={4} xs={12}>
                        <CharacterList/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <HeroesList/>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <SquadStats/>
                    </Grid>
                </Grid>
            </div>

        )
    }
}

export default withStyles(styles)(App);