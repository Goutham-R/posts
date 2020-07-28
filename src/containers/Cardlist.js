import React from "react";
import Card from "./Card";

const Cardlist = ({users}) =>
{
    return(
        <div className="flex flex-wrap justify-around">
        {
        users.map((_user,i) => {
            return (
                    <Card
                     key={i}
                     user={users[i]} />   
            );
        })
        }
        </div>
    );
}

export default Cardlist;