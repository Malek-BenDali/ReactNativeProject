import React, {useState} from 'react'
import { View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Image } from 'react-native'
import { icons, colors } from '../../constants';

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nonVisible, setNonVisible] = useState(true);

    const handleIcon = () => {
        visibility = nonVisible
        setNonVisible(!visibility)
    }


    return (
        <View
            style={styles.container}
        >

            {/*  body head section */}
            <View 
                style={styles.bodyContent}
            >
                <Text
                    style={styles.h1}
                >
                    LOG IN
                </Text>
                <Text
                    style={styles.h3}
                >
                    Good to see you again
                </Text>                
            </View>

            {/* body Form section */}
            <View 
                style={styles.FormContent}
            >

                {/* Email form */}
                <View 
                    style={styles.InputView}
                >
                    <TextInput 
                        style={styles.Input} 
                        placeholder="Your Email"
                        value={email}
                        onChangeText={text=>setEmail(text)}
                    />
                </View>
                
                {/* Password form */}
                <View 
                    style={styles.InputView}
                >
                    <TextInput 
                        style={styles.Input} 
                        placeholder="Password"
                        value={password}
                        secureTextEntry={nonVisible}
                        onChangeText={text=>setPassword(text)}
                    />
                    <TouchableOpacity 
                        style={styles.InputIcon}
                        onPress={handleIcon}
                    >
                    <Image 
                        source={nonVisible? icons.blind : icons.visible}
                        style={styles.InputIcon}
                    />
                    </TouchableOpacity>
                </View>

                {/* Sign in Button */}
                
                <TouchableOpacity
                    style={styles.SignInButton}
                    onPress={()=>navigation.navigate("Home")}
                >
                    <Text
                        style={styles.SignInText}
                    >SIGN IN
                    </Text>
                </TouchableOpacity>

                <Text>
                    Forgot your password ?
                </Text>
            
            </View>
        </View> 
    ) 
} 

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.white,
        paddingBottom : 50
    },
    bodyContent : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center',
    },
    FormContent : {
        flex : 2,
        alignItems : 'center',
        justifyContent : 'space-evenly',
    },
    h1 : {
        fontSize : 40, 
        fontWeight : "bold",
        color : colors.black
    },
    h3 : {
        fontSize : 15,
    },
    Input : {
        color: colors.black ,
        flex : 5,
        height: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    InputIcon : {
        width : 30,
        height : 30,
        tintColor : colors.primary,
        flex : 1
    },
    InputView : {
        borderWidth : 2,
        borderColor : colors.lightgray,
        flexDirection : "row",
        justifyContent:'space-between',
        alignItems:'center',
        width:"80%"
    },
    SignInButton : {
        borderRadius : 50,
        backgroundColor : colors.primary,
        width : "80%",
        height : 50,
        alignItems : 'center',
        justifyContent: 'center',        
    },
    SignInText : {
        color : colors.white,
        fontSize: 20,
        fontFamily : "Roboto"
    },
})

export default Login
