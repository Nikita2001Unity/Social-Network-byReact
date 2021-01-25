import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {
    debugger;
    let dialogsElements = props.state.dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name} />);
    let messagesElements = props.state.messages.map(message => <Message message= {message.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
               {
                   messagesElements
               }
            </div>
        </div>
    )
}
export default Dialogs;