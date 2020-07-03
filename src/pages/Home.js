import React, { useState, useEffect } from 'react'
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import Axios from 'axios'
import './Home.css'


const Home = () => {
    const [data, setData] = useState([])
    localStorage.setItem("data", "https://api.github.com/gists/public")

    useEffect(() => {
        const URL = `https://api.github.com/gists/public`
        Axios.get(URL).then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const showData = data.map((item, index) => {
        return (
            <Col lg={4} md={6} sm={12} xs={12} key={index}>
                <CardDeck className="text-center">
                    <Card className="mt-5 mb-3">
                        <Card.Img variant="top" src={item.owner.avatar_url} />
                        <Card.Body>
                            <Card.Title className="text-capitalize">{item.owner.login}</Card.Title>
                            <Link to="/following" className="btn btn-primary mr-3">Following</Link>
                            <Link to="/followers" className="btn btn-primary ">Followers</Link>
                        </Card.Body>
                        <Card.Footer>
                            <div>
                                <i className="fa fa-heart btn btn-outline-danger rounded-circle"></i>
                                <a href={item.owner.html_url} target="blank" ><i className="fa fa-github btn btn-outline-dark rounded-circle ml-3"></i></a>
                            </div>

                        </Card.Footer>
                    </Card>
                </CardDeck>
            </Col>
        )
    })

    return (
        <Container className="mt-5 mb-5">
            <p className="mb-3 text-center"><i className="fa fa-github-alt fa-3x" aria-hidden="true"><span className="ml-1">Github</span></i></p>
            <p className="border-bottom"></p>
            <Row>
                {showData}
            </Row>
        </Container>
    )
}

export default Home;