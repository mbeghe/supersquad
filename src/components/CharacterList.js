import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions';
import { Typography } from 'material-ui';
import List, { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import AddIcon from '@material-ui/icons/Add';

class CharacterList extends Component {
    render(){
        console.log('this.props', this.props);
        return (
            <div>
                <Typography variant="display1" >Characters</Typography>
                <List component="nav">
                    {
                        this.props.characters.map(character => {
                            return(
                                <ListItem button key={character.id} onClick={() => this.props.addCharacterById(character.id)}>
                                   <ListItemText>
                                        {character.name}
                                    </ListItemText >
                                    <ListItemIcon>
                                        <AddIcon/>
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
        characters: state.characters
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addCharacterById }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);