import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#13d3e4',
      padding: 24,
      
    },
  
    eventName:{
      color: '#fdfcfe',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48
    },

    input:{
        flex:1,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#fdfcfe',
        padding: 16,
        fontSize: 16,
        marginRight:12
    },
    buttonText:{
        color: '#fdfcfe',
        fontSize: 24,
    },
    button:{  
        width: 56, 
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31cf67",
        alignItems: 'center',
        justifyContent: 'center',
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
        
    },
    listEmptyText:{
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    }




  })