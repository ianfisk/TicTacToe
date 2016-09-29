import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerJustified: {
    flex: 1,
    justifyContent: 'center'
  },
  primaryText: {
    fontSize: 60,
    fontFamily: 'PingFangHK-Ultralight',
  },
  secondaryText: {
    fontSize: 30,
    fontFamily: 'PingFangHK-Ultralight',
  },
  button: {
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  characterButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 100
  },
  characterButton: {
    flex: 1,
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  characterButtonContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});
