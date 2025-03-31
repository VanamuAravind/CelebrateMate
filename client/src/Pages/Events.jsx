import React, { useState } from 'react';
import './Events.css';
import EditEvent from '../components/EditEvent';

const Events = () => {
    const [events, setEvents] = useState([
        {
            id: 1,
            title: 'National Seminar',
            description: 'A seminar on national development strategies.',
            notes: 'Bring your ID card.',
            date: 'Wed, Dec 17, 2025',
        },
        {
            id: 2,
            title: 'Digital Marketing Summit',
            description: 'Learn the latest trends in digital marketing.',
            notes: 'Lunch will be provided.',
            date: 'Thu, Dec 18, 2025',
        },
        {
            id: 3,
            title: 'PHP Advanced Learning',
            description: 'Master advanced PHP techniques.',
            notes: 'Bring your laptop.',
            date: 'Fri, Dec 19, 2025',
        },
        {
            id: 4,
            title: 'Corona Awareness Event',
            description: 'Awareness program on COVID-19 precautions.',
            notes: 'Masks are mandatory.',
            date: 'Sat, Dec 20, 2025',
        },
        {
            id: 5,
            title: 'AI and Machine Learning Workshop',
            description: 'Hands-on workshop on AI and ML techniques.',
            notes: 'Pre-registration required.',
            date: 'Mon, Jan 5, 2026',
        },
        {
            id: 6,
            title: 'Blockchain Conference',
            description: 'Explore the future of blockchain technology.',
            notes: 'Free entry for students.',
            date: 'Tue, Jan 6, 2026',
        },
        {
            id: 7,
            title: 'Cybersecurity Awareness Program',
            description: 'Learn how to protect yourself online.',
            notes: 'Open to all.',
            date: 'Wed, Jan 7, 2026',
        },
        {
            id: 8,
            title: 'Startup Pitch Event',
            description: 'Pitch your startup ideas to investors.',
            notes: 'Submit your pitch deck in advance.',
            date: 'Thu, Jan 8, 2026',
        },
        {
            id: 9,
            title: 'Health and Wellness Fair',
            description: 'A fair promoting health and wellness.',
            notes: 'Free health checkups available.',
            date: 'Fri, Jan 9, 2026',
        },
        {
            id: 10,
            title: 'Photography Contest',
            description: 'Showcase your photography skills.',
            notes: 'Submit your entries by Jan 5.',
            date: 'Sat, Jan 10, 2026',
        },
        {
            id: 11,
            title: 'Coding Hackathon',
            description: 'Compete in a 24-hour coding challenge.',
            notes: 'Team registration required.',
            date: 'Sun, Jan 11, 2026',
        },
        {
            id: 12,
            title: 'Art Exhibition',
            description: 'Display of artwork by local artists.',
            notes: 'Open to the public.',
            date: 'Mon, Jan 12, 2026',
        },
        {
            id: 13,
            title: 'Music Festival',
            description: 'Live performances by various artists.',
            notes: 'Tickets available online.',
            date: 'Tue, Jan 13, 2026',
        },
        {
            id: 14,
            title: 'Book Fair',
            description: 'Explore a wide range of books and authors.',
            notes: 'Discounts on bulk purchases.',
            date: 'Wed, Jan 14, 2026',
        },
        {
            id: 15,
            title: 'Yoga and Meditation Workshop',
            description: 'Learn yoga and meditation techniques.',
            notes: 'Bring your yoga mat.',
            date: 'Thu, Jan 15, 2026',
        },
        {
            id: 16,
            title: 'Science Exhibition',
            description: 'Showcase of innovative science projects.',
            notes: 'Open to schools and colleges.',
            date: 'Fri, Jan 16, 2026',
        },
        {
            id: 17,
            title: 'Career Guidance Seminar',
            description: 'Get career advice from industry experts.',
            notes: 'Bring your resume.',
            date: 'Sat, Jan 17, 2026',
        },
        {
            id: 18,
            title: 'Food Festival',
            description: 'Taste cuisines from around the world.',
            notes: 'Entry fee applies.',
            date: 'Sun, Jan 18, 2026',
        },
        {
            id: 19,
            title: 'Robotics Workshop',
            description: 'Build and program your own robot.',
            notes: 'Limited seats available.',
            date: 'Mon, Jan 19, 2026',
        },
        {
            id: 20,
            title: 'Film Screening',
            description: 'Watch award-winning short films.',
            notes: 'Snacks will be provided.',
            date: 'Tue, Jan 20, 2026',
        },
    ]);

    const [editingEvent, setEditingEvent] = useState(null);

    const [expandedEventId, setExpandedEventId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedEventId(expandedEventId === id ? null : id);
    };

    const deleteEvent = (id) => {
        const updatedEvents = events.filter((event) => event.id !== id);
        setEvents(updatedEvents);
    };

    const handleEdit = (event) => {
        setEditingEvent(event);
    };

    const handleSave = (updatedEvent) => {
        setEvents((prevEvents) =>
            prevEvents.map((event) =>
                event.id === updatedEvent.id ? updatedEvent : event
            )
        );
        setEditingEvent(null);
    };

    if (editingEvent) {
        return <EditEvent event={editingEvent} onSave={handleSave} onCancel={() => setEditingEvent(null)} />;
    }

    return (
        <div className="events-page">
            <h1 className="events-title">Events</h1>
            {expandedEventId === null && (
                <div className="events-headings">
                    <div className="heading-title">Title</div>
                    <div className="heading-description">Description</div>
                    <div className="heading-notes">Notes</div>
                    <div className="heading-date">Date</div>
                </div>
            )}
            <div className="events-list">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className={`event-card ${expandedEventId === event.id ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(event.id)}
                    >
                        {expandedEventId === event.id ? (
                            <div className="event-expanded-details">
                                <p className="expanded-title"><strong>Title:</strong> {event.title}</p>
                                <p className="expanded-description"><strong>Description:</strong> {event.description}</p>
                                <p className="expanded-notes"><strong>Notes:</strong> {event.notes}</p>
                                <p className="expanded-date"><strong>Date:</strong> {event.date}</p>
                            </div>
                        ) : (
                            <div>
                                <div className="event-details">
                                    <div className="event-title-container">
                                        <h2 className="event-title">{event.title}</h2>
                                    </div>
                                    <div className="event-description-container">
                                        <p className="event-description">{event.description}</p>
                                    </div>
                                    <div className="event-notes-container">
                                        <p className="event-notes"><strong>Notes:</strong> {event.notes}</p>
                                    </div>
                                    <div className="event-date">
                                        <p><strong>Date:</strong> {event.date}</p>
                                    </div>
                                </div>
                                <div className="event-buttons">
                                    <input
                                        type="button"
                                        value="Edit"
                                        className="edit-event-button"
                                        onClick={() => handleEdit(event)} // Set the event to be edited
                                    />
                                    <input
                                        type="button"
                                        value="Delete"
                                        className="delete-event-button"
                                        onClick={() =>
                                            setEvents(events.filter((ev) => ev.id !== event.id))
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;