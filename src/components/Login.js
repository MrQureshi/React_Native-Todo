import React, { Component } from 'react';
import { View, Text, Image, Dimensions,  TouchableOpacity, StatusBar } from 'react-native';
import { Container, Content,  Item, Input,  } from 'native-base';
import { connect } from "react-redux";
import { SignUpAction, AuthAction } from "../store/action";
const { height, width, fontScale } = Dimensions.get("window")


const successImageUri = 'https://www.sketchengine.eu//wp-content/uploads/security_data.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    SignUpUser() {
        var name = this.state.name;
        if (name.length > 0) {
            this.props.SignUp(name)
         
            this.props.authUser();
            this.setState({
                name:''
            })
        }
        else {
            alert("Please Enter Your name")
        }
    }
    componentWillMount() {
        this.props.authUser();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.user) {
         
            this.props.navigation.navigate("Dashboard")
        }
    }
    render() {
        StatusBar.setBackgroundColor("#479f3c");


        return (
            <Container>
                <Content>
                    <View style={{ height: height / 1.35, justifyContent: "center", alignItems: "center" }}>
                        <Image source={{ uri: successImageUri }} style={{ width: 100, height: 100, marginBottom: 10 }} />
                        <Text style={{ fontSize: fontScale * 20, color: "black", fontWeight: 'normal' }}>Todo</Text>
                    </View>
                    <View>
                        <Item regular style={{ width: width / 1.1, height: height / 12, alignSelf: "center", borderRadius: 5, marginBottom: 10 }} >
                            <Input
                                placeholder="Name"
                                value={this.state.name}
                                onChangeText={(name) => this.setState({ name })}
                            />
                        </Item>
                        <TouchableOpacity onPress={() => this.SignUpUser()} style={{ width: width / 1.1, height: height / 12, borderRadius: 5, justifyContent: "center", alignItems: "center", backgroundColor: "#479f3c", alignSelf: "center" }}>
                            <Text style={{ color: "white" }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.Auth.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignUp: (payload) => dispatch(SignUpAction.SignUp(payload)),
        authUser: () => dispatch(AuthAction.authUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
