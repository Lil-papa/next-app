import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";

const users = ({ users }) => {
    return (
        <MainContainer keywords={"users"}>
            <h1>User List</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link id="link" href={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
        props: { users },

    }
}