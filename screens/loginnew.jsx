import React, { useState, Linking,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';
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
    Modal
    
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

import axios from 'axios';
import '../config';
import { Facebook, Twitter } from 'lucide-react-native';

function Login() {


//==========================new version
function downloadApk(){

    const {config,fs} = RNFetchBlob;
    const dowloads = fs.dirs.DownloadDir
    return config({
        fileCache:true,
        addAndroidDownloads:{
            useDownloadManager: true,
            notification:true,
            path:dowloads + '/'+ 'PSV_MIS' + '.apk'
        }
    })
    .fetch("GET",`${global.BASE_URL}/v/downloadApk`)

}
//=========================check verion
    function versionCheck(version)
{
    axios.get(`${global.BASE_URL}/v/chkversion/${version}`).then(
        response=>{
            if(response){
                if(response.data=='updated'){
                    Alert.alert(response.data,'Please download new version and install', [
         
                        {text: 'Download', onPress: () => downloadApk()},
                      ]);
                }
            }
        }
    )
}
useEffect(()=>{
    function clearStorage(){

        EncryptedStorage.clear()
    }
clearStorage()
versionCheck(1.0)
},[])
 
    const [user, setUser] = useState("")
    const [userpwd, setPwd] = useState("")
    const [userbound, setBound] = useState("")
    const [location,setlocation] = useState("")

    const [modalVisible, setModalVisible] = useState(false);

//-----------Signin & get User 
        const signIn =async()=>{       
            
               
            if(user== "") {
                Alert.alert("Please enter User Name") }
               else if(userpwd== "") {
                    Alert.alert("Please enter Password") }
                  else  if(location== "") {Alert.alert("Please enter current location") }
                 else   if(userbound== "") {Alert.alert("Please Select North or South Bound")}
        else {
            
        if(user && userpwd && location && userbound){
         await axios.get(`${global.BASE_URL}/users/getUser/${user}`
           // console.log(`${global.BASE_URL}/users/getUser/${user}`)
           
          ).then(
            function (response){
                const result = response.data[0]
          if(result) {
           
          if(userpwd == result.userPwd){
         
            storeUserSession(user,result.role,result.userName,result.rank,result.userPwd ,result.zoneId,result.sectorId,result.beatId)
            
            navigation.navigate("Home")
            clearAll()
          }
          else {
            Alert.alert("Wrong Password")
          }
        }
        else{
           Alert.alert("User Not Registered")
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
        setlocation("")
        setBound("")
}
     //---------------------------------------

    

     async function storeUserSession(user,role,officer,rank,pwd,beat,sector,zone) {
         try {
             await EncryptedStorage.setItem(
                 "user_session",
                 JSON.stringify({
                     userName : user,
                     role:role,
                     location:location+userbound,
                     name:officer,
                     rank:rank,
                     pwd:pwd,
                     zone:zone,
                     sector:sector,
                     beat:beat
                     

                    
                 })
             );
           
         } catch (error) {
             console.log(error)
         }
     }

    
    
    
    const navigation = useNavigation();


    return (
      
        <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'position' : null}
        style={styles.container} enabled>
        <View className='  flex justify-center items-center h-screen bg-blue-800  '>

            {/* ============================================== */}
          {/* <TouchableOpacity className="bg-white p-2 rounded-md" onPress={()=>navigation.navigate("Inspection History")}>
            <Text> Inspection History</Text>
          </TouchableOpacity>  */}

          {/* ============================================== */}


            {/* Logo VIEW */}
            <View className="w-full  h-2/5 bg-blue-800 flex justify-center items-center  rounded-tl-full border-l-[50px] border-t-yellow-500 border-l-yellow-500   ">
                <Image source={require('../img/logo.png')} style={{width:180, height:180}} className='w-[270] h-[300] border ' />
                <Text className='font-extrabold text-3xl  text-white'>PSV-MIS</Text>
                <Text className='font-extrabold sm:text-2xl text-md text-yellow-500'>National Highways & Motorway Police</Text>
                <Text className="text-white font-light font-mono text-xs italic">(Version: 1.0.0)</Text>
            </View>
           
                       {/* Login Panel */}
            <View className='w-full    border-yellow-500 shadow-xl shadow-yellow-700 flex justify-center items-center h-fit bg-slate-100 py-10 px-4'>
                
               {/* User name */}
               <View className="w-full ">
                    <TextInput
                    placeholder='User CNIC'
                    value={user}
                    onChangeText={text=>setUser(text)}
                    placeholderTextColor='grey'
                    keyboardType='number-pad'
                    maxLength={13}
                    className=' h-[50]  pl-5 text-lg border bg-white border-blue-400 text-black m-3 rounded-md ' />
                </View>

                {/* Password  */}
                <View className="  w-full">
                <TextInput
                    secureTextEntry={true}
                    placeholder='Password'
                    value={userpwd}
                    onChangeText={e => setPwd(e)}
                    placeholderTextColor='grey'
                    
                    className='h-[50]  pl-5 text-lg  border  bg-white border-blue-400 text-black m-3 rounded-md ' />
                </View>
                <View className="  w-full flex flex-row">
                        <View className=" mt-3 mb-3 ml-3 w-4/12">
                        <TextInput
                        placeholder='Location'
                        value={location}
                        onChangeText={e => setlocation(e)}
                        placeholderTextColor='grey'
                        keyboardType='number-pad'
                        maxLength={4}
                        
                        className='h-[50] pl-5 text-lg  rounded-md border  bg-white border-blue-400 text-black  ' />
                        </View>

                        <View className="w-10  rounded-md mt-3 mb-3  justify-center ">    
                                 <Text className="text-center items-center text-black  font-bold text-lg " > {userbound} </Text>
                        </View>

                        <View className=" w-3/12  text-center items-center flex flex-row ">
                        <TouchableOpacity onPress={()=>setBound('NB')} className="bg-green-700 p-3 px-4 ml-2 rounded-md"><Text className="font-bold text-white">North</Text></TouchableOpacity>
                        <TouchableOpacity   onPress={()=>setBound('SB')} className="bg-orange-700 p-3 px-4  ml-2 rounded-md"><Text className="font-bold text-white">South</Text></TouchableOpacity>

                    </View>

                </View>



                    <TouchableOpacity onPress={()=>signIn()} 
                    className='p-3 bg-blue-800 text-center rounded-md w-6/12 mt-10' >
                    <Text className='text-white text-center font-bold text-lg'>Login</Text>

                    </TouchableOpacity>
                    {/* <TouchableOpacity  
                    onPress={()=>setModalVisible(true)}
                    className='p-3 bg-blue-800 text-center rounded-md w-6/12 mt-10' >
                    <Text className='text-white text-center font-bold text-lg'>Test Modal</Text>

                    </TouchableOpacity> */}
            </View>
            {/* important NMHP social links */}
           
            {/* <View className="border">
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                // onShow={}
                //presentationStyle='formSheet'
                onRequestClose={() => {
                // Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
             }}> 
                <View className="bg-green-100 flex items-center mt-10 h-1/4 w-2/4 justify-center rounded-md p-4">
                    <Text>
                       Modal View
                       Modal View
                       Modal View
                       Modal View
                    </Text>
                    <TouchableOpacity onPress={()=>setModalVisible(false)} className="bg-blue-500 p-2 justify-center rounded-lg w-2/4">
                        <Text className="text-white"> Close Modal</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            </View> */}
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
