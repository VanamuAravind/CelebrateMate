import React from 'react';
import '../Pages/Friends.css';
import FriendTile from '../components/FriendTile';

const Friends = () => {
    const friends = [
        // Birthday is today
        { id: 1, name: 'John Doe', email: 'john@example.com', dateOfBirth: '1990-03-30' },
    
        // Birthday is within the next week
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', dateOfBirth: '1992-04-01' },
        { id: 3, name: 'Alice Johnson', email: 'alice@example.com', dateOfBirth: '1988-04-02' },
    
        // Birthday is on the next Friday
        { id: 4, name: 'Bob Brown', email: 'bob@example.com', dateOfBirth: '1995-04-04' },
    
        // Birthday is more than a week away but less than a month
        { id: 5, name: 'Charlie Green', email: 'charlie@example.com', dateOfBirth: '1990-04-15' },
        { id: 6, name: 'Diana White', email: 'diana@example.com', dateOfBirth: '1993-04-20' },
    
        // Birthday is more than a month away
        { id: 7, name: 'Eve Black', email: 'eve@example.com', dateOfBirth: '1991-05-15' },
        { id: 8, name: 'Frank Blue', email: 'frank@example.com', dateOfBirth: '1994-06-10' },
    
        // Birthday has already passed this year
        { id: 9, name: 'Grace Yellow', email: 'grace@example.com', dateOfBirth: '1990-01-15' },
        { id: 10, name: 'Hank Red', email: 'hank@example.com', dateOfBirth: '1992-02-10' },
    
        // Birthday is exactly one week away
        { id: 11, name: 'Ivy Purple', email: 'ivy@example.com', dateOfBirth: '1993-04-06' },
    
        // Birthday is exactly one month away
        { id: 12, name: 'Jack Orange', email: 'jack@example.com', dateOfBirth: '1995-04-30' },
    
        // Birthday is in the next year
        { id: 13, name: 'Karen Pink', email: 'karen@example.com', dateOfBirth: '1990-12-25' },
        { id: 14, name: 'Leo Gray', email: 'leo@example.com', dateOfBirth: '1991-11-15' },
    
        // Birthday is on February 29 (leap year test)
        { id: 15, name: 'Mia Cyan', email: 'mia@example.com', dateOfBirth: '1992-02-29' },
    
        // Birthday is today but in a leap year
        { id: 16, name: 'Nina Lime', email: 'nina@example.com', dateOfBirth: '1996-03-30' },
    
        // Birthday is within the next week and on a weekend
        { id: 17, name: 'Oscar Teal', email: 'oscar@example.com', dateOfBirth: '1993-04-05' },
    
        // Birthday is exactly 6 months away
        { id: 18, name: 'Paul Indigo', email: 'paul@example.com', dateOfBirth: '1990-09-30' },
    
        // Birthday is in the past but close to today
        { id: 19, name: 'Quinn Violet', email: 'quinn@example.com', dateOfBirth: '1990-03-28' },
    
        // Birthday is far in the future
        { id: 20, name: 'Rita Gold', email: 'rita@example.com', dateOfBirth: '1990-10-15' },
    ];
    return (
        <div className='friends-page-div'>
            <h1 className='friends-header-title'>Friends</h1>
            <div className='friends-tiles'>
                {friends.map((friend) => (
                    <FriendTile friend={friend} key={friend.id} />
                ))}
            </div>
        </div>
    );
};

export default Friends;