import { useEffect } from "react";
import UpcomingShows from "./UpcomingShows";
import BlogCard from "./BlogCard";
import about from "../media/images/about-850.webp";

export default function Home({ blogPosts, shows, setShows }) {
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
      <div className="about">
        <img
          src={about}
          className="about-pic"
          alt=""
          width="850"
          height="842"
        />
        <p className="about-text">
          Matt Jordan is a Madison, WI based writer, comedian, and show producer
          known for his dark and brazen takes. He has opened for national
          headliners Jim Norton, Chris Distefano, and also the guy next in line
          at the new Chinese Buffet on Universtiy Ave.
        </p>
      </div>
      <div className="columns">
        <section className="recent-blog">
          <h2>Recent Blog Posts</h2>
          <div className="blogs">{mapPosts()}</div>
        </section>
        <div className="divider"></div>
        <UpcomingShows shows={shows} setShows={setShows} />
      </div>
    </main>
  );
}
