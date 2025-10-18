import React, { useState,useEffect } from 'react';
import {View,Text,Button,ScrollView,Alert,Image} from 'react-native';

const RegisterScreen = ({navigation}) => {
    // Se crean los parametros pai 

    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
      const isValid =
      fullname.trim() !== '' && 
      username.trim() !== '' &&
      email.trim() !== '' &&
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&     
      password == confirmPassword
      setFormValid(isValid);

}, [fullname, username, email, password, confirmPassword]);

    const handleRegister = () => {
        if (!formValid) {
            Alert.alert('Error', 'Please enter the data correctly');
            return
    }

}

    return (
        <ScrollView>
            <View>
                <Text>Register Screen</Text>
                <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
            </View>
        </ScrollView>
    );
}
export default RegisterScreen;