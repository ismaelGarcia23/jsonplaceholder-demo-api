import React from 'react'
import styled from 'styled-components'

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
    return (
        <Container>
            <Title>Latest Posts</Title>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, nostrum!</p>
        </Container>
    )
}
