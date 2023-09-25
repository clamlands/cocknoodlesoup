import { useEffect } from "react";
import BlogCard from "./BlogCard";

export default function Blog({ blogPosts }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function mapPosts() {
    return blogPosts.map((post, i) => {
      return (
        <BlogCard
          key={i}
          post={post}
          index={Math.abs(i - (blogPosts.length - 1))}
        />
      );
    });
  }
  return (
    <main>
      <h1>Blog</h1>
      <div className="blogs">{mapPosts()}</div>
    </main>
  );
}
