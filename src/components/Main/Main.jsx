import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
    const navigation=useNavigation();
    const location=useLocation();
    console.log(location)
    return (
        <div>
            <Header></Header>
            {
                navigation.state==='loading'?<p>loading....</p>:<Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    );
};

export default Main;