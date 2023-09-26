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
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "August 8, 2023",
      title: "Blog Post 2",
      summary:
        "This is the beginning text of the blog post. In this card it will be limited to a maximum character length of perhaps two hundred.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
          </p>
        </article>
      ),
    },
    {
      date: "January 9, 2021",
      title: "The Importance of Collective Memory",
      summary:
        "78 years 30 days passed between the day Japan bombed Pearl Harbor, and the day an armed mob stormed the U.S. Capitol.",
      body: (
        <article className="blog-body">
          <p>
            78 years 30 days passed between the day Japan bombed Pearl Harbor,
            and the day an armed mob stormed the U.S. Capitol. The average
            American lifespan is 78 years 6 months. I don’t think that’s a
            coincidence.
          </p>
          <p>
            A lifetime has passed since Americans were swept into World War 2.
            The day those bombs fell, life for millions of Americans was altered
            forever. For nearly half a million, it was cut way too short. Those
            four years shaped entire generations, yet they will soon fade from
            living memory. That’s dangerous.
          </p>
          <p>
            In the early 4th Century B.C., invaders sacked the city of Rome and
            slaughtered most of the Roman Senate. As they rebuilt, the Romans
            created an emergency fund to pay troops in the event of another
            invasion. That gold sat untouched for 350 years, until Julius Caesar
            used it to pay his troops as he seized power in Rome.
          </p>
          <p>
            The point is, having your city burned to the ground, your property
            stolen, your people slaughtered and your women raped — this left
            such a scar on the Roman psyche, they were still wary of it three
            and a half centuries later. They understood the importance of
            collective memory.
          </p>
          <p>
            Practically no Americans are left who know what it’s like to have to
            put life on hold and go clean up the mess made by a handful of evil
            demagogues who weren’t stopped in time. If there were, maybe we
            would have known better when Donald Trump came along.
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
          path: "/",
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
