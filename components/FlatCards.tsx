import { StyleSheet, Text, View } from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headerText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
            <Text>Blue</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}
export default FlatCards;

const styles = StyleSheet.create({
    headerText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },

    container:{
        flex:1,
        flexDirection:'row',
        padding:8,
    },
    card:{
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8
    },
    cardOne:{
        backgroundColor:'#ef5354',
    },
    cardTwo:{
        backgroundColor:'#50DBB4',
    },
    cardThree:{
        backgroundColor:'#5DA3FA',
    }
})