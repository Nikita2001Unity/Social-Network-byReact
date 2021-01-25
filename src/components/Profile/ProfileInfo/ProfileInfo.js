import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div className={s.mainPic}>
                {/* <img src="https://png.pngtree.com/thumb_back/fw800/background/20190828/pngtree-dark-gray-wooden-planks-panel-background-image_310040.jpg"></img> */}
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;