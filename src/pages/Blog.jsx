
import { Link } from 'react-router-dom'
import Post from '../components/Post'

const Blog = () => {
  return (
    <div className="blog-wrapper max-w-screen-2xl mx-auto grid md:grid-cols-4 gap-10">
      <Link to="/create-blog">Create Blog</Link>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Blog
