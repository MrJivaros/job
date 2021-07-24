import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native';


const HomeScreen = (props)=>{
    const goTo = ()=>{
        props.navigation.navigate('Quiz')
    }
    return(
        <View style={styles.container}>
            
            <View style={styles.imageContent}>
                <Image style={styles.img} source={{uri:"https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}></Image>
            </View>

            <View>
                <Text style={styles.title}>Ze Movies Quiz</Text>
            </View>
            <TouchableOpacity style={styles.buttonContent} onPress={goTo}>
                <Text style={styles.button}>
                    Start Quiz
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        backgroundColor:"#060304"
    },
    button:{
        height:60,
        width:"100",
        backgroundColor:'#640509',
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        color:"white",
        fontWeight:"600",
        fontSize:25
        
    },
    buttonContent:{
        padding:10
    },
    img:{
        height:400,
        width:'100',
        borderBottomEndRadius:40,
        borderBottomStartRadius:40
        
    },
    imageContent:{
        borderBottomRightRadius:50
    },
    title:{
       fontSize:35,
       fontWeight:"500",
       color:"white",
       textAlign:'center'

    }

})
export default HomeScreen