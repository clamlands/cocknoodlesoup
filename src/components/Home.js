import { useEffect } from "react";
import UpcomingShows from "./UpcomingShows";
import BlogCard from "./BlogCard";
import about from "../media/images/about-850.webp";

export default function Home({ blogPosts }) {
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
          Matt Jordan is a Madison, WI based comedian and gay man. He spends all
          his waking hours eating cock and noodles. This is why he wanted to
          name this website "Cunt Balls". He's opened for Jim Norton and also
          the homeless homo in the alley behind the new Chinese Buffet on
          Universtiy Ave.
        </p>
      </div>
      <div className="columns">
        <section className="recent-blog">
          <h2>Recent Blog Posts</h2>
          <div className="blogs">{mapPosts()}</div>
        </section>
        <div className="divider"></div>
        <UpcomingShows />
      </div>
    </main>
  );
}
