import React from 'react'
import { Card, Icon, Image, Container, Header, Button } from 'semantic-ui-react'
import "./style.css";
import { Link } from "react-router-dom";



const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
].join(' ')
const src1 = 'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20200309121707.jpg'

const CardExampleExtraContent = () => (
    <Card style={{ width: '100%' }}>
        <Card.Content header='Tour De Jodipan' />
        <Card.Content>
            <Image src={src1} fluid className="imageEvent" />
            <br></br>
            <br></br>

            <Container fluid>
                <p>
                    Domestic dogs inherited complex behaviors, such as bite inhibition, from
                    their wolf ancestors, which would have been pack hunters with complex
                    body language. These sophisticated forms of social cognition and
                    communication may account for their trainability, playfulness, and
                    ability to fit into human households and social situations, and these
                    attributes have given dogs a relationship with humans that has enabled
                    them to become one of the most successful species on the planet today.
                </p>
                <p>
                    The dogs' value to early human hunter-gatherers led to them quickly
                    becoming ubiquitous across world cultures. Dogs perform many roles for
                    people, such as hunting, herding, pulling loads, protection, assisting
                    police and military, companionship, and, more recently, aiding
                    handicapped individuals. This impact on human society has given them the
                    nickname "man's best friend" in the Western world. In some cultures,
                    however, dogs are also a source of meat.
                </p>
            </Container>

        </Card.Content>
        <Card.Content extra>
            <Link to={'./PembelianEvent'}>
                <Button style={{ width: '100%', backgroundColor: '#FA591D', height: '45px' }}>
                    <span className="btnBeli">BELI SEKARANG</span>
                </Button>
            </Link>

        </Card.Content>
    </Card>
)

export default CardExampleExtraContent