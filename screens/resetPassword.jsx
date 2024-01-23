import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import { Linking } from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import { CircleDot, FileDown, FileSymlink, User, UserCircle,Dot, Circle, Pencil, PencilLine } from 'lucide-react-native';
import { retrieveUserSession } from '../config/functions';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';



const ResetPassword = () => {

    const navigation = useNavigation();
 
    const [cnic, setCnic] = useState('');
    const [cellno, setCellNumber] = useState('');
    const [newpwd, setNewPwd] = useState('');
    const [currentUser,setCurrentUser] = useState('')

        

    useEffect(()=>{
    //    retrieveUserSession(setCurrentUser)
    },[])

function clearAll(){
    setCnic("");
    setCellNumber("");
    setNewPwd("");
   
}

// const userFeedback ={
//     userCnic:currentUser.userName,
//     feedBack:feedback
// }

function generate() {
    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //  const charactersLength = characters.length;
            var a = Math.random().toString(20).substring(2,5)
            // console.warn(Math.random().toString())

            setNewPwd(a)
  }; 
   
    return (
        <ScrollView >
            <View className="  flex flex-col   p-2 justify-start">
                <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>
                    {/* User Profile TAB*/}
                    <View className=" mt-1 w-full  ">

                        <View className=" p-5  bg-yellow-400  rounded-md  w-fit items-center justify-center flex ">
                           <Text className="text-black  text-xl">Reset Your Password</Text>
                          
                            
                        </View>
                    </View>    
                    
              
                    {/* CNIC */}
                    <View className={styles.outerview}>
                        <View className={styles.labelstyle}><Text className="text-black font-bold ">CNIC </Text></View>
                    <View className="w-4/6 justify-start">
                    <TextInput
                            onChangeText={text => setCnic(text)}
                            value={cnic}
                            style={{padding: 10}}
                            className="text-black font-bold mt-0"
                            keyboardType='numeric'
                            maxLength={13}
                        />

                    </View>
                    </View>   

                     {/* Cell Number */}
                     <View className={styles.outerview}>
                        <View className={styles.labelstyle}><Text className="text-black font-bold ">Cell Number</Text></View>
                    <View className="w-4/6 justify-start">
                    <TextInput
                            onChangeText={text => setCellNumber(text)}
                            value={cellno}
                            style={{padding: 10}}
                            className="text-black font-bold mt-0"
                            keyboardType='numeric'
                            maxLength={11}
                        />

                    </View>
                    </View> 
 
                      {/* New Auto Generated Password */}
                      <View className={styles.outerview}>
                        <View className={styles.labelstyle}><Text className="text-black font-bold ">New Password (One Time)</Text></View>
                    <View className="w-4/6 justify-center pl-10">
                    <Text className="text-black font-bold text-lg"> {newpwd == "" ? '' : newpwd}</Text>
                    </View>
                    </View>

                       
                    

                    <View className='flex flex-row mt-3 justify-center'>
                        <TouchableOpacity onPress={() => clearAll()} className='bg-[#fc4343] px-5 py-2 rounded-md m-2'><Text className='text-white font-extrabold'>Clear</Text></   TouchableOpacity>
                    <TouchableOpacity onPress={()=>generate()} className='bg-[#29378a] px-5 py-2 rounded-md m-2'><Text className='text-white font-extrabold'>Generate Password</Text></TouchableOpacity>
                     </View>

                </KeyboardAvoidingView>
            </View>
        </ScrollView>
    );
};

export default ResetPassword;

const styles = {
    inputViolet:
        'w-full  border border-1 border-violet-400 rounded-md m-1 font-bold px-3 py-1 text-black ',
    inputVioletSmall:
        'w-6/12  border border-1 border-violet-400 rounded-md mx-1 font-bold px-3 py-1 text-black',
    labelstyle:
        'text-center items-center justify-center w-2/6  border-r  border-slate-400  ',
    outerview:
        'flex flex-row mb-1 mx-2 border border-gray-300 p-1 rounded-md bg-white shadow-md  shadow-blue-900 mt-2'
};