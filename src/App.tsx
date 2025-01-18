
import AdminInformation from './Components/AdminInformation'
import AdmitInfomation from './Components/AdminInformation'
import Button from './Components/Button'
import Button2 from './Components/Button2'
import Button3 from './Components/Button3'
import Button4 from './Components/Button4'
import ButtonClick from './Components/ButtonClick'
import Counter from './Components/useState/Counter'
import UserInfomation from './Components/UserInformatoin'
import { UserDetails } from './type'
import { AdminDetails } from './type'
import UserProfile from './Components/useState/UserProfile'
import TodoList from './Components/useState/TodoList'
import Form from './Components/useRef/Form'
import FocusInput from './Components/useRef/FocusInput'
import ContactForm from './Components/useRef/ContactForm'
import EventHandling from './Components/useRef/EventHandling'
import Sender from './Components/useContext/Sender'
import CounterReciever from './Components/useContext/CounterReciever'
import Test from './Components/useReducer/Test'
import CounterX from './Components/useReducer/CounterX'


const App = () => {

const User : UserDetails={
  id: 1,
  name: "Om Prakash Sao",
  email: "om@gamil.com",
}

const Admin : AdminDetails = {
  id: 2,
  name: "Vivek Singh",
  email: "vivek@gmail.com",
  role: "admin",
  password:343,
}


  return (
    <div>
      {/* <Button name="om prakash" age={23} year={4}/>
      <Button2 name="om prakash" age={23} year={4}/>

      <Button3 name="om prakash" age={23} year={4}>
        <p>Lorem ipsum dolor sit. </p>
      </Button3>
      <Button4 name="om prakash" age={23} year={4}>
        <p>Lorem ipsum dolor sit. </p>
      </Button4>

      <ButtonClick label="click" disabled={false} onClick={()=>console.log("clicked button")} /> 

      <UserInfomation user ={User}/>
      <AdminInformation admin={Admin}/>

      <Counter/>
      <UserProfile/>
      <TodoList/>

      <Form/>
      <FocusInput/>
      <ContactForm/>
      <EventHandling/>

      <Sender>
          <CounterReciever/>
      </Sender>
      <Test/>
      */}

      <CounterX/>


        
    </div>
  )
}

export default App