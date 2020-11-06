import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUusers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUusers(users); //console.log(users);
  }

  useEffect(() => {
    getUsers(); // can trigger an infinite loop because of setUsers()
  }, [/* empty dependency list to prevent the infinite loop */])

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map(({id, login, avatar_url, html_url}) => {
          return (<li key={id}>
            <img src={avatar_url} alt={login}></img>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </li>)
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
