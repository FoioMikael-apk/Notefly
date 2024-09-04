import { StyleSheet } from 'react-native';

const customModalStyles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 65,
  },
  modalView: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    height: 250,
    backgroundColor: '#021526',
    borderRadius: 40,
    paddingHorizontal: 15,
    // paddingTop: 10,
    shadowColor: '#68D2E8',
    shadowOffset: {
      width: 10,
      height: 500,
    },
    shadowOpacity: 50,
    shadowRadius: 5,
    elevation: 30,
  },
  textSize: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 30,
    color: '#E2DAD6',
  },
});

export default customModalStyles;
