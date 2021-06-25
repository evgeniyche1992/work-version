import MessageNew from "./MessageNew";
import {connect} from "react-redux";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        txt: state.messagePage.messages,
        newMessages: state.messagePage.newMessages,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changerMessage: (newMessage) => {
            dispatch(updateMessageActionCreator(newMessage));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },

    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(MessageNew);