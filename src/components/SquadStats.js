import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';

class SquadStats extends Component {
    strength(){
        let strength = 0;
        this.props.heroes.forEach(heroe => strength += heroe.strength);
            return strength;
    }
    intelligence(){
        let intelligence = 0;
        this.props.heroes.forEach(heroe => intelligence += heroe.intelligence);
            return intelligence;
    }
    speed(){
        let speed = 0;
        this.props.heroes.forEach(heroe => speed += heroe.speed);
            return speed;
    }
    render(){
        return(
            <div>
                <Typography variant="display1" >
                    Squad Stats
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText>
                            Overall strength: {this.strength()}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            Overall intelligence: {this.intelligence()}
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            Overall speed: {this.speed()}
                        </ListItemText>
                    </ListItem>
                </List>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProps)(SquadStats);