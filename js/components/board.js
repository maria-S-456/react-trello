import React from 'react';
import CardList from './card-list';

export default function Board() {
    return (
        <div className="board-list">
            <CardList />
            <CardList />
            <CardList />
        </div>
    );
}