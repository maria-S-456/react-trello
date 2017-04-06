//don't use arrow function
import React from 'react';

export default function Person() {
    const name = 'Derek Zoolander';
    const imageUrl = 'http://vignette3.wikia.nocookie.net/zoolander/images/f/f1/Derek-Zoolander-in-a-turban.jpg/revision/latest?cb=20160227145330';
    const job = 'Male model';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
}