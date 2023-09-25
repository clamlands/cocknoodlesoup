import { useEffect, useState } from "react";

export default function UpcomingShows() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function getCalendar() {
      let today = new Date().toISOString();
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/7tnqiq0fs0ah8fsbkhaak9vgnc@group.calendar.google.com/events?key=AIzaSyB5ivZJt1bTKq603mx5-JEAAJCJ39O4VUE&timeMin=${today}&singleEvents=True&orderBy=startTime`
        //`https://www.googleapis.com/calendar/v3/calendars/e91b4cee8a0f2a936977d28e501524d09acdf7a49e96cf72d3480fd7731b515f@group.calendar.google.com/events?key=AIzaSyAc_spvH8Ijkc7Jwzv9aztEXM94cW8ImVI&timeMin=${today}&singleEvents=True&orderBy=startTime`
      );
      const showsData = await response.json();
      setShows(showsData.items);
    }
    getCalendar();
  }, []);

  function mapItems() {
    return shows.map((item, i) => {
      return (
        <div key={i} className="show">
          {item.start.dateTime && (
            <div className="time">{convertDate(item.start.dateTime)}</div>
          )}
          {item.summary && <h3 className="summary">{item.summary}</h3>}
          {item.location && (
            <div>{item.location.substring(0, item.location.length - 11)}</div>
          )}
        </div>
      );
    });
  }

  function convertDate(date) {
    const newDate = new Date(date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let time = newDate.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    //remove the space between "PM" and the time and make it lowercase
    time = time.replace(/\s/g, "");
    time = time.toLowerCase();

    const day = newDate.getDate();
    const month = monthNames[newDate.getMonth()];
    const year = newDate.getFullYear();

    return `${month} ${day}, ${year}, ${time}`;
  }

  return (
    <section className="shows">
      <h2>Upcoming Shows</h2>
      {shows.length ? mapItems() : ""}
    </section>
  );
}
