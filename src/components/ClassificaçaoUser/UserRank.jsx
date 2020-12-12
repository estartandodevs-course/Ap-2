//import { useState } from "react";
import { RankImages } from "./RankObject.js";
import TrueKeyImg from "../../assets/icons/TrueKey.png";
import "./UserRank.scss";

export default function UserRank(Rank) {
  let RankNumber = Object.values(Rank);

  const NewRankImages = RankImages.map((element) => {
    if (RankNumber > 0) {
      element.img = TrueKeyImg;
      RankNumber -= 1;
    }
    return element;
  });

  return (
    <div className="images">
      {NewRankImages.map((element, index) => {
        return <img src={element.img} alt="Avaliação" key={index}></img>;
      })}
    </div>
  );
}

/*export default function UserRank(Rank) {
    let RankNumber = Object.values(Rank);
    const NewRankImages = RankImages.map(element => {
        if (RankNumber > 0) {
            element.img = TrueKeyImg;
            RankNumber -= 1;
        }
        return element;
    })
    const rank = useState(NewRankImages);

    const RankImg = rank.map(element => {
        return (
            <img src={element.img} alt=''></img>
        )
    })
    return (
        <div>
            {RankImg}
        </div>
    )
}*/
