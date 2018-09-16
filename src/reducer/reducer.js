const defaultState = {
  isStart: false,
  user: null,
  level: 0,
  mode: 'eng',
  theme: 'default'
};


const reducer = (state = defaultState, action) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case 'START': {
      newState.isStart = !state.isStart;
      return newState;
    }
    case 'LOGIN': {
      newState.user = 'Someone';
      return newState;
    }
    case 'FIND': {
      state.level = state.level + 1;
      return state;
    }
    case 'THEME_CHANGE': {
      newState.theme = action.theme;
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
