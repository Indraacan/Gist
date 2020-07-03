import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Following = (props) => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const URL = `https://api.github.com/gists`;

  useEffect(() => {
    Axios.get(URL)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const showDataFollowing = data.map((item, index) => {
    console.log(item);

    return (
      <>
        <tr key={index}>
          <td>{(index += 1)}</td>
          <td></td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </>
    );
  });

  return (
    <Container className="mt-5 pt-5 ">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Github</th>
          </tr>
        </thead>
        <tbody>{showDataFollowing}</tbody>
      </Table>
    </Container>
  );
};

export default Following;
