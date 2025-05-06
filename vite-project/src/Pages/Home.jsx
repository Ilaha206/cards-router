import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { OrbitProgress } from 'react-loading-indicators';
import { Link } from 'react-router-dom'



function Home() {

    const [categories, setCategories] = useState([]);
    const [search, setsearch] = useState('')
     const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('https://67fe481b58f18d7209ed8111.mockapi.io/people')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data)
                setLoading(false)
            })
    }, [])


    if (loading) {
        return <p><OrbitProgress color="#3196cc" size="medium" text="" textColor="" /></p>
    }
    else{
    return (
        < >
          
            <title>My home</title>
            <input value={search} type="text" onChange={e=>setsearch(e.target.value)}/>
            {categories
            .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
            .map(x => <Link to={`/detail/${x.id}`} key={x.id} ><div> <Card style={{ width: '18rem' }}>

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
    )}
}

export default Home