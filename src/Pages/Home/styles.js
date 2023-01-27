import { StyleSheet, useWindowDimensions, PixelRatio } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d1d',
    paddingTop: 35,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    height: '100%'
  },
  viewProfile: {
    backgroundColor: '#161616',
    height: 190,
    width: 390,
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
    alignItems: 'center',
    paddingTop: 30
  },
  userIcon: {
    height: 55,
    width: 55,
    backgroundColor: '#d0d0d0',
    borderRadius: 100
  },
  textApresent: {
    marginLeft: 10,
    color: '#838383',
    fontSize: 18
  },
  textUsername: {
    marginTop: 10,
    color: '#ececec',
    fontWeight: 'bold'
  },
  viewButtonsHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10
  },
  buttonHeader: {
    height: 45,
    width: 45,
    borderRadius: 100,
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  buttonHeaderText: {
    color: '#dddddd'
  },
  bottomView: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 120
  }
});

export default styles