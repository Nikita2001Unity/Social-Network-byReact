import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {
  
  return (
    <div className={s.postsBlock}>
      My post
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
          <button>Remove</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.posts}
      </div>
    </div>
  )
}

export default MyPosts;