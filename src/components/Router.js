import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Blog from "./Blog";
import BlogPage from "./BlogPage";
import Media from "./Media";
import Contact from "./Contact";
import Nav from "./Nav/Nav";
import Footer from "./Footer";
import ErrorPage from "./ErrorPage";

export default function Router() {
  const [shows, setShows] = useState([]);
  const blogPosts = [
    {
      date: "August 8, 2024",
      title: "Blog Post 6",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna lectus. Duis a posuere lacus. Morbi tempus ante sollicitudin convallis sagittis.",
      body: (
        <article className="blog-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ac magna lectus. Duis a posuere lacus. Morbi tempus ante
            sollicitudin convallis sagittis. Aenean porttitor rutrum metus, eu
            imperdiet risus blandit quis. Proin interdum hendrerit tellus ac
            sollicitudin. Vivamus non lectus enim. Suspendisse potenti. Aenean
            facilisis odio urna, vel aliquam magna blandit sed. Quisque turpis
            enim, efficitur ac posuere sit amet, feugiat id nulla. Integer
            sodales porttitor purus at hendrerit.
          </p>
          <p>
            Curabitur a nunc et ligula tincidunt congue. Vivamus quis congue
            diam, at vehicula dui. Sed id augue a risus mattis bibendum in sit
            amet est. Aenean vel egestas mi. Mauris eget sapien at ante
            consequat rhoncus. Vivamus efficitur ultricies sem, ac finibus magna
            bibendum vitae. Pellentesque at orci ipsum. Vivamus at massa dui.
            Vestibulum maximus condimentum libero, tempus condimentum tellus
            tempus at. Duis vel vestibulum nunc, vel maximus lacus. Quisque
            consectetur nunc sit amet eros feugiat rhoncus.
          </p>
          <p>
            Nunc vitae ante euismod, ullamcorper tellus eget, tincidunt elit.
            Suspendisse non dui id lectus blandit euismod non vitae quam. Ut
            tempus dapibus ornare. Morbi molestie quam nisi, lacinia faucibus
            diam suscipit at. Fusce feugiat pharetra turpis, a porttitor lectus
            porta non. Aenean in odio nisi. In ac dapibus dui. Nunc consectetur
            nibh in consectetur sagittis. Nunc viverra mollis tellus sed
            consectetur. Etiam sit amet ligula sit amet magna elementum faucibus
            non at erat. Donec sagittis, libero vel scelerisque rutrum, nibh
            ligula tempor lorem, a luctus massa sapien sed erat. Vivamus gravida
            nibh vitae ultricies feugiat.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2024",
      title: "Blog Post 5",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna lectus.",
      body: (
        <article className="blog-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ac magna lectus. Duis a posuere lacus. Morbi tempus ante
            sollicitudin convallis sagittis. Aenean porttitor rutrum metus, eu
            imperdiet risus blandit quis. Proin interdum hendrerit tellus ac
            sollicitudin. Vivamus non lectus enim. Suspendisse potenti. Aenean
            facilisis odio urna, vel aliquam magna blandit sed. Quisque turpis
            enim, efficitur ac posuere sit amet, feugiat id nulla. Integer
            sodales porttitor purus at hendrerit.
          </p>
          <p>
            Curabitur a nunc et ligula tincidunt congue. Vivamus quis congue
            diam, at vehicula dui. Sed id augue a risus mattis bibendum in sit
            amet est. Aenean vel egestas mi. Mauris eget sapien at ante
            consequat rhoncus. Vivamus efficitur ultricies sem, ac finibus magna
            bibendum vitae. Pellentesque at orci ipsum. Vivamus at massa dui.
            Vestibulum maximus condimentum libero, tempus condimentum tellus
            tempus at. Duis vel vestibulum nunc, vel maximus lacus. Quisque
            consectetur nunc sit amet eros feugiat rhoncus.
          </p>
          <p>
            Nunc vitae ante euismod, ullamcorper tellus eget, tincidunt elit.
            Suspendisse non dui id lectus blandit euismod non vitae quam. Ut
            tempus dapibus ornare. Morbi molestie quam nisi, lacinia faucibus
            diam suscipit at. Fusce feugiat pharetra turpis, a porttitor lectus
            porta non. Aenean in odio nisi. In ac dapibus dui. Nunc consectetur
            nibh in consectetur sagittis. Nunc viverra mollis tellus sed
            consectetur. Etiam sit amet ligula sit amet magna elementum faucibus
            non at erat. Donec sagittis, libero vel scelerisque rutrum, nibh
            ligula tempor lorem, a luctus massa sapien sed erat. Vivamus gravida
            nibh vitae ultricies feugiat.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2024",
      title: "Blog Post 4",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna lectus.",
      body: (
        <article className="blog-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ac magna lectus. Duis a posuere lacus. Morbi tempus ante
            sollicitudin convallis sagittis. Aenean porttitor rutrum metus, eu
            imperdiet risus blandit quis. Proin interdum hendrerit tellus ac
            sollicitudin. Vivamus non lectus enim. Suspendisse potenti. Aenean
            facilisis odio urna, vel aliquam magna blandit sed. Quisque turpis
            enim, efficitur ac posuere sit amet, feugiat id nulla. Integer
            sodales porttitor purus at hendrerit.
          </p>
          <p>
            Curabitur a nunc et ligula tincidunt congue. Vivamus quis congue
            diam, at vehicula dui. Sed id augue a risus mattis bibendum in sit
            amet est. Aenean vel egestas mi. Mauris eget sapien at ante
            consequat rhoncus. Vivamus efficitur ultricies sem, ac finibus magna
            bibendum vitae. Pellentesque at orci ipsum. Vivamus at massa dui.
            Vestibulum maximus condimentum libero, tempus condimentum tellus
            tempus at. Duis vel vestibulum nunc, vel maximus lacus. Quisque
            consectetur nunc sit amet eros feugiat rhoncus.
          </p>
          <p>
            Nunc vitae ante euismod, ullamcorper tellus eget, tincidunt elit.
            Suspendisse non dui id lectus blandit euismod non vitae quam. Ut
            tempus dapibus ornare. Morbi molestie quam nisi, lacinia faucibus
            diam suscipit at. Fusce feugiat pharetra turpis, a porttitor lectus
            porta non. Aenean in odio nisi. In ac dapibus dui. Nunc consectetur
            nibh in consectetur sagittis. Nunc viverra mollis tellus sed
            consectetur. Etiam sit amet ligula sit amet magna elementum faucibus
            non at erat. Donec sagittis, libero vel scelerisque rutrum, nibh
            ligula tempor lorem, a luctus massa sapien sed erat. Vivamus gravida
            nibh vitae ultricies feugiat.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2024",
      title: "Blog Post 3",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna lectus.",
      body: (
        <article className="blog-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ac magna lectus. Duis a posuere lacus. Morbi tempus ante
            sollicitudin convallis sagittis. Aenean porttitor rutrum metus, eu
            imperdiet risus blandit quis. Proin interdum hendrerit tellus ac
            sollicitudin. Vivamus non lectus enim. Suspendisse potenti. Aenean
            facilisis odio urna, vel aliquam magna blandit sed. Quisque turpis
            enim, efficitur ac posuere sit amet, feugiat id nulla. Integer
            sodales porttitor purus at hendrerit.
          </p>
          <p>
            Curabitur a nunc et ligula tincidunt congue. Vivamus quis congue
            diam, at vehicula dui. Sed id augue a risus mattis bibendum in sit
            amet est. Aenean vel egestas mi. Mauris eget sapien at ante
            consequat rhoncus. Vivamus efficitur ultricies sem, ac finibus magna
            bibendum vitae. Pellentesque at orci ipsum. Vivamus at massa dui.
            Vestibulum maximus condimentum libero, tempus condimentum tellus
            tempus at. Duis vel vestibulum nunc, vel maximus lacus. Quisque
            consectetur nunc sit amet eros feugiat rhoncus.
          </p>
          <p>
            Nunc vitae ante euismod, ullamcorper tellus eget, tincidunt elit.
            Suspendisse non dui id lectus blandit euismod non vitae quam. Ut
            tempus dapibus ornare. Morbi molestie quam nisi, lacinia faucibus
            diam suscipit at. Fusce feugiat pharetra turpis, a porttitor lectus
            porta non. Aenean in odio nisi. In ac dapibus dui. Nunc consectetur
            nibh in consectetur sagittis. Nunc viverra mollis tellus sed
            consectetur. Etiam sit amet ligula sit amet magna elementum faucibus
            non at erat. Donec sagittis, libero vel scelerisque rutrum, nibh
            ligula tempor lorem, a luctus massa sapien sed erat. Vivamus gravida
            nibh vitae ultricies feugiat.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2024",
      title: "Blog Post 2",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna lectus.",
      body: (
        <article className="blog-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ac magna lectus. Duis a posuere lacus. Morbi tempus ante
            sollicitudin convallis sagittis. Aenean porttitor rutrum metus, eu
            imperdiet risus blandit quis. Proin interdum hendrerit tellus ac
            sollicitudin. Vivamus non lectus enim. Suspendisse potenti. Aenean
            facilisis odio urna, vel aliquam magna blandit sed. Quisque turpis
            enim, efficitur ac posuere sit amet, feugiat id nulla. Integer
            sodales porttitor purus at hendrerit.
          </p>
          <p>
            Curabitur a nunc et ligula tincidunt congue. Vivamus quis congue
            diam, at vehicula dui. Sed id augue a risus mattis bibendum in sit
            amet est. Aenean vel egestas mi. Mauris eget sapien at ante
            consequat rhoncus. Vivamus efficitur ultricies sem, ac finibus magna
            bibendum vitae. Pellentesque at orci ipsum. Vivamus at massa dui.
            Vestibulum maximus condimentum libero, tempus condimentum tellus
            tempus at. Duis vel vestibulum nunc, vel maximus lacus. Quisque
            consectetur nunc sit amet eros feugiat rhoncus.
          </p>
          <p>
            Nunc vitae ante euismod, ullamcorper tellus eget, tincidunt elit.
            Suspendisse non dui id lectus blandit euismod non vitae quam. Ut
            tempus dapibus ornare. Morbi molestie quam nisi, lacinia faucibus
            diam suscipit at. Fusce feugiat pharetra turpis, a porttitor lectus
            porta non. Aenean in odio nisi. In ac dapibus dui. Nunc consectetur
            nibh in consectetur sagittis. Nunc viverra mollis tellus sed
            consectetur. Etiam sit amet ligula sit amet magna elementum faucibus
            non at erat. Donec sagittis, libero vel scelerisque rutrum, nibh
            ligula tempor lorem, a luctus massa sapien sed erat. Vivamus gravida
            nibh vitae ultricies feugiat.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2024",
      title: "Blog Post 1",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac magna lectus.",
      body: (
        <article className="blog-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ac magna lectus. Duis a posuere lacus. Morbi tempus ante
            sollicitudin convallis sagittis. Aenean porttitor rutrum metus, eu
            imperdiet risus blandit quis. Proin interdum hendrerit tellus ac
            sollicitudin. Vivamus non lectus enim. Suspendisse potenti. Aenean
            facilisis odio urna, vel aliquam magna blandit sed. Quisque turpis
            enim, efficitur ac posuere sit amet, feugiat id nulla. Integer
            sodales porttitor purus at hendrerit.
          </p>
          <p>
            Curabitur a nunc et ligula tincidunt congue. Vivamus quis congue
            diam, at vehicula dui. Sed id augue a risus mattis bibendum in sit
            amet est. Aenean vel egestas mi. Mauris eget sapien at ante
            consequat rhoncus. Vivamus efficitur ultricies sem, ac finibus magna
            bibendum vitae. Pellentesque at orci ipsum. Vivamus at massa dui.
            Vestibulum maximus condimentum libero, tempus condimentum tellus
            tempus at. Duis vel vestibulum nunc, vel maximus lacus. Quisque
            consectetur nunc sit amet eros feugiat rhoncus.
          </p>
          <p>
            Nunc vitae ante euismod, ullamcorper tellus eget, tincidunt elit.
            Suspendisse non dui id lectus blandit euismod non vitae quam. Ut
            tempus dapibus ornare. Morbi molestie quam nisi, lacinia faucibus
            diam suscipit at. Fusce feugiat pharetra turpis, a porttitor lectus
            porta non. Aenean in odio nisi. In ac dapibus dui. Nunc consectetur
            nibh in consectetur sagittis. Nunc viverra mollis tellus sed
            consectetur. Etiam sit amet ligula sit amet magna elementum faucibus
            non at erat. Donec sagittis, libero vel scelerisque rutrum, nibh
            ligula tempor lorem, a luctus massa sapien sed erat. Vivamus gravida
            nibh vitae ultricies feugiat.
          </p>
        </article>
      ),
    },
  ];
  const router = createBrowserRouter([
    {
      element: <Nav />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/cocknoodlesoup",
          element: (
            <Home
              blogPosts={blogPosts.slice(0, 5)}
              shows={shows}
              setShows={setShows}
            />
          ),
        },
        {
          path: "/blog",
          element: <Blog blogPosts={blogPosts} />,
        },
        {
          path: "/blog/:id",
          element: <BlogPage blogPosts={blogPosts} />,
        },
        {
          path: "/media",
          element: <Media />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}
