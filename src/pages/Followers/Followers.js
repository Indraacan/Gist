import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Axios from "axios";

const Followers = (props) => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const URL = `https://api.github.com/users`;

  const imageAvatar = {
    width : "100px",
    height :"100px",
  };

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
          <td>
            <img src={item.avatar_url} className="rounded-circle" style={imageAvatar} />
          </td>
          <td className="font-weight-bold">{item.login}</td>
          <td>
              <a href={item.html_url} target="blank">
                  <i className="fa fa-github fa-4x text-dark"></i>
                </a>
          </td>
        </tr>
      </>
    );
  });

  return (
    <Container className="mt-5 pt-5 ">
      <Table striped bordered hover className="text-center">
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

export default Followers;
