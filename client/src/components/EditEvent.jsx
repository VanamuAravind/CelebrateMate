import React, { useState } from 'react';

const EditEvent = ({ event, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        title: event.title,
        description: event.description,
        notes: event.notes,
        date: event.date,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...event, ...formData }); // Save the updated event
    };

    return (
        <div className="edit-event-page">
            <h1>Edit Event</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Notes:</label>
                    <input
                        type="text"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditEvent;