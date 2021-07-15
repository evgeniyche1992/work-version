import MessageNew from "./MessageNew";
import {connect} from "react-redux";
import {sendMessageActionCreator} from "../../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        txt: state.messagePage.messages,
           }
}
let mapDispatchToProps = (dispatch) => {
    return {
             sendMessage: (newMessage) => {
            dispatch(sendMessageActionCreator(newMessage));
        },

    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(MessageNew);