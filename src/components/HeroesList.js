import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../actions';
import { Typography } from 'material-ui';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import Remove from '@material-ui/icons/Remove'

class HeroesList extends Component {
    render(){
        return(
            <div>
                <Typography variant="display1" >Your Hero Squad:</Typography>
                <List component="nav">
                    {
                        this.props.heroes.map(heroe => {
                            return(
                                <ListItem button key={heroe.id} onClick={() => this.props.removeCharacterById(heroe.id)}>
                                   <ListItemText>
                                        {heroe.name}
                                    </ListItemText >
                                    <ListItemIcon>
                                        <Remove/>
                                    </ListItemIcon>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        heroes: state.heroes
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeCharacterById }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);