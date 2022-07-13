import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

function BlogList(){

    const [blogs, setBlogs] = useState([])

    const [keyword, setKeyword] = useState("frontend")
 
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything", {
            params: {
                q:  keyword,
                apiKey: "5bb3f7c3d7c049dea9425d57e5561caa",
                pageSize: 12,
            },
        })
        .then((res) => setBlogs(res.data.articles))
        .catch((err) => console.log(err))
    }, [keyword])


    const handleChange = (e)=> {
            setKeyword(e.target.value)
    }

    return (<> 
        <h1> Blog List  </h1>

        <select class="form-select" aria-label="Default select example" onChange={(e)=> handleChange(e)}  value={keyword} >
            <option selected>Open this select menu</option>
            <option value="Food">Food</option>
            <option value="Sport">Sport</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>

        </select>

        <div className="  container  row row-col-1 row-cols-md-3 g-4" > 
                {blogs.map((blog) => {
                return   <BlogCard blog={blog} />
                

                })}

        </div>
    
    
    </>)
}

export default BlogList;