import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ContainerHome, Form } from './HomeElements';
import Button from '../../components/Button/index';

const Home = ({ dataUser, setDataUser }) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [newUser, setNewUser] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!dataUser.status) {
      fetch('https://api.jsonbin.io/b/611947c4d5667e403a4357d5/latest')
        .then(res => res.json())
        .then(res => setData(res))
        .catch(e => `ValidateUser Error: ${e}`);
    }
  }, [dataUser.status]);
  const validateUser = e => {
    e.preventDefault();
    if (data.length !== 0) {
      const findUser = data.find(el => el.user === user && el.email === email);
      findUser !== undefined
        ? setDataUser({ ...dataUser, user: user, status: true })
        : alert('user not found');
    }
  };
  const createUser = e => {
    e.preventDefault();
    for (let el of data) {
      if (el.user === newUser || el.email === newEmail) {
        alert('User or email already exist');
        return;
      }
    }
    fetch('https://api.jsonbin.io/v3/b/611947c4d5667e403a4357d5', {
      method: 'PUT',
      mode: 'cors',
      redirect: 'follow',
      body: JSON.stringify([...data, { user: newUser, email: newEmail }]),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => setDataUser({ ...dataUser, user: newUser, status: true }))
      .catch(e => alert(`Error try again`));
  };
  return (
    <ContainerHome>
      <h1>MOTORCYCLISTS</h1>
      <Form onSubmit={e => validateUser(e)}>
        <fieldset>
          <legend>LOGIN</legend>
          <label>
            <input
              value={user}
              onChange={e => setUser(e.target.value)}
              type='text'
              placeholder='Enter user . . .'
              required
              autoComplete='off'
            />
          </label>
          <label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type='email'
              placeholder='Email . . .'
              required
              autoComplete='off'
            />
          </label>
          <Button type='submit' value={'ENTER'} />
        </fieldset>
      </Form>
      <p>OR</p>
      <Form onSubmit={e => createUser(e)}>
        <fieldset>
          <legend>CREATE NEW USER</legend>
          <label>
            <input
              value={newUser}
              onChange={e => setNewUser(e.target.value)}
              type='text'
              required
              placeholder='Name user . . .'
              autoComplete='off'
            />
          </label>
          <label>
            <input
              required
              value={newEmail}
              onChange={e => setNewEmail(e.target.value)}
              type='email'
              placeholder='Email . . .'
              autoComplete='off'
            />
          </label>
          <Button type='submit' value={'CREATE USER'} />
        </fieldset>
      </Form>

      {dataUser.status && <Redirect to='/manager' />}
    </ContainerHome>
  );
};

export default Home;
