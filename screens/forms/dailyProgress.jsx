import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Switch, Alert } from 'react-native';

import { User } from 'lucide-react-native';
import '../../config'



import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';
import { verifyDuplicateUser } from '../../config/functions';

const DailyProgress = () => {
 
function  clearAll (){

  setCnic("");

  
}




return (
    <ScrollView className=" ">
    <View className=" flex flex-col   ">
      <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>

        {/* Sign Up page */}
        <View className=" bg-yellow-400 mt-1 w-full  ">
          <View className="  rounded-md p-1 m-1 w-fit items-center justify-center flex-col ">
            <Text className="text-blue-900 text-lg rounded-md font-bold ">Daily Progress Report</Text>
        
          </View>
        </View>

        <View className="   w-full  ">
          <View className=" bg-[#7f9ab8] rounded-md p-1 m-1 w-fit items-center justify-center flex-col ">
            <Text className="text-white text-lg rounded-md font-bold ">SI/ PO Ahsan Bashir</Text>
            <Text className="text-white text-lg rounded-md  ">Beat-11, M-2 (South), MC-1</Text>
          </View>
        </View>

         
{/*  PSV Added */}
        <View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Total PSVs Added</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>

{/* PSV updated */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Total PSVs Updated</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>
{/* Driver Added */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Total Drivers Added</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>
{/* Driver Updated */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Total Drivers Updated</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>
{/* Road Worthy */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Road Worthy</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>
{/* Warned */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Warned</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>
{/* Returned */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Returned</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>
{/* Enforced*/}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Enforced</Text>
          </View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>
{/* Enforced & Returned */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Enforced & Returned</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>
{/* Warned & Returned */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Warned & Returned</Text>
          </View>
          <View className=" w-3/6  items-center">
           <Text className={styles.resultfield} >125</Text>
          </View>
        </View>

      </KeyboardAvoidingView>
    </View>
  </ScrollView>
  );
};


export default DailyProgress;

const styles = {
  
    labelstyle:
    'text-center items-center justify-center w-3/6  border-r  border-slate-400  ',
     outerview:
    'flex flex-row mb-1 mx-2 border border-gray-300 p-1 rounded-md bg-white shadow-md  shadow-blue-900',
    resultfield:
    'text-black font-bold w-5/6 text-lg items-center justify-center text-center'
};