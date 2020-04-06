import React, {Component} from "react";
import axios from "axios";

import { Container, Row, Form, Col, Button } from "react-bootstrap";



export default class FilterInput extends Component{

    constructor(props) {

        super(props);
        this.state = {
            tags: [],
            API_URL_TAGS: "http://localhost:9000/apiv1/tags",
        }
    }

    callAPITags(){
        
        axios.get(`${this.state.API_URL_TAGS}`)
        .then(res => {

            const tags = res.data.tags;
            this.setState({ tags });
        }).catch(() => {})
    }

    
    componentDidMount(){
        
        this.callAPITags();
    }

    render(){
        
        const { tags } = this.state;
       
        return(
            <Container>
                <Row className="my-5">
                    <Col className="col-12">
                        <Form>
                            <Form.Label column className="pl-0">
                                What you looking for?
                            </Form.Label>
                            <Form.Group as={Row}>
                                <Col xs={8}>
                                    <Form.Control name="name" type="text" placeholder="Search AD by name" />
                                    <Form.Text className="text-muted">
                                        Try me! {tags.map(t => <a key={t} href={`/?tag=${t}`}> {t}, </a>)}
                                    </Form.Text>
                                </Col>
                                <Col xs={4}>
                                    <Button type="submit" variant="info" className="w-100">Search</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button href="/" variant="outline-info">Reset filter</Button>
                    </Col>
                </Row>
            </Container>
        )
    }
}