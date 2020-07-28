import React from "react";

const Card = ({user}) => {
    return(
        <div className="tc bg-washed-blue w-25 pa3 mr2 mb4 grow br4 shadow-4">
                <img src={`https://robohash.org/${user.id}?100x100`} alt="users" />
            <div>
                <h2>{user.title}</h2>
                <h4>{user.body}</h4>
            </div>
        </div>
    );
}

export default Card;