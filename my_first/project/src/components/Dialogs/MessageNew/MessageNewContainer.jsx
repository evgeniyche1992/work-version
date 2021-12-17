import MessageNew from "./MessageNew";
import {connect} from "react-redux";
import {sendMessageActionCreator} from "../../../redux/dialogs-reducer";
import { getTxt } from "../../../redux/selectors";

let mapStateToProps = (state) => {
    return {
        txt: getTxt(state),
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