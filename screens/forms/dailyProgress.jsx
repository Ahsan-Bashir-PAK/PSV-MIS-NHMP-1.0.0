import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { User } from 'lucide-react-native';
import '../../config'
import {Calendar,Building2 } from 'lucide-react-native';


import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';


const DailyProgress = () => {
 
  //const time = new Date().toLocaleTimeString();
  // Start Date
const [dobopen, setdobOpen] = useState(false)
const [dobdate, setdobDate] = useState(new Date())
  // End Date
  const [endopen, setdOpen] = useState(false)
  const [enddate, setdDate] = useState(new Date())

  // Start Time
 // const [timeopen, setTime] = useState(false)
  const [timeopen, setTime] = useState(false)
  const [timeset, setTimes] = useState(new Date().toLocaleTimeString())





return (
    <ScrollView className=" ">
    <View className=" flex flex-col   ">
      <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>

        {/* Sign Up page */}
        <View className=" bg-yellow-400 mt-1 w-full  ">
          <View className="  rounded-md p-1 m-1 w-fit items-center justify-center flex-col ">
            <Text className="text-blue-900 text-lg rounded-md font-bold ">Progress Report</Text>
        
          </View>
        </View>

        <View className="   w-full  ">
          <View className=" bg-[#7f9ab8] rounded-md p-1 m-1 w-fit items-center justify-center flex-col ">
            <Text className="text-white text-lg rounded-md font-bold ">SI/ PO Ahsan Bashir</Text>
            <Text className="text-white text-lg rounded-md  ">Beat-11, M-2 (South), MC-1</Text>
          </View>
        </View>


   {/* Start Date*/}
   <View className={styles.outerview}>
   <View className=" w-2/6 justify-center items-center rounded-md bg-slate-300" ><Text className="text-black">Start Date</Text></View>
            <View className="w-4/6 items-center ">
            <View className="flex flex-row gap-1">
            
            <DatePicker
              modal
              mode="date"
              open={dobopen}
              date={dobdate}
              onConfirm={value => {
                setdobOpen(false);
                setdobDate(value);
              }}
              onCancel={() => {
                setdobOpen(false);
              }}
            />

            <Text className="rounded-md  w-4/6   text-black text-center font-bold p-2">
              {dobdate.toLocaleDateString()}
            </Text>
            <TouchableOpacity onPress={() => setdobOpen(true)}>
              <Calendar stroke="black" fill="white" size={30}></Calendar>
            </TouchableOpacity>
          </View>
            </View>
          </View>

{/* End Date*/}
        <View className={styles.outerview}>
                    <View className=" w-2/6 justify-center items-center rounded-md bg-slate-300" ><Text className="text-black">End Date</Text></View>
                    <View className="  w-4/6 items-center ">
                    <View className="flex flex-row gap-1">
                    
                    <DatePicker
                      modal
                      mode="date"
                      open={endopen}
                      date={enddate}
                      onConfirm={value => {
                        setdOpen(false);
                        setdDate(value);
                      }}
                      onCancel={() => {
                        setdOpen(false);
                      }}
                    />

                    <Text className="rounded-md  w-4/6   text-black text-center font-bold p-2">
                      {enddate.toLocaleDateString()}
                    </Text>
                    <TouchableOpacity onPress={() => setdOpen(true)}>
                      <Calendar stroke="black" fill="white" size={30}></Calendar>
                    </TouchableOpacity>
                  </View>
                    </View>
        </View>
{/* {/* Start Time */}
<View className={styles.outerview}>
                    <View className="border w-2/6 justify-center items-center" ><Text className="text-black">Start Time</Text></View>
                    <View className="  w-4/6 items-center ">
                    <View className="flex flex-row gap-1">
                    
                    <DatePicker
                      modal
                      mode="time"
                      open={timeopen}
                      date={timeset}
                      onConfirm={value => {
                        setTime(false);
                        setTimes(value);
                      }}
                      onCancel={() => {
                        setTime(false);
                      }}
                    />

                    <Text className="rounded-md  w-4/6   text-black text-center font-bold p-2">
                      {timeset}
                    </Text>
                    <TouchableOpacity onPress={() => setTime(true)}>
                      <Calendar stroke="black" fill="white" size={30}></Calendar>
                    </TouchableOpacity>
                  </View>
                    </View>
        </View> 


        <View className="   w-fit  ">
          <View className=" bg-[#7f9ab8] rounded-md p-2 m-1 w-fit items-center justify-center flex-col ">
            <TouchableOpacity>
                      <Text className="font-bold text-white">Generate Progress Report</Text>
            </TouchableOpacity>
          </View>
        </View>

{/*  PSV Added */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Total Inspections</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>

{/*  PSV Added */}
        <View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">New PSVs Added</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>

{/* PSV updated */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold"> PSVs Updated</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>
{/* Driver Added */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">New Drivers Added</Text></View>
          <View className=" w-3/6  items-center">
          <Text className={styles.resultfield} >125</Text>
          </View>
        </View>
{/* Driver Updated */}
<View className={styles.outerview} >
          <View className={styles.labelstyle}>
            <Text className="text-black  font-bold">Drivers Updated</Text></View>
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
{/* End of Report*/}
<View className="justify-center items-center mt-5 mb-10" >
          <Text className="text-black text-lg">-----------------End-----------------</Text>
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