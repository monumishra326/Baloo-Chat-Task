import { Home } from '../../assets/Home'
import { Filter } from '../../assets/Filter'
import { Search } from '../../assets/Search'
import './botnav.css'

export const  BotNav = ()=>{

    return(
        <div id='BotNav'>
            <div style={{borderBottom:"3px solid #E7E049"}}><Home/></div>
            <div><Filter/></div>
            <div><Search/></div>
        </div>
    )
}