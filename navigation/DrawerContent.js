import React from 'react'

import {
    View,
    Image, 
    StyleSheet 
} from 'react-native'

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import {User} from '../Data/User'

import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from 'react-native-paper'

import {colors, icons} from '../constants'

export function DrawerContent(props) {
    return(
        <View 
            style={styles.drawerContent}
        >
            <DrawerContentScrollView {...props} >
                <View 
                    style={styles.drawerContent} 
                >
                    <View
                        style={styles.userInfoSection}
                    >
                        <View
                            style={styles.row}
                        >
                            <Avatar.Image 
                                source={User.image}
                                size={50}
                            />
                            <View
                                style={{marginLeft : 15}}
                            >
                                <Title
                                    style={styles.title}
                                > 
                                    {User.name} 
                                </Title>
                                <Caption
                                    style={styles.caption}
                                > 
                                    {User.caption} 
                                </Caption>
                            </View>
                        </View>
                        <View
                            style={styles.UserDetail}
                        >
                            <View 
                            style={styles.section}
                            >
                                <Paragraph
                                    style={[styles.paragraph, styles.caption]}
                                >
                                    {User.following}
                                </Paragraph>
                                <Caption style={styles.caption}>
                                    Following
                                </Caption>
                            </View>
                            <View 
                                style={styles.section}
                            >
                                <Paragraph
                                    style={[styles.paragraph, styles.caption]}
                                >
                                    {User.followers}k
                                </Paragraph>
                                <Caption style={styles.caption}>
                                    Followers
                                </Caption>
                            </View>

                        </View>
                    </View>
                    <Drawer.Section
                        style={styles.drawerSection}
                    >
                        <DrawerItem
                            label="Home"
                            icon={()=> (
                                <Image 
                                     source={icons.home}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>props.navigation.navigate('Home')}
                        />
                        <DrawerItem
                            label="Orders"
                            icon={()=> (
                                <Image 
                                     source={icons.orders}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem
                            label="Favorite"
                            icon={()=> (
                                <Image 
                                     source={icons.like}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem
                            label="Occasion"
                            icon={()=> (
                                <Image 
                                     source={icons.occasion}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem
                            label="Recipe Book"
                            icon={()=> (
                                <Image 
                                     source={icons.book}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem
                            label="Shopping List"
                            icon={()=> (
                                <Image 
                                     source={icons.shopping}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem
                            label="Network"
                            icon={()=> (
                                <Image 
                                     source={icons.network}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem
                            label="Language"
                            icon={()=> (
                                <Image 
                                     source={icons.language}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem
                            label="Leagl"
                            icon={()=> (
                                <Image 
                                     source={icons.leagl}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem
                            label="Customer Service"
                            icon={()=> (
                                <Image 
                                     source={icons.customer_service}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>{}}
                        />
                        <DrawerItem
                            label="Newsletter"
                            icon={()=> (
                                <Image 
                                     source={icons.newsletter}
                                     style={styles.iconLink}
                                /> 
                            )}
                            onPress={()=>{}}
                        />
                            
                        
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section
                style={styles.bottomDrawerSection}
                {...props}
            >
                <DrawerItem
                    icon={()=> (
                       <Image 
                            source={icons.settings}
                            style={styles.bottomIcon}
                       /> 
                    )}
                    label="Settings"
                    onPress={()=>{}}
                />
                <DrawerItem
                    icon={()=> (
                       <Image 
                            source={icons.signOut}
                            style={styles.bottomIcon}
                       /> 
                    )}
                    label="Sign Out"
                    onPress={()=>props.navigation.navigate('Login')}
                />
            </Drawer.Section>
        </View>
    )
    
}

const styles = StyleSheet.create({
    drawerContent : {
        flex : 1
    },
    userInfoSection : {
        paddingLeft : 20,
        borderBottomWidth : 1,
        borderColor : colors.black,
        paddingBottom : 20
    },
    title : {
        fontSize : 16,
        marginTop : 3,
        fontWeight: 'bold'
    },
    caption : {
        fontSize : 14,
        lineHeight : 14,
    },
    UserDetail : {
        marginTop : 20,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },
    row : {
        marginTop : 20,
        flexDirection : 'row',
        alignItems : 'center',
    },
    section : {
        flexDirection : 'row',
        alignItems : 'center',
        marginRight : 15,
    },
    paragraph : {
        fontWeight : 'bold',
        marginRight : 3
    },
    drawerSection : {
        marginVertical : 10
    },
    bottomDrawerSection : {
        marginBottom : 15,
        borderTopColor : '#f4f4f4',
        borderTopWidth : 1
    },
    preference : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingVertical : 12,
        paddingHorizontal : 16,
    },
    iconLink : {
        height: 20,
        width : 20,
        tintColor : colors.primary
    },
    bottomIcon : {
        height: 20,
        width : 20,
        tintColor : colors.black
    },
})