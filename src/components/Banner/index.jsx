import styled from 'styled-components'

const Container = styled.div`
    background-color: #6EAE8D;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    line-height: 25.92px;
    text-align: center;
    b{
        font-weight: 700;
       
    }
    span {
        cursor: pointer;
        text-decoration: underline;
    }
`
function Banner(props) {
    console.log(props.isMobile)
    return (
        <Container>
            {!props.isMobile && `Hello friend 👋 ! Sharing is caring.`}
            <b>
                Tell a friend about this cool website and let’s break the internet  🚀.
                <span>
                    Copy link
                </span>
            </b>
        </Container>
    )
}

export default Banner