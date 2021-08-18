import React, { useEffect, useState } from 'react';
import {
  Table,
  ListTable,
  ListUser,
  WrapperManager,
  Header,
} from './ManegerElements';
import Button from '../../components/Button/index';
import { Redirect } from 'react-router-dom';

const Manager = ({ dataUser, setDataUser }) => {
  const [data, setData] = useState([]);
  const select = id => {
    setData(
      data.map(el =>
        el.id === id
          ? {
              ...el,
              motorcyclist: el.users.includes(dataUser.user)
                ? el.motorcyclist + 1
                : el.status === 'free'
                ? el.motorcyclist - 1
                : el.motorcyclist,
              status: el.users.includes(dataUser.user)
                ? 'free'
                : el.motorcyclist === 1 || el.motorcyclist === 0
                ? 'NOT AVAILABLE'
                : 'not available',
              users: el.users.includes(dataUser.user)
                ? el.users.filter(el => el !== dataUser.user)
                : el.status !== 'NOT AVAILABLE'
                ? [...el.users, dataUser.user]
                : el.users,
            }
          : el
      )
    );
  };
  const logout = () => {
    setDataUser({ ...dataUser, user: '', status: false });
    localStorage.removeItem('dataUser');
    localStorage.removeItem('data');
  };
  useEffect(() => {
    const dataStorage = localStorage.getItem('data');
    if (dataStorage !== null) {
      setData(
        JSON.parse(dataStorage).map(el => ({
          ...el,
          status:
            el.motorcyclist === 0
              ? 'NOT AVAILABLE'
              : !el.users.includes(dataUser.user)
              ? 'free'
              : 'not available',
        }))
      );
    } else {
      fetch('https://api.jsonbin.io/b/6118a084e1b0604017b0587f/latest')
        .then(res => res.json())
        .then(res => {
          setData(
            res.map(el => ({
              ...el,
              status:
                el.motorcyclist === 0
                  ? 'NOT AVAILABLE'
                  : !el.users.includes(dataUser.user)
                  ? 'free'
                  : 'not available',
            }))
          );
          localStorage.setItem('data', JSON.stringify(res));
        })
        .catch(e => `Error get data motorcyclist${e}`);
    }
  }, []);
  const applyChanges = () => {
    fetch('https://api.jsonbin.io/v3/b/6118a084e1b0604017b0587f', {
      method: 'PUT',
      mode: 'cors',
      redirect: 'follow',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(res => {
        alert(`Changes implemented`);
        localStorage.setItem('data', JSON.stringify(data));
      })
      .catch(e => alert('Erro try again'));
  };
  return (
    <WrapperManager>
      {!dataUser.status && <Redirect to='/' />}
      <Header>
        <h2>WELCOME {dataUser.user} </h2>
        <Button event={logout} value={'LOGOUT'} />
        <Button event={applyChanges} value={'Apply changes'} />
      </Header>
      <Table>
        <thead>
          <tr>
            <th>Schedules</th>
            <th>Motorcyclists</th>
            <th>Status</th>
            <th>Users registered</th>
          </tr>
        </thead>
        <tbody>
          {data.map(el => (
            <ListTable
              key={el.id}
              status={el.status}
              onClick={() => select(el.id)}
            >
              <td>{el.timeTable}</td>
              <td>{el.motorcyclist}</td>
              <td>{el.status}</td>
              <td>
                <ul>
                  {el.users.map(el => (
                    <ListUser
                      key={`${el}`}
                      current={el === dataUser.user ? 'current' : 'notCurrent'}
                    >
                      {el},
                    </ListUser>
                  ))}
                </ul>
              </td>
            </ListTable>
          ))}
        </tbody>
      </Table>
    </WrapperManager>
  );
};

export default Manager;
