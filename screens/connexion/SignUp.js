import React, {useState} from 'react'
import { View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Image } from 'react-native'
import { icons, colors } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignUp = ({navigation}) => {

    const [User, setUser] = useState({
        username : '',
        email : '',
        password1 : '',
        password2 : '',
    })
    const { username, email, password1, password2 } = User
    const [nonVisiblePassword1, setNonVisiblePassword1] = useState(true);
    const [nonVisiblePassword2, setNonVisiblePassword2] = useState(true);

    const handleUpdate = key =>( 
        value => {
            setUser({...User,[key] : value})
        }
    )

    const handleIconPassword1 = () => {
        visibility = nonVisiblePassword1
        setNonVisiblePassword1(!visibility)
    }
    const handleIconPassword2 = () => {
        visibility = nonVisiblePassword2
        setNonVisiblePassword2(!visibility)
    }


    return (
        <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            extraScrollHeight={-120}
            enableOnAndroid
            
        >

            {/*  body head section */}
            <View 
                style={styles.bodyContent}
            >
                <Text
                    style={styles.h1}
                >
                    SIGN UP
                </Text>
                <Text
                    style={styles.h3}

                >
                    Nice to meet you
                </Text>                
            </View>

            {/* body Form section */}
            <View 
                style={styles.FormContent}
            >

                {/* UserName form */}
                <View 
                    style={styles.InputView}
                >
                    <TextInput 
                        style={styles.Input} 
                        placeholder="User name"
                        value={username}
                        onChangeText={handleUpdate('username')}
                    />
                </View>

                {/* Email form */}
                <View 
                    style={styles.InputView}
                >
                    <TextInput 
                        style={styles.Input} 
                        placeholder="Your Email"
                        value={email}
                        onChangeText={handleUpdate('email')}
                    />
                </View>
                
                {/* Password1 form */}
                <View 
                    style={styles.InputView}
                >
                    <TextInput 
                        style={styles.Input} 
                        placeholder="Password"
                        value={password1}
                        secureTextEntry={nonVisiblePassword1}
                        onChangeText={handleUpdate('password1')}
                    />
                    <TouchableOpacity 
                        style={styles.InputIcon}
                        onPress={handleIconPassword1}
                    >
                    <Image 
                        source={nonVisiblePassword1? icons.blind : icons.visible}
                        style={styles.InputIcon}
                    />
                    </TouchableOpacity>
                </View>

                {/* Password2 form */}
                <View 
                    style={styles.InputView}
                >
                    <TextInput 
                        style={styles.Input} 
                        placeholder="Confirm Password"
                        value={password2}
                        secureTextEntry={nonVisiblePassword2}
                        onChangeText={handleUpdate('password2')}
                    />
                    <TouchableOpacity 
                        style={styles.InputIcon}
                        onPress={handleIconPassword2}
                    >
                    <Image 
                        source={nonVisiblePassword2? icons.blind : icons.visible}
                        style={styles.InputIcon}
                    />
                    </TouchableOpacity>
                </View>

                {/* Sign in Button */}
                
                <TouchableOpacity
                    style={styles.SignInButton}
                    onPress={()=>navigation.navigate("Login")}
                >
                    <Text
                        style={styles.SignInText}
                    >SIGN Up
                    </Text>
                </TouchableOpacity>

                <Text>
                    You Have already an account ?
                </Text>
            
            </View>
        </KeyboardAwareScrollView> 
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

export default SignUp
