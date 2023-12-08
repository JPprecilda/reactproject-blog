import {useState} from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'FireFox', Author: 'JAYPEE', body: 'The quick brown fox', id: 1},
        {title: 'LadyFox', Author: 'SARAH', body: 'Jumps over the lazy dog', id: 2},
        {title: 'RiderFox', Author: 'JANE', body: 'Sunny day sunny morning', id: 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        console.log(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs = {blogs} title="All Blogs" handleDelete = {handleDelete}/>
        </div>
    );
}
 
export default Home;