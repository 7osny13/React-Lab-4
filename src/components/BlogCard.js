function BlogCard({blog: {urlToImage, title, description}}){






    return (
        <div className="card h-100">
            <div className="card-header">{title}</div>
            <img src={urlToImage} className="card-img-top" />
            <div className="card-body">
                
                <p className="card-text">{description}</p>
                {/* <Link to={`user-details/${id}`} className="btn btn-primary">Go somewhere</Link> */}
        </div>
        </div>
    )
}

export  default BlogCard 