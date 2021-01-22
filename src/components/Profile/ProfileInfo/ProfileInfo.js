import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div className={s.mainPic}>
                <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;