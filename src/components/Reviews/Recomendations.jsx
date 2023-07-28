//import { useEffect, useState } from 'react'
const Recomendations = ({review}) => {
    let reviewTimeView = true
    if(review["at_review_time"] == undefined || review["at_review_time"] == null)
    {
       reviewTimeView = false
    }
    if(review["recommendation"])
    {
    
    return (
        <>
        <div className="SideBySide">
        <div>
        <img src="https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsUp_v6.png"></img>
        </div>
        
        <div className="TopDown">
            <div>
        <h2>Recommended</h2>
            </div>
            <div>
        <h3>{review["total_time"]} hrs on record</h3>
        {reviewTimeView &&<h3>{` (${review["at_review_time"]} at review time)`}</h3>}
            </div>
        </div>
        </div>
        </>
    );
    }
    {
        return (
        <>
        <div className="SideBySide">
        <div>
        <img src="https://store.cloudflare.steamstatic.com/public/shared/images/userreviews/icon_thumbsDown_v6.png"></img>
        </div>
        <div className="TopDown">
            <div>
        <h2>Not Recommended</h2>
            </div>
            <div>
            <h3>{review["total_time"]} hrs on record</h3>
            {reviewTimeView && <h3>{` (${review["at_review_time"]} at review time)`}</h3>}
            </div>
        </div>
        </div>
        </>
        )
    }
  };
  
  export default Recomendations;
  