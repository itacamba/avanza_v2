import React from 'react';
import "../css/Articles.css"
import HourX from "../images/test1.png"
import Blog2 from "../images/blog2.jpeg"
import Blog1 from "../images/blog1.jpeg"
import { Link} from "react-router-dom";

const Articles = () => {

    const displayedArticles = [
    {
        new: true,
        title: '3 Tips for small-business owners trying to survive COVID-19',
        readTime: '6 Min Read',
        link: 'blog_1'
    },
    {
        title: 'Does your website need to be updated?',
        readTime: '3 Min Read',
        link: 'blog_2'
    },
    {
        title: 'Your business needs a Blog, here is why.',
        readTime: '5 Min Read',
        link: 'blog_3'
    },

    ]




    return (
        <div id="articles" className="full-90">
            <div className="articles-header">
                <div className="">
                    <h5>OUR BLOG</h5>
                    <h2>Recent Articles</h2>
                    <p>Take a look at a some of our favorite blog posts.</p>
                </div>
                <div>
                    <a href="#!" className="gradient-btn">Read More</a>
                </div>
            </div>
            <div className="three-col-row">
                {displayedArticles.map((article, i) => 
                <div key={i} className="article">
                    <div className="article-text">
                        {article.new? <button className="new-article">New</button> : null}
                        <h2>{article.title}</h2>
                        <p>{article.readTime}</p>
                    </div>
                    <figure className="imghvr-slide-left">
                        {i === 0 ? 
                            <img src={HourX} alt="carla-project" />
                        : i === 1?
                            <img src={Blog1} alt="blog-2"/>
                        : i === 2?
                            <img src={Blog2} alt="blog-2"/>
                        : null}
                        <figcaption>
                            <Link to={`/${article.link}`}>READ POST</Link>
                        </figcaption>
                    </figure> 
                </div>
                )}
            </div>
        </div>
    );
};

export default Articles;