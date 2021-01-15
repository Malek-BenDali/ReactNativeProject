import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { icons, colors } from '../../constants'

const LoginOrSignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View
                style={styles.headerLogo}
            >
                <Image 
                    source={icons.logoGold}
                    style={styles.headerImageLogo}
                />
            </View>
            <View
                style={styles.bodyContent}
            >
                <TouchableOpacity
                style={styles.SignInButton}
                onPress={()=>navigation.navigate("Login")}
                >
                    <Text
                        style={styles.SignInText}
                    >SIGN IN
                    </Text>
                </TouchableOpacity>
                <Text
                style={{fontSize : 17, color : "#000"}}
                >
                    Don't have an account ?
                </Text>
                <TouchableOpacity
                style={styles.SignUpButton}
                onPress={()=>navigation.navigate("SignUp")}
                >
                    <Text
                        style={styles.SignUpText}
                    > SIGN UP
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.SignUpButton}
                >
                    <Text
                        style={styles.SignUpText}
                    > CONTINUE AS A GUEST
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : colors.white
    },
    headerLogo : {
        flex  : 3,
        opacity : 0.8, 
        alignItems : 'center',
        justifyContent: 'center',
    },
    headerImageLogo : {
        height : 200,
        width : 200
    },
    SignInButton : {
        borderRadius : 50,
        backgroundColor : colors.primary,
        width : "70%",
        height : 50,
        marginTop : 10,
        alignItems : 'center',
        justifyContent: 'center',        
    },
    SignInText : {
        color : colors.white,
        fontSize: 20,
        fontFamily : "Roboto"
    },
    SignUpText : {
        color : colors.black,
        fontSize : 20,
        fontFamily : 'Montserrat'
    },
    SignUpButton : {
        borderRadius : 50,
        borderWidth : 2,
        borderColor: colors.primary,
        backgroundColor : colors.white,
        width : "70%",
        height : 50,
        marginTop : 10,
        alignItems : 'center',
        justifyContent: 'center', 
    },
    bodyContent : {
        flex  : 4,
        opacity : 0.8,
        alignItems : 'center',
        justifyContent: 'space-evenly',
        marginBottom: "30%"
    }

})

export default LoginOrSignUp
