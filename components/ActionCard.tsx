import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const ActionCard = () => {
    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
                ባይደን ከሰሜኑ ጦርነት ጋር በተያያዘ በኢትዮጵያና 
                ኤርትራ ባለሥልጣናት ላይ ማዕቀብ የሚያስጥለው ትዕዛዝ እንዲራዘም ወሰኑ
            </Text>
        </View>

        <Image 
            source={require('./images/biden.png')}
            style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
            <Text numberOfLines={2}>
                የአሜሪካው ፕሬዝዳንት ጆ ባይደን ከሰሜን ኢትዮጵያ ጦርነት ጋር በተያያዘ ባለሥልጣናት ላይ ማዕቀብ መጣል የሚያስችለው ፕሬዝዳንታዊ ትዕዛዝ ለተጨማሪ አንድ ዓመት እንዲራዘም ወሰኑ።

ፕሬዝዳንቱ አርብ ጳጉሜ 1/2016 ዓ.ም. በጻፉት ደብዳቤ “የኢትዮጵያን ሰላም፣ ደኅንነት እና መረጋጋትን አደጋ ላይ ጥሎ የቆየው በሰሜን ኢትዮጵያ ያለው ሁኔታ አሁንም የአሜሪካ ብሔራዊ ደኅንነት እና የውጪ ፖሊስ ላይ የማይገመት አደጋ ደቅኗል” ብለዋል።

በዚህም ፕሬዝዳንቱ ከኢትዮጵያ ጋር በተያያዘ የተላለፈው ፕሬዝዳንታዊ ትዕዛዝ ቁጥር 14046 ባለበት እንዲቀጥል ወስኛለሁ ብለዋል።
            </Text>
        </View>

        <View style={styles.footerContainer}>
            <TouchableOpacity 
            onPress={()=>openWebsite('https://www.bbc.com/amharic/articles/cwyxz4gn3r4o')}
            >
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>openWebsite('https://www.linkedin.com/in/wobetus')}
            >
                <Text style={styles.socialLinks}>LinkedIn</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default ActionCard
const styles = StyleSheet.create({
    headingText:{
        fontSize:16,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:340,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:16
    },
    elevatedCard:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    }, 
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:'#000',
        fontSize:14,
        fontWeight:'600'
    },
    cardImage:{
        height:190,
        width:'auto'
    },
    bodyContainer:{
        color:'#FFFFFF',
        padding:10,
        
    },
    footerContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        color:'#FFF'
    },
    socialLinks:{
        fontSize:14,
        color:'#000000',
        backgroundColor:'#FFFFFF',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6
    }
})