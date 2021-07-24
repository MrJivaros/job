import React,{useEffect,useState} from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native';
import Navigation from '../components/Navigation'
const QuizScreen =(props)=>{
    const [MOVIES, setMovies] = useState()
    const [next,setNext] = useState(0)
    const [trueQuiz,setTrue] = useState(0)
    const [falseQuiz,setFalse] = useState(0)
    

    let allmovie
    const allData = []
    const BASE_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=ef0698c3310a67248d460e31c56d9774&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&with_watch_monetization_types=flatrate'
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500'

    const getData = async()=>{
        const responses = await fetch(BASE_URL)
        const datas = await responses.json()
        const result = await showData(datas.results)
        allmovie = result
        setMovies(result)
        return result
    }
    const showData = (datas)=>{
        datas.forEach(data => {
            allData.push({
                'title' : data.title,
                'movisePicture' : data.backdrop_path,
                'author' : data.poster_path,
                'description' : data.overview,
                'date': data.release_date
            } )
             
        })
        return allData
    }
    const handleChoiseResponse = ()=>{
        setNext(next+1)
    }
    const goToHome =()=>{
        props.navigation.navigate('Home')
    }
    const goToProfil =()=>{
        props.navigation.navigate('Profil',{
            'movie' : MOVIES[next],
            'trueResponses': trueQuiz,
            'falseResponses': falseQuiz
        })
    }
    const handleSetTrue = ()=>{
        if(next%2 ==0){
            setTrue(trueQuiz+1)
        }else{
            setFalse(falseQuiz+1)
        }
        handleChoiseResponse()
    }
    useEffect(() => {
        getData()
        handleSetTrue()
    }, []);
    
    console.log(MOVIES)
  
    return(
        <ScrollView>    
             <View style={styles.container}>
          
                {MOVIES && (
                   
                    <View>
                        <View style={styles.quizHeader}>
                            <View style={styles.imgContent}>
                                <Image style={styles.authorImg} source={{uri:BASE_IMG_URL+MOVIES[next].movisePicture}}></Image>
                            </View>

                            <View style={styles.description}>
                                <Text style={styles.filmTitle}> {MOVIES[next].title}  </Text>
                                <Text style={styles.filmDate}> {MOVIES[next].date}  </Text>
                                <Text style={styles.text}> {MOVIES[next].description.substring(0,80)} ...  </Text>
                            </View>
                        </View> 

                        <View>
                            <TouchableOpacity style={styles.authorTochebale}>
                                <Text style={styles.authorText}>
                                    Is he the author of the film?
                                </Text>
                            </TouchableOpacity>
                            <Image style={styles.authorImg} source={{uri:BASE_IMG_URL+MOVIES[next%2 ==0? next:parseInt(next/2+2)].author}}></Image>
                            
                        </View>

                        <View style={styles.userResponse}>
                            <TouchableOpacity style={styles.oui} onPress={handleSetTrue}>
                                <View>
                                    <Text style={styles.ouiTxt}>OUI</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.non} onPress={handleSetTrue}>
                                <View>
                                    <Text style={styles.nonTxt}>NON</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Navigation home={goToHome} profil={goToProfil} />
                        </View>
                    </View>
                )}
      
            <Text>Movies</Text>
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
    authorImg :{
        height:250,
        width:"100%",
        borderRadius:20  
    },
    description:{
        display:'flex',
        flexDirection:'row-reverse',
        width:'60%',
        flexWrap:'wrap'
    },
    quizHeader:{
        display:'flex',
        flexDirection:'row',
        width:"100%",
        height:'auto',
        justifyContent:'space-between'
    },
    imgContent:{
        width:"40%",
        height:250
    },
    text:{
        color:'grey',
        fontSize:16,
        marginLeft:'4%'
    },
    filmTitle:{
        color:'#640509',
        fontSize:20,
        letterSpacing:5,
        fontWeight:'700',
        textAlign:'center'
    },
    filmDate:{
        fontWeight:'500',
        fontSize:18,
        color:'white'

    },
    authorText:{
        width : '100',
        height:60,
        color:'white',
        backgroundColor:"#640509",
        fontSize:25,
        borderRadius:10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    authorTochebale:{
        margin:10
    },
    userResponse:{
        display:'flex',
        justifyContent:'space-around',
        flexDirection:'row',
        marginTop:90
    },
    oui:{
        backgroundColor:'#2F3FBB',
        height:30,
        width:80,
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    non:{
        backgroundColor:'#640509',
        height:30,
        width:80,
        borderRadius:5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    ouiTxt:{
        color:'white',
        fontSize:15,
        fontWeight:'500'
    },
    nonTxt:{
        color:'white',
        fontSize:15,
        fontWeight:'500'
    },
    minuteur:{
        
    }
})


export default QuizScreen