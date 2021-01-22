import s from './Post.module.css'
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBmfTeHlabFSF_jCCHQkrp5z6qmSYSlFq60Q&usqp=CAU'></img>
      <p>{props.message}</p>
      <div>
        <span>like:</span>{props.likeCount}
        <img className={s.like} src="https://www.vectorico.com/wp-content/uploads/2018/02/Like-Icon.png"></img>
      </div>
    </div>
  )
}

export default Post;