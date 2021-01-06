import React, { Fragment, useEffect, useState } from "react";

const ListBanks = () => {
  const [banks, setBanks] = useState([]);

  const getBanks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/branches/");
      const jsonData = await response.json();

      setBanks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBanks();
  }, []);

  console.log(banks);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Ifsc</th>
            <th>Bank_id</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {banks.map(bank => (
            <tr key={bank.ifsc}>
              <td>{bank.ifsc}</td>
              <td>{bank.bank_id}</td>
              <td>{bank.branch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListBanks;