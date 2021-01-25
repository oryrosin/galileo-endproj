import MyNavbar from "../components/MyNavbar";



function HomePage(props) {
    const {activeUser, onLogout} = props;

    return (
        <div className="p-home">
            <MyNavbar activeUser={activeUser} onLogout={onLogout}/>
            
            Home Page
        </div>
    )

}

export default HomePage;