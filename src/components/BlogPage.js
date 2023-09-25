import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function BlogPage({ blogPosts }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  return (
    <main className="blog-page">
      <h2>{blogPosts.toReversed()[id].title}</h2>
      <div className="date">{blogPosts.toReversed()[id].date}</div>
      {blogPosts.toReversed()[id].body}
    </main>
  );
}
