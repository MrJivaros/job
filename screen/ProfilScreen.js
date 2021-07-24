import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import userProfil from '../svgs/solid/user-edit.svg'
import replay from '../svgs/solid/undo.svg'
import home from '../svgs/solid/arrow-alt-circle-left.svg'
console.log(home)
const ProfilScreen = (props)=>{
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500'
    const trueQuiz = props.route.params.trueResponses
    const falseQuiz = props.route.params.falseResponses
    const img = BASE_IMG_URL+ props.route.params.movie.author
    const handleGoHome = ()=>{
        props.navigation.navigate('Home')
    }
    const handleReplay = ()=>{
        props.navigation.navigate('Quiz')
    }

    return(
        <ScrollView style={styles.container}>
            <View>
                <Image style = {styles.banner} source={{uri:img}}></Image>
            </View>

            <View style={styles.profilBg}>
                <Image style = {styles.profil} source={{uri:userProfil}}></Image>
            </View>

            <View style={styles.isResponse}>
                <View style={styles.isTrue}>
                    <Text style={styles.txt}>Success</Text>
                    <Text style={styles.txt}>
                        {(trueQuiz/20)*100} %
                    </Text>
                    <Text style={styles.txt}>Soit {trueQuiz} / 20 </Text>
                </View>
                <View style={styles.isFalse}>
                    <Text style={styles.txt}> Echec </Text>
                    <Text style={styles.txt}>
                        {(falseQuiz/20)*100} %
                    </Text>
                    <Text style={styles.txt}> Soit {falseQuiz} / 20</Text>
                </View>
            </View>

            <View style={styles.navigation}>
                <View>
                    <TouchableOpacity style={styles.item} onPress={handleGoHome}>
                        <Image style = {styles.icons} source={{uri:home}}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.item} onPress={handleReplay}>
                        <Image style = {styles.icons} source={{uri:replay}}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        backgroundColor:"#03040B",
    },
    banner:{
        height:400,
        width:"100",
        borderRadius:20
    },
    profil:{
        height:60,
        width:60,
        
    },
    profilBg:{
        height:100,
        width:100,
        borderRadius:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#640509",
        marginLeft:'40%',
        marginTop:'-10%'
    },
    isResponse:{
        display:'flex',
        justifyContent:'space-between',
        width : '100%',
        flexDirection:'row'

    },
    isTrue:{
        height:150,
        width:'40%',
        backgroundColor:"#2F3FBB",
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    isFalse:{
        height:150,
        width:'40%',
        backgroundColor:"#640509",
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    txt:{
        color:'white',
        fontSize:25,
        fontWeight:500
        
    },
    navigation:{
        display:'flex',
        justifyContent:'space-between',
        width : '100%',
        flexDirection:'row',
        marginTop:100,
        zIndex:10
    },
    item:{
        height:80,
        width:80,
        backgroundColor:"#640509",
        borderRadius:100,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    icons:{
        height:30,
        width:30
    }
})


export default ProfilScreen