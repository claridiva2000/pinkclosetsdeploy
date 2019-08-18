import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import '../dashboard.css';

const Newslettersubs = () => {
  const [list, setList] = useState([]);

  const [searchvalue, setSearchvalue] = useState('');

  const handleSearchInputChanges = e => {
    setSearchvalue(e.target.value);
  };

  const filteredclients = list.filter(client =>
    client.name.toLowerCase().includes(searchvalue.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://jsonplaceholder.typicode.com/users');

      setList(result.data);
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      {console.log(searchvalue)}
      <form className="search">
        <input
          style={{ width: '20%' }}
          type="text"
          placeholder="Search"
          value={searchvalue}
          onChange={handleSearchInputChanges}
        />
      </form>
      <table className="emailList">
        <tr>
          <th>ID</th> <th>Name</th> <th>Email</th>
          <th
            style={{
              width: '150px',
            }}
          >
            Contact
          </th>
        </tr>

        {filteredclients.map(client => (
          <tr className="trList" key={client.id}>
            <td className="listId">{client.id}</td>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '5px',
                fontSize: '1.6rem',
                width: '92%'
              }}
            >
              <i className="fas fa-mobile-alt" />
              <i className="far fa-envelope" />
              <i className="fas fa-trash-alt" />
              <i className="fas fa-edit" />
            </td>
          </tr>
        ))}
      </table>
    </Fragment>
  );
};

export default Newslettersubs;
