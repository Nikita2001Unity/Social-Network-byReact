import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {
                   props.dialogsItem
                }
            </div>
            <div className={s.messages}>
               {
                   props.messageItem
               }
            </div>
        </div>
    )
}
export default Dialogs;