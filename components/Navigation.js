import React,{useState,useEffect} from 'react'
import {View,TouchableOpacity, Image,StyleSheet } from 'react-native'
import homeIcone from '../svgs/solid/home.svg'
import endicone from '../svgs/solid/user-circle.svg'

const Navigation = (props)=>{
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            if (count >= 60) {
                console.log(props.profil)
                props.profil()
            } else {
                setCount(count + 1)
            }
        }, 1000)
    })
    
    return (

        <View style={style.navigation}>

            <TouchableOpacity style={style.icon} onPress={props.home}>  
                <Image source={{uri:homeIcone}} style={style.img}></Image>
            </TouchableOpacity>

            <TouchableOpacity style={style.icon,style.middleIcon}>
                {count}
            </TouchableOpacity>

            <TouchableOpacity style={style.icon} onPress={props.profil}>
                <Image source={{uri:endicone}} style={style.img}></Image>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    img:{
        height:30,
        width:30,
        opacity:"0.5"
        
    },
    icon:{
        backgroundColor:"grey",
        borderRadius:100,
        color:"white",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:50
    },
    navigation:{
        display:'flex',
        justifyContent:"space-around",
        alignItems:"center",
        flexDirection:"row"
    },
    middleIcon:{
        marginBottom:50,
        backgroundColor:"#f14668",
        borderRadius:100,
        color:"white",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:70,
        width:70
    }
})
export default Navigation

