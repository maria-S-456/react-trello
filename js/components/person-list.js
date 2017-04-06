import React from 'react';
import Person from './person';

export default function PersonList() {
    return (
        <div className="person-list">
            <Person />
            <Person />
            <Person />
            <Person />
            <Person />
        </div>
    );
}