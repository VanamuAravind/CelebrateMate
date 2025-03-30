import React from 'react';
import '../Pages/Friends.css';
import empty_profile_pic from '../images/empty_profile_pic.png';

const FriendTile = ({ friend }) => {
    const calculateDaysToBirthday = (dateOfBirth) => {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        const nextBirthday = new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    
        // If the birthday this year has already passed, calculate for next year
        if (nextBirthday < today) {
            nextBirthday.setFullYear(today.getFullYear() + 1);
        }
    
        const diffInTime = nextBirthday - today;
        let daysAway = Math.ceil(diffInTime / (1000 * 60 * 60 * 24));
        let metric = 'days';
    
        // Additional condition: If the birthday is today
        if (daysAway === 0) {
            return { daysAway: '', metric: "Today is the birthday!" };
        }
    
        // If the birthday is within the next week
        if (daysAway < 7) {
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayOfWeek = nextBirthday.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
            return { daysAway: '', metric: `Next ${daysOfWeek[dayOfWeek]}` };
        }
    
        // If the days away is greater than 30, convert to months
        if (daysAway > 30) {
            daysAway = Math.floor(daysAway / 30);
            metric = 'months';
        }
    
        return { daysAway, metric };
    };

    const {daysAway, metric} = calculateDaysToBirthday(friend.dateOfBirth);
    return (
        <div className='friend-tile'>
            <img className="profile-pic" src={empty_profile_pic} alt={friend.name} />
            <h2>{friend.name}</h2>
            <p>{friend.email}</p>
            <p>Birthday in: {daysAway}  {metric}</p>
        </div>
    );
};

export default FriendTile;