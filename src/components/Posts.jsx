import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getPosts } from '../services/postServices';

const Container = styled.section`
    margin: 2.5rem 5rem;
    font-family: Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: .2rem;
`

export default function Posts() {
    //declarando un estado para la lista de posts de la api
    const [posts, setPosts] = useState([])

    //metodo que recibe la informacion de la api (posts)
    const fetchData = async () => {
        const data = await getPosts();
        //devuelve el arreglo de los posts que hay en la api
        console.log(data)
        setPosts(data)
    }

    //hook => useEffect
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container>
            <Title>Latest Posts</Title>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nostrum!</p>
            <section>
                {
                    posts.map((item) => {
                        return (
                            <div key={item.id} style={{borderBottom: "1px solid blue", paddingBottom: ".2rem"}}>
                                <h4>{item.title}</h4>
                                <p>{item.body}</p>
                                <p><b>userId: </b>{item.userId}</p>
                            </div>
                        )
                    })
                }
            </section>
        </Container>
    )
}
