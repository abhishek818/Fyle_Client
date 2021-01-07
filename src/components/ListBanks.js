import React, { Fragment, useEffect, useState } from "react";

const ListBanks = () => {

  const [banks, setBanks] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(() => {
  
  const getBanks = async () => {
    try {
      console.log(location);
      const response = await fetch(`http://localhost:5000/api/branches?q=${location}`);
      const results = await response.json();

      setBanks(results);
    } catch (err) {
      console.error(err.message);
    }
  };

    getBanks();
  });


  return (
    <Fragment>
      <select value={location} onChange = {(e) =>
      {
        setLocation(e.target.value);
      }}>
        <option value="Bangalore"> Bangalore </option>
        <option value="Mumbai"> Mumbai </option>
        <option value="Kolkata"> Kolkata </option>
        <option value="Delhi"> Delhi </option>
        <option value="Ahmedabad"> Ahmedabad </option>
      </select>

      <table style={{ width: "90%" }} className="table table-bordered table-responsive-xl
       mb-5 mt-5 table-hover
       table-striped text-center
       center">
        <thead className="thead-dark">
          <tr>
            <th>Ifsc</th>
            <th>Bank_id</th>
            <th>Branch</th>
            <th>Address</th>
            <th>City</th>
            <th>District</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {banks.map(bank => (
            <tr key={bank.ifsc}>
              <td>{bank.ifsc}</td>
              <td>{bank.bank_id}</td>
              <td>{bank.branch}</td>
              <td>{bank.address}</td>
              <td>{bank.city}</td>
              <td>{bank.district}</td>
              <td>{bank.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListBanks;