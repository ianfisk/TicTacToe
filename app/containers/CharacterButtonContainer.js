'use strict';

import { connect } from 'react-redux';
import CharacterButton from '../components/CharacterButton';
import userCharacterChosenAction from '../actions';

const mapStateToProps = (state) => {
  return {
    userCharacter: state.userCharacter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCharacterButtonClicked: (character) => {
      dispatch(userCharacterChosenAction(character));
    }
  }
}

const CharacterButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterButton);

export default CharacterButtonContainer;
