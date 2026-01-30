import React, { useState, useEffect } from "react";

export default function GoogleCalendarEvents({
  calendarId,
  apiKey,
  maxResults = 5,
}) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const now = new Date().toISOString();
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
          calendarId
        )}/events?key=${apiKey}&timeMin=${now}&maxResults=20&singleEvents=true&orderBy=startTime`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Filter out practice events and take first 4
        //This has been deprecated for now.
        // const filteredEvents = (data.items || [])
        //   .filter((event) => {
        //     const title = event.summary?.toLowerCase() || "";
        //     return !title.includes("practice");
        //   })
        //   .slice(0, 4);
        setEvents(data.items.slice(0,4));
      } catch (err) {
        console.error("Error fetching calendar events:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (calendarId && apiKey) {
      fetchEvents();
    }
  }, [calendarId, apiKey, maxResults]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  if (loading) {
    return (
      <div className="calendar-events">
        <div className="events-loading">
          <div className="loading-spinner"></div>
          <p>Loading upcoming events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="calendar-events">
        <div className="events-error">
          <p>Unable to load events: {error}</p>
        </div>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="calendar-events">
        <div className="events-empty">
          <p>No upcoming events scheduled.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="calendar-events">
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={event.id || index} className="event-card">
            <div className="event-date">
              {event.start?.dateTime
                ? formatDate(event.start.dateTime)
                : event.start?.date
                ? new Date(event.start.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })
                : "TBD"}
            </div>
            <div className="event-time">
              {event.start?.dateTime
                ? formatTime(event.start.dateTime)
                : event.start?.date
                ? "All Day"
                : "TBD"}
            </div>
            <h4 className="event-title">{event.summary}</h4>
            {event.location && (
              <p className="event-location">📍 {event.location}</p>
            )}
            {event.description && (
              <p className="event-description">
                {event.description.substring(0, 100)}...
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
