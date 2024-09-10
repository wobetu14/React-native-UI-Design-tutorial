import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
const ContactList = () => {
    const contacts=[
        {
            uid:1,
            name:'Wobetu Shiferaw',
            status:'Frontend Web Developer',
            imageUrl:'https://avatars.githubusercontent.com/u/97103425?v=4'
        },
        {
            uid:2,
            name:'Asabeneh Shitahun',
            status:'Fullstack Web Developer',
            imageUrl:'https://avatars.githubusercontent.com/u/9008063?v=4'
        },
        {
            uid:3,
            name:'Habtamu Shiferaw',
            status:'Senior Lecturer',
            imageUrl:'https://avatars.githubusercontent.com/u/2882446?v=4'
        },
        
    ]
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView 
       style={styles.container}
       scrollEnabled={true}
      >
        {
            contacts.map(({uid,name, status, imageUrl})=>(
                <View key={uid} style={styles.userCard}>
                   <Image 
                   source={{
                    uri:imageUrl
                   }}
                   style={styles.userImage}
                    />

                   <View>
                     <Text style={styles.userName}>{name}</Text>
                     <Text style={styles.userStatus}>{status}</Text>
                   </View>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}
export default ContactList
const styles = StyleSheet.create({
    headingText:{
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:8,
        marginBottom:4
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:4,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:10,
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:12
    },
    userName:{
        fontSize:14,
        fontWeight:'600',
        color:'#FFF'
        
    },
    userStatus:{
        fontSize:10,
        color:'#d5d8dc'
    }
})