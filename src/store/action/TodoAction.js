import { AsyncStorage } from "react-native";
export default class TodoAction {
    static TODO = "TODO";
    static Todo = (payload) => {
        
        return () => {


            AsyncStorage.getItem('todos').then(res => {
                if (res !== null) {
                    let newPayload = JSON.parse(res)
                    newPayload.push(payload)

                    AsyncStorage.setItem('todos', JSON.stringify(newPayload))
                    
                } else {
                    AsyncStorage.setItem('todos', JSON.stringify([payload]))
                }
            })

        }
    }
}