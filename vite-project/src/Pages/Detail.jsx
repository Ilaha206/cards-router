import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";
function Detail() {
    const { id } = useParams();
    // bu id ile apiye request at
    // gelen cavabi ekranda goster
    const [card, setCard] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('https://67fe481b58f18d7209ed8111.mockapi.io/people/' + id)
            .then((res) => res.json())
            .then((data) => {
                setCard(data)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return <p><OrbitProgress color="#3196cc" size="medium" text="" textColor="" /></p>

    }
    return (
        <div>

            <title>My detail</title>
            <h2>{card.name}</h2>
            <p>{card.email}</p>
            <img src={card.img} />
        </div>
    )
}

export default Detail