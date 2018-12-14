import React, { Component } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { View, Header, Item, Text, Textarea, Title, Body, DatePicker } from 'native-base';
import { connect } from "react-redux";
import {TodoAction } from "../store/action";
const { height, width, fontScale } = Dimensions.get("window")

class Addtodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todo: '',
            colorArray:['#4a90e2','#dff4c7','#f3bfc5','#eec3f7','#fbe7c8'],
            chosenDate: new Date(),
            selectedColor: ''
        };
        this.setDate = this.setDate.bind(this);
    }
    setDate(newDate) {
        let date = newDate.getTime()

        this.setState({ chosenDate: date });
    }
    selectColor(index, color){
        this.setState({
           
        })
    }
    AddTodo() {
        var {Todo, chosenDate, selectedColor} = this.state;  
        if (Todo.length > 0 && chosenDate!==null && selectedColor.length > 0) {
            let obj={
                todo:Todo,
                time:chosenDate,
                Color: selectedColor
            }
            this.props.Todo(obj)

            this.setState({
                Todo:'',
                selectedColor: '',
                chosenDate: new Date(),
            })
        }
        else{
            alert("Required")
        }
    }
    render() {
        return (
            <View >
                <Header style={{ backgroundColor: "#479f3c", height: height / 6 }}>
                    <Body style={{ alignSelf: "flex-end", marginBottom: 20 }}>
                        <Title style={{ fontSize: fontScale * 30, fontWeight: 'bold' }} >Add</Title>
                    </Body>
                </Header>
                <View>
                    <Textarea style={{ width: width / 1.1, alignSelf: "center", borderRadius: 5, marginBottom: 10, fontWeight: "bold" }} rowSpan={5} bordered
                        value={this.state.Todo}
                        onChangeText={(Todo) => this.setState({ Todo })}
                        placeholder="When do you need to do?" placeholderTextColor="#d3d3d3" />
                    <Item regular style={{ width: width / 1.1, height: height / 12, alignSelf: "center", borderRadius: 5, marginBottom: 10 }} >

                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date()}
                            // maximumDate={new Date(2018, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "black" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            
                        />
                    </Item>
                    
                    <View style={{height:height/6,justifyContent:"center",alignItems:"center"}}>
                        <View style={{justifyContent:"space-around" , flexDirection:"row",height:"100%",width:"100%"}}>
                        {this.state.colorArray.map((color,index)=>{
                            
                            return (
                                <TouchableOpacity  onPress={()=> this.setState({ selectedColor: color})} key={index}
                                   
                                style={ { height:50, width:50,paddingLeft:10 , borderRadius:50, backgroundColor:color,borderWidth:this.state.selectedColor===color? 2:0,borderColor:'#479f3c' }}/>
                            )
                        })}
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.AddTodo()} style={{ width: width / 1.1, height: height / 12, borderRadius: 5, justifyContent: "center", alignItems: "center", backgroundColor: "#479f3c", alignSelf: "center" }}>
                        <Text style={{ color: "white" }}>Add Todo</Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         user: state.Auth.user
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        Todo: (payload) => dispatch( TodoAction.Todo(payload))
    }
}
export default connect(null, mapDispatchToProps)(Addtodo);
