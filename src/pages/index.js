import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Container = styled.div`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

export default () => (
    <Layout>
        <h1>Richard Hamming on Luck</h1>
        <div>
            <p>
                From Richard Hamming’s classic and must-read talk, “
                <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                    You and Your Research
                </a>
                ”.
            </p>
            <blockquote>
                <p>
                    There is indeed an element of luck, and no, there isn’t. The prepared
                    mind sooner or later finds something important and does it. So yes, it
                    is luck.{" "}
                    <em>
                        The particular thing you do is luck, but that you do something is
                        not.
                    </em>
                </p>
            </blockquote>
        </div>
        <p>Posted April 09, 2011</p>
        <Container>
            <h1>About Styled Components</h1>
            <p>Styled Components is cool</p>
            <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
            <User
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            />
        </Container>
    </Layout>
)