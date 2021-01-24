import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {
  let posts = props.posts.map(post => <Post message={post.post} likeCount= {post.likesCount} />)
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
        {posts}
      </div>
    </div>
  )
}

export default MyPosts;