import React, { useState,Component } from 'react';
import { ImageBackground ,View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ScrollView } from 'react-native-gesture-handler';

//let url = "http://192.168.0.8:8797/posts/delete/12"
//let url = "http://192.168.1.116:8797/users"
let url = "http://192.168.43.159:8797/posts/delete/12"
//let url = "http://192.168.0.4:8797/users"
//let url = 'http://192.168.43.232:8797/users';

const SignUpScreen = (route) => {
    const navigation = useNavigation();
    const [id, setid] = useState('');
    const [poster, setposter] = useState('');
    const [content, setcontent] = useState('');
    const [title, settitle] = useState('');
    const [image, setimage] = useState('');
    const [name, setname] = useState('');
    const { inputStyle, bigButton, buttonText, row1, titleStyle, container } = styles;
    const handlingSignup = () => {
        fetch(url,
        {   
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "poster": poster ,
                
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.success == 1){
                Alert.alert("Xóa bài viết thành công!");
                navigation.navigate("Admin");     
            }
            else if (res.success == 2){
                Alert.alert(res.message)
            }
            else{
                Alert.alert("Đăng bài k đc!")
            }
        }) 
    }
    const imagebg = { uri: "https://phunugioi.com/wp-content/uploads/2020/02/mau-background-dep.jpg" };
    return (
        <ImageBackground source={imagebg} style = {styles.imagebg}>
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={container}>
                <View style={styles.up}>
                <Text style={styles.titleicons}>
                <MaterialCommunityIcons name="heart-multiple" size={100} color="rgb(221,97,97)" />
                </Text>
                    <Text style={styles.title}>
                    FootBall
                    </Text>
                </View>
            <View style={styles.down}>
                <View style={styles.textInputContainer}>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Mã bài viết" 
                    value={poster}
                    onChangeText={(text) => setposter(text)}
                />
                </View>
                
                <TouchableOpacity style={styles.loginButton} onPress={() => handlingSignup()}>
                    <Text style={styles.loginButtonTitle}>XÓA BÀI VIẾT</Text>
                </TouchableOpacity>
            </View>

            </View>
            </ScrollView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {

      alignItems: 'center',
    },
    imagebg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    up: {
        flex : 3 ,
        flexDirection : 'column',
        justifyContent : 'center' ,
        alignItems : 'center',
    },
    down: {
        flex : 7 ,
        flexDirection : 'column',
        justifyContent : 'flex-start',
        alignItems : 'center',
    },
    title: {
        flexDirection : 'column',
        color : 'rgb(221,97,97)',
        textAlign : 'center',
        width : 400 ,
        fontSize : 23,
    },
    textInputContainer : {
        paddingHorizontal : 10 ,
        backgroundColor : 'rgba(255,255,255,0.3)' ,
        borderRadius: 6 ,
        marginTop : 20,
    },
    textInput: {
        width : 280,
        height : 50,
    },
    loginButton: {
        width : 300 ,
        height :45 ,
        borderRadius :6 ,
        justifyContent :'center',
        alignItems : 'center',
        backgroundColor : 'rgb(221,97,97)',
        marginTop : 20 ,
    },
    loginButtonTitle: {
      fontSize : 18,
      color : 'white',

    },
    inputStyle: {
        height: 50,
        width: 300,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titleStyle: { color: '#FFF', fontSize: 30 , marginBottom: 50},
    bigButton: {
        height: 45,
        width: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    buttonText: {
        color: '#fff',
        fontWeight: '400'
    }
});
export default SignUpScreen;