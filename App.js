import React, {useEffect, useState} from 'react';
import { SafeAreaView, Text, View, Button, Image, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('edubridge.db');
export default function App(){ const [loading,setLoading]=useState(true); const [screen,setScreen]=useState('auth');
 useEffect(()=>{ async function p(){ await SplashScreen.preventAutoHideAsync(); db.transaction(tx=>{ tx.executeSql('CREATE TABLE IF NOT EXISTS learner(id INTEGER PRIMARY KEY NOT NULL, name TEXT, progress INTEGER);'); }); setTimeout(async ()=>{ setLoading(false); await SplashScreen.hideAsync(); },800); } p(); },[]);
 if(loading) return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator size='large'/><Text>Loading...</Text></View>
 if(screen==='auth') return (<SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}><Image source={require('./assets/splash.png')} style={{width:300,height:120,marginBottom:20}} /><Text>Welcome to EduBridgeAI</Text><Button title='Send OTP (mock)' onPress={()=>setScreen('otp')}/></SafeAreaView>)
 if(screen==='otp') return (<SafeAreaView style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Enter OTP (mock)</Text><Button title='Verify OTP (mock)' onPress={()=>setScreen('home')}/></SafeAreaView>)
 return (<SafeAreaView style={{flex:1,padding:20}}><Text style={{fontSize:22,fontWeight:'700'}}>EduBridgeAI</Text><View style={{marginTop:12}}><Button title='Add sample learner' onPress={()=>{ db.transaction(tx=>{ tx.executeSql('INSERT INTO learner (name, progress) values (?,?);',['Thabo',0]); }); alert('Sample learner added locally (SQLite).'); }} /><View style={{height:12}}/><Button title='List learners' onPress={()=>{ db.transaction(tx=>{ tx.executeSql('SELECT * FROM learner;',[],(txObj,{rows:{_array}})=>{ alert(JSON.stringify(_array)); }); }); }} /></View></SafeAreaView>) }