import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  grid: {
    margin: 25,
    justifyContent: 'center',
  },
  row: {
    flex: 0,
    height: 120
  },
  horizontalSeparatorLeft: {
    height: 3,
    borderRadius: 3,
    marginRight: 5,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: '#dddddd'
  },
  horizontalSeparatorCenter: {
    height: 3,
    borderRadius: 3,
    margin: 3,
    backgroundColor: '#dddddd'
  },
  horizontalSeparatorRight: {
    height: 3,
    borderRadius: 3,
    marginLeft: 5,
    marginTop: 3,
    marginBottom: 3,
    backgroundColor: '#dddddd'
  },
  verticalSeparator: {
    flex: 0,
    width: 3,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: '#dddddd'
  },
});
