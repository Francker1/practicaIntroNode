import React, { Component } from "react";
import axios from "axios";

import {Container, Card, Row, Col} from "react-bootstrap";
import "./App.css";

export default class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      ads: [],
      API_URL_BASE: "http://localhost:9000/apiv1/ads",
      search: window.location.search,
    }
  }

  callAPI(){

    axios.get(`${this.state.API_URL_BASE}/${this.state.search}`)
      .then(res => {

        const ads = res.data;
        this.setState({ ads });
      }).catch(() => {
        
        alert("Error to list advertisements, pleas try again");
      })

  }

  componentDidMount() {

    this.callAPI();
  }

  render() {

    const { ads } = this.state;

    return (
      <Container>
        <Row className="mt-5">
            { ads.map(ad => 
            
              <Col key={ad._id} className="col-12 col-sm-6 col-lg-4 mb-5">
            
                <Card className="card-ads">
                    <Card.Img className="img-card" variant="top" src={`http://localhost:9000/images/ads/${ad.photo}`} />
                    <Card.Body>
                        <Card.Title>{ad.name}</Card.Title>
                        <Card.Text as={"div"}>
                            <dl>
                                <dt>Precio: {ad.price} €</dt>

                                <dt>Tipo:</dt>
                                <dd>{ad.type}</dd>

                                <dt>Tags:</dt>
                                { ad.tags && ad.tags.map(tag => (
                                    <dd key={tag}>
                                        {tag}
                                    </dd>
                                ))
                                }
                            </dl>
                        </Card.Text>
                        <Card.Footer>
                            <small className="text-muted">ID: {ad._id}</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>
              </Col>
            )}
        </Row>
      </Container>
    )
  }
}