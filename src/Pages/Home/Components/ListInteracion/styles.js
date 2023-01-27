import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 270,
    width: 370,
    borderRadius: 30,
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
  headerText: {
    height: 25,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  component: {
    backgroundColor: '#191919',
    height: '90%',
    borderRadius: 15
  },
  categoryText: {
    fontWeight: 'bold',
    color: '#adadad',
    fontSize: 18,
  },
  allViewText: {
    color: '#adadad',
    fontWeight: 'bold'
  }
});

export default styles