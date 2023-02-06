import './App.css';
import {Wrapper} from "./wrapper"
import {Parent} from "./parent"
import Footer from "./footer"
import Navbar from "./navbar"


const App = ()=> {
  return ( 
    <Wrapper>
      <Navbar/>
      <Parent />
      <Footer/>
    </Wrapper>
  )
}
// kodi davwere da vizualurad ar gamoaq ar vici rato
export default App;
