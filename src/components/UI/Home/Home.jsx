import { BotNav } from '../BotNav/BotNav'
import { Messages } from '../Messages/Messages'
import { Navbar } from '../Navbar/Navbar'
import {UserAdd} from '../../assets/User_add'
import './home.css'
export const Home = ()=>{
    return (
        <div id='Home'>
           <Navbar/>
           <Messages/>
           <div id='add_mem'><UserAdd/></div>
           <BotNav/>
        </div>
    )
}