import { Link } from "react-router-dom";

export default function BlogCard({ post, index }) {
  const blogLink = `/blog/${index}`;
  return (
    <div className="blog-card">
      <h3>
        <Link to={blogLink} className="no-underline">
          {post.title}
        </Link>
      </h3>
      <div className="date">{post.date}</div>
      <p>
        <Link to={blogLink} className="no-underline">
          {post.summary}
        </Link>
      </p>
      <Link to={blogLink} className="continue">
        Continue Reading →
      </Link>
      <div className="tags"></div>
    </div>
  );
}
