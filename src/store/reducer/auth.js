import { AuthAction } from "../action";
const initailState={}
const Auth = (state=initailState, action) => {
    switch (action.type) {
        case AuthAction.GET_USER_SUCCESS:
            return Object.assign({},state,{user:action.payload});
        case AuthAction.GET_USER_FAIL:
            return { user: null }
        default:
            return state;
    }
}
export default Auth;