import React from "react";
import { Child } from "./Child";
import { users } from "./UserList";

export const Parent = () => {
    return (
        <div>
            <Child userList = {users} isUserLoggedIn = {true}/>
        </div>
    );
};
