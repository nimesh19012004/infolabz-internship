
import './App.css'
import Login, { Addtocart, Logout } from './Customcomps';


function App() {
 return(
  <>
  App
  </>
 );
}

const Msg=()=>{
  return <div>
    msg
  </div>
}

const New=()=>{
  return <div>
    new 
  </div>
}

export const Practice=()=>{
  return <div>
    <Msg/>
    <New></New>
  </div>
}
export default App
