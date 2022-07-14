import './messeges.css'

export const Messages = ()=>{

    const contacts = [
        {
            img:"https://randomuser.me/api/portraits/women/10.jpg",
            name:"Sarah",
            last_messege:"Hey I've completed the design",
            time:"11:45pm",
            unread_messeges:2,
        },

        {
            img:"https://randomuser.me/api/portraits/women/87.jpg",
            name:"Michael",
            last_messege:"Get those to me immediately",
            time:"11:45",
            unread_messeges:0,
        },
        {
            img:"https://randomuser.me/api/portraits/women/23.jpg",
            name:"James",
            last_messege:"Sent it over sometime back",
            time:"11:45pm",
            unread_messeges:"3",
        },
        {
            img:"https://randomuser.me/api/portraits/women/47.jpg",
            name:"Jessica",
            last_messege:"Hey I wanted to discuss",
            time:"11:45pm",
            unread_messeges:2,
        },

        {
            img:"https://randomuser.me/api/portraits/women/56.jpg",
            name:"John",
            last_messege:"send it Over",
            time:"11:45pm",
            unread_messeges:0,
        },
        {
            img:"https://randomuser.me/api/portraits/women/26.jpg",
            name:"Smith",
            last_messege:"When are you available",
            time:"11:45pm",
            unread_messeges:3,
        },
        {
            img:"https://randomuser.me/api/portraits/women/1.jpg",
            name:"Senior Manager",
            last_messege:"Hey what's up guys",
            time:"11:45pm",
            unread_messeges:0,
        },

        {
            img:"https://randomuser.me/api/portraits/women/91.jpg",
            name:"Sarah",
            last_messege:"Hey I've completed the design",
            time:"11:45pm",
            unread_messeges:2,
        },

        {
            img:"https://randomuser.me/api/portraits/women/62.jpg",
            name:"Michael",
            last_messege:"Get those to me immediately",
            time:"11:45",
            unread_messeges:0,
        },
        {
            img:"https://randomuser.me/api/portraits/women/37.jpg",
            name:"James",
            last_messege:"Sent it over sometime back",
            time:"11:45pm",
            unread_messeges:"3",
        },
        {
            img:"https://randomuser.me/api/portraits/women/73.jpg",
            name:"Jessica",
            last_messege:"Hey I wanted to discuss",
            time:"11:45pm",
            unread_messeges:2,
        },

        {
            img:"https://randomuser.me/api/portraits/women/14.jpg",
            name:"John",
            last_messege:"send it Over",
            time:"11:45pm",
            unread_messeges:0,
        },
        {
            img:"https://randomuser.me/api/portraits/women/52.jpg",
            name:"Smith",
            last_messege:"When are you available",
            time:"11:45pm",
            unread_messeges:3,
        },
        {
            img:"https://randomuser.me/api/portraits/women/78.jpg",
            name:"Senior Manager",
            last_messege:"Hey what's up guys",
            time:"11:45pm",
            unread_messeges:0,
        },

        
    ]
    return (
        <div id='Messages'>
          {contacts.map((el,i)=>
            <div>
                <div><img src={el.img} alt="" /></div>
                <div>
                    <div>{el.name}</div>
                    <div>{el.last_messege}</div>
                </div>
                <div>
                    <div>{el.time}</div>
                    <div><div>{el.unread_messeges?<div style={{width:"18px", height:"18px", borderRadius:"50%", backgroundColor:"#000000", display:'flex', alignItems:'center', justifyContent:"center", marginTop:"18px"}}><div>{el.unread_messeges}</div></div>:<div style={{width:"8px", height:"8px", backgroundColor:"#E7E049", borderRadius:"50%", marginTop:"18px"}}></div>}</div></div>
                </div>
            </div>
          )}
        </div>
    )
}