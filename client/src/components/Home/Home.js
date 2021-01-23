import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext';
import Header from '../Header/Header';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
const Home = () => {
    const msg = useContext(UserContext)
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return (
        <>
            <Header />
            <div style={{ marginTop: 70 }}>
                <div className="row">
                    <div className="col-md-8">
                        {
                            array.map((val, key) => {
                                return (
                                    <Card>
                                        <CardImg top width="10%" src="https://th.bing.com/th/id/OIP.reUmAuPrKnTI0W2ZnUiCEQHaEK?pid=Api&rs=1" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle tag="h5">Card title</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            <Button>Button</Button>
                                        </CardBody>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;
