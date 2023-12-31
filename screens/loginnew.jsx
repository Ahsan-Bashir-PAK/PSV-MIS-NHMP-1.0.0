import React, { useState, Linking,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { UserPlus, UserCog2, Lock,  } from 'lucide-react-native';



import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
    Image,
    Alert,
    Platform,
    KeyboardAvoidingView,
    Modal,
    ImageBackground
    
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

import axios from 'axios';
import '../config';
import { Facebook, Twitter } from 'lucide-react-native';
import { storeUserSession } from '../config/functions';

import myimage from '../img/login.jpg'
function Login() {


//==========================new version
// function downloadApk(){

//     const {config,fs} = RNFetchBlob;
//     const dowloads = fs.dirs.DownloadDir
//     return config({
//         fileCache:true,
//         addAndroidDownloads:{
//             useDownloadManager: true,
//             notification:true,
//             path:dowloads + '/'+ 'PSV_MIS' + '.apk'
//         }
//     })
//     .fetch("GET",`${global.BASE_URL}/v/downloadApk`)

// }
//=========================check verion
//     function versionCheck(version)
// {
//     axios.get(`${global.BASE_URL}/v/chkversion/${version}`).then(
//         response=>{
//             if(response){
//                 if(response.data=='updated'){
//                     Alert.alert(response.data,'Please download new version and install', [
         
//                         {text: 'Download', onPress: () => downloadApk()},
//                       ]);
//                 }
//             }
//         }
//     )
// }
useEffect(()=>{
    function clearStorage(){

        EncryptedStorage.clear()
    }
clearStorage()
// versionCheck(1.0)
},[])
 
    const [user, setUser] = useState("")
    const [userpwd, setPwd] = useState("")
    const [data, setData] = useState("")

    const [modalVisible, setModalVisible] = useState(false);

//-----------Signin & get User 
        const signIn =async()=>{                  
            if(user== "") {
                Alert.alert("Please enter User Name") }
               else if(userpwd== "") {
                    Alert.alert("Please enter Password") }
                 
        else {
            
        if(user && userpwd){
         await axios.post(`${global.BASE_URL}/users/login`,

         {
            "id":user,
            "pwd":userpwd
           },

           {
            headers:{
            api_key :'A3166'
           }
         
        }
           
          ).then(
            function (response){
                
                const result = response.data
          if(result =='No User Found') {
            Alert.alert("User Not Registered")
          }
            else if (result == 'Incorrect Password') {
                Alert.alert('Incorrect Password')
            }
            else {  

               storeUserSession(result.token)        
               navigation.navigate("Home")
               clearAll()
        }
    }          
          ).catch(
            function(error){
                console.log(error)
            }
          )
        }}

    }
     //---------------------------------------store session


//
function clearAll(){
        setUser("")
        setPwd("")
        
}
     //---------------------------------------

    

    //  async function storeUserSession(user,role,officer,rank,pwd,region, zone, sector, beat) {
      
    //     try {
    //          await EncryptedStorage.setItem(
    //              "user_session",
    //              JSON.stringify({
    //                  userName : user,
    //                  role:role,
    //                  location:location+userbound,
    //                  name:officer,
    //                  rank:rank,
    //                  pwd:pwd,
    //                  region:region,
    //                  zone:zone,
    //                  sector:sector,
    //                  beat:beat,
                    
                     
                    
    //              })
    //          );
           
    //      } catch (error) {
    //          console.log(error)
    //      }
    //  }

    
    
    
    const navigation = useNavigation();
    
    return (
      
        <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'position' : null}
        style={styles.container} enabled>
        <ImageBackground source={myimage} resizeMode='cover' className="flex  flex-1  justify-center items-center  h-screen w-full" ></ImageBackground>
        <View className='flex justify-start items-center h-screen border ' >
        
          

            {/* Logo VIEW */}
            <View className="w-full  h-2/5 flex justify-center items-center p-2">
                <Image source={require('../img/logo.png')}   className=' w-32 h-32 border flex ' />
                <Text className='font-extrabold text-3xl  text-yellow-400 mt-2 '>E-Leave (NHMP)</Text>
                <Text className=' sm:text-2xl text-md text-white font-bold m-2 border-b-2  border-yellow-400   px-2 rounded-sm '>National Highways & Motorway Police</Text>
                <Text className="text-white font-light font-mono text-xs italic">Version: 1.0.0</Text>
            </View>
           
                       {/* Login Panel  bg-[#2b6379] */}
                       
            <View className='w-full bg-[#17162560]  p-10   shadow-lg border border-gray-700  flex justify-center items-center h-2/5  '>
                
               {/* User name */}
               <View className="justify-start items-start w-full flex flex-row  ">
               <View className='bg-gray-100  border-r border-gray-400 p-3 justify-center items-center flex '>
                <UserCog2 width={25} stroke='black' strokeWidth={1}  />
                </View>
                    <TextInput
                    placeholder='User CNIC'
                    value={user}
                    onChangeText={text=>setUser(text)}
                    placeholderTextColor='grey'
                    keyboardType='number-pad'
                    maxLength={13}
                    className='   text-lg  w-10/12  bg-white border-blue-400 text-black' />
                
                </View>

                {/* Password  */}
                <View className="  justify-start items-start w-full flex flex-row mt-5 ">
                <View className='bg-gray-100  border-r border-gray-400 p-3  justify-center items-center flex '>
                <Lock width={25} stroke='black' strokeWidth={1}  />
                </View>

                <TextInput
                    secureTextEntry={true}
                    placeholder='Password'
                    value={userpwd}
                    onChangeText={e => setPwd(e)}
                    placeholderTextColor='grey'
                    
                    className='  text-lg  w-10/12  bg-white border-blue-400 text-black   ' />
                
                </View>
                

                <View className=" justify-center items-center   flex flex-row mt-5">    

                    <TouchableOpacity onPress={()=>signIn()} 
                    className='p-3 bg-yellow-400 text-center  w-6/12  border-yellow-500' >
                    <Text className='text-white  text-center font-bold text-lg'>Login</Text>

                    </TouchableOpacity>
                    <TouchableOpacity  
                    onPress={()=>navigation.navigate('SignUp')}
                    className='p-3 bg-blue-900 text-center ml-3 w-4/12  border-yellow-300' >
                    <Text className='text-white text-center font-bold text-lg'>Sign Up</Text>

                    </TouchableOpacity>
                    </View>    
            </View>
            {/* important NMHP social links */}
           
       
            {/* copyrights Tab */}
            <View className=' w-full  justify-center  items-center pt-3'>
                <Text className="text-white text-sm">All Rights Reserve by</Text>
                <Text className="text-white text-sm">NHMP Training  College, IT Wing</Text>
            </View>
            
        
        
        </View>
        </KeyboardAvoidingView>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }

  });

export default Login;
