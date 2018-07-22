import React from 'react';
const PersonDetails = (props)=> {

    const imgurl='http://www.freeiconspng.com/uploads/person-icon-23.png';
    return(
        <div className="col-md-7">
            <div className="col-md-3">
                <img src={imgurl}/>
            </div>
            <div className="ShowMe">
                <h3>Name:{props.person.name}</h3>
                <h4>UserName:{props.person.username}</h4>
                <h4>HackerRank:{props.person.hackerrank}</h4>
                <h4>CodeForces:{props.person.codeforces}</h4>
                <p>AboutMe:{props.person.about}</p>

            </div>
        </div>
    )
}
export default PersonDetails;