import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemContainer: {
      borderWidth: 0,
      width: '100%',
      padding: 5
    },
    itemImage: {
      height: 200
    },
    itemTitle: {
      textAlign: "center",
      padding: 20,
      fontSize: 17,
      color: 'black',
      backgroundColor: 'white',
  
    },
    itemDescription: {
      fontSize: 17,
      padding: 10,
      color: 'black',
      backgroundColor: 'white',
    },
    itemBtn: {
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'center'
    }
  });