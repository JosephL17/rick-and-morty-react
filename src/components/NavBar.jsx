import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Button from "react-bootstrap/Button"

function NavBar() {
    return <>
    <h1>NavBar</h1>
        <Navbar bg='dark' data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src="https://t4.ftcdn.net/jpg/04/73/84/05/360_F_473840532_3l6e60QsRSvH89VLCGlyskmQRAq2wbwt.jpg"
                width="35"
                height="35"
                className="d-inline-block align-top"
                />{' '}
                <Button variant="outline-primary">Homepage</Button>
            </Navbar.Brand>
            </Container>
            <Container>
            <Navbar.Brand href="/About">
                <img
                alt=""
                src="https://cdn.dribbble.com/users/1107367/screenshots/5521980/media/43f7ff3a9d4944798a70887535640ebe.gif"
                width="35"
                height="35"
                className="d-inline-block align-top"
                />{' '}
                <Button variant="outline-primary">About</Button>
            </Navbar.Brand>
            </Container>
            <Container>
            <Navbar.Brand href="/AllCharacterPage">
                <img
                alt=""
                src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/12/rick-and-morty-anime.jpg"
                width="35"
                height="35"
                className="d-inline-block align-top"
                />{' '}
                <Button variant="outline-primary">Characters</Button>
            </Navbar.Brand>
            </Container>
            <Container>
            <Navbar.Brand href="/FavoritesPage">
                <img
                alt=""
                src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/12/rick-and-morty-anime.jpg"
                width="35"
                height="35"
                className="d-inline-block align-top"
                />{' '}
                <Button variant="outline-primary">favorites</Button>
            </Navbar.Brand>
            </Container>
        </Navbar>
    </>
}

export default NavBar