import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


function Home() {

    const [categories, setCategories] = useState([]);



    useEffect(() => {
        fetch('https://67fe481b58f18d7209ed8111.mockapi.io/people')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
            })
    }, [])


    return (
        < >
            {categories.map(x => <Link to={`/detail/${x.id}`}  key={x.id} ><div> <Card style={{ width: '18rem' }}>

<Card.Img variant="top" src={x.img} />
<Card.Body>
    <Card.Title>${x.name}</Card.Title>
    <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card></div></Link>)}

        </>
    )
}

export default Home