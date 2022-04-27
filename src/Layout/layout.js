import Container from "../components/Container";
import Footer from "../components/footer/footer";
import Navbar from "../components/Navbar/navbar";

function Layout(props){
    return (
        <>
            <Navbar/>
            <main>
                <Container>
                    {props.children}
                </Container>
            </main>
            <Footer/>
        </>
    );
}

export default Layout;