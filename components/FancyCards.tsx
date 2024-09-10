import { Image, StyleSheet, Text, View } from 'react-native'
const FancyCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
            source={{
                uri:'https://farm3.staticflickr.com/2220/1572613671_7311098b76_z_d.jpg'
            }}
            style={styles.cardImage}
         />
         <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Lalibela Rockhewn Churches</Text>
            <Text style={styles.cardLabel}>Wonder of the world</Text>
            <Text style={styles.cardDescription}>Site Description here. 
                Site Description here. Site Description here. Site Description here
            Site Description here. Site Description here. Site Description here.Site Description here. ...</Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
         </View>
      </View>
    </View>
  )
}
export default FancyCards
const styles = StyleSheet.create({
    headingText:{
        fontSize:16,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    card:{
        width:350,
        height:360,
        borderRadius:4,
        marginVertical:12,
        marginHorizontal:16
    },
    cardElevated:{
        backgroundColor:'#eee',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },

    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:'#000000',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLabel:{
        color:'#000000',
        fontSize:14,
        marginBottom:6
    },
    cardDescription:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:12,
        marginTop:6,
        flexShrink:1
    },
    cardFooter:{
        color:'#000000',
        fontSize:12
    }
})