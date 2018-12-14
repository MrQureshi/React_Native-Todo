import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, View, Text, StatusBar, ScrollView } from 'react-native';
import { Header, Left, Right, Title, Body, List, ListItem } from 'native-base';
import moment from 'moment'

import { connect } from "react-redux";
import { TodoListAction } from "../store/action";
const { height, width, fontScale } = Dimensions.get("window")
// import Addtodo from './AddTodo'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodos: ""
        }

    }
    componentWillMount() {
        this.props.TodoList()
    }

    render() {
        StatusBar.setBackgroundColor("#479f3c");

        return (
            <View >
                <Header style={{ backgroundColor: "#479f3c", height: height / 6 }}>
                    <Body style={{ alignSelf: "flex-end", marginBottom: 20 }}>
                        <Title style={{ fontSize: fontScale * 30, fontWeight: 'bold' }} >Todos</Title>
                    </Body>
                </Header>
                <View style={{ height: height / 1.43 }} >
                    <ScrollView>
                        <List style={{ width: width / 1.1 }} >
                            {this.props.Todos && this.props.Todos.map((todo, index) => {
                                let time = todo.time
                                let currentTime = new Date().getTime();
                                return (
                                    <ListItem key={index} >
                                        <Left style={{ maxWidth: 30 }}>
                                            <View style={{ width: 15, borderRadius: 50, height: 15, backgroundColor: todo.Color }}   ></View>
                                        </Left>
                                        <Body>
                                            <Text style={{ fontSize: 17, textDecorationLine: time < currentTime ? 'line-through' : 'none' }} >{todo.todo}</Text>
                                            <Text style={{ fontSize: 12 }} note> Due {moment(time).endOf('day').fromNow()}</Text>

                                        </Body>
                                        <Right>
                                            {/* <Icon name="arrow-forward" /> */}
                                        </Right>
                                    </ListItem>
                                )
                            })
                            }
                        </List>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        Todos: state.Todolist.todolist
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        TodoList: () => dispatch(TodoListAction.TodoList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
