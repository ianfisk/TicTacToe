'use strict';

import { USER_CHARACTER_CHOSEN } from '../actions';

const userCharacter = (state = 'X', action) => {
  switch (action.type) {
    case USER_CHARACTER_CHOSEN:
      return action.userCharacter;

    default:
      return state;
  }
}

export default userCharacter;
