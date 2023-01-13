import React from "react";

export const Child = ({userList, isUserLoggedIn}) => {
    if(!isUserLoggedIn) {
        return <h1>you are not authorized</h1>;
    }
    return (
        <div>
            {userList.length > 0 ? (
                <>
                    {userList.map((item) => {
                        return (
                            <div key = {item.id}>
                                <h1>{item.name}</h1>
                                <h1>{item.surname}</h1>
                                <h1>{item.age}</h1>
                            </div>
                        );
                        
                    })}
                </>
            ) : 
            (<h1>no users in the system</h1>)
            }
        </div>
    );
};
