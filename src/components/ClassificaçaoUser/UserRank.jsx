import { useState } from 'react';
import { RankImages } from './RankObject.js';
export default function UserRank(Rank) {
    const RankNumber = parseInt(Rank);
    
    const [ rank, setRank ] = useState(RankImages);

    const RankImg = rank.map(element => {
        return (
            <img src={element.img} alt=''></img>
        )
    })      
    return (
        <div>
        { RankImg }
        </div>
    )
}