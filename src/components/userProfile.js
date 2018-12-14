import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, Text, AsncStorage } from 'react-native';
import { View, Header, Title, Body, } from 'native-base';
import { connect } from "react-redux";
import { SignOutAction, AuthAction } from "../store/action";
const { height, width, fontScale } = Dimensions.get("window")

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    logOut=()=>{
        this.props.signOut()

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.Signout === null){        
            this.props.navigation.navigate("Login")
        }
    }
    render() {
        return (
            <View >
                <Header style={{ backgroundColor: "#479f3c", height: height / 4 }}>
                    <Body style={{ alignSelf: "flex-end", marginBottom: 20 }}>
                        <Title style={{ fontSize: fontScale * 30, fontWeight: 'bold' }} >Hello {this.props.user.name} </Title>
                    </Body>
                </Header>
                <View style={{ height: height / 0.9, justifyContent: "center", alignItems: "center" }}>

                    <TouchableOpacity onPress={() => this.logOut()}
                        style={{ width: width / 1.1, height: height / 12, borderRadius: 5, borderWidth: 1, borderColor: "#E3D4C7", justifyContent: "center", alignItems: "center", backgroundColor: "white", alignSelf: "center" }}>
                        <Text style={{ color: "red" }}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("!mpa", state)
    return {
        user: state.Auth.user,
        Signout: state.signOut.signOut
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(SignOutAction.signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
