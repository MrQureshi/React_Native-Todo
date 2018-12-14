import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View, StatusBar } from 'react-native';
import { Tab, Tabs, Text, Icon, TabHeading, Content } from 'native-base';
import Addtodo from './AddTodo'
import Todos from './Todos'
import Profile from './userProfile'
const { height, width, fontScale } = Dimensions.get('window')


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        }

    }
    render() {
        StatusBar.setBackgroundColor("#479f3c");
        return (
            <View>
                <View style={{ height: height / 1.15,  }}>
                    {this.state.value === 1 ? <Todos /> : <View />}
                    {this.state.value === 2 ? <Addtodo /> : <View />}
                    {this.state.value === 3 ? <Profile  /> : <View />}
                </View>
                <View style={{ justifyContent:'space-around', flexDirection: "row", flex: 1,  }}>
                    <TouchableOpacity onPress={() => this.setState({ value: 1 })} style={{ height: height / 10, width: "20%", justifyContent: "center", alignItems: "center", }}>
                        <Icon name="ios-list-box" style={{ color: this.state.value === 1 ? "#479f3c" : "#f2f2f2" }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ value: 2 })} style={{ height: height / 10, width: "20%", justifyContent: "center", alignItems: "center", }}>
                        <Icon name="md-add" style={{ color: this.state.value === 2 ? "#479f3c" : "#f2f2f2" }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.setState({ value: 3 })} style={{ height: height / 10, width: "20%", justifyContent: "center", alignItems: "center" }}>
                        <Icon name="ios-person" style={{ color: this.state.value === 3 ? "#479f3c" : "#f2f2f2" }} />
                    </TouchableOpacity>
                </View>
            </View>
           
        )
    }
}

export default Dashboard;
