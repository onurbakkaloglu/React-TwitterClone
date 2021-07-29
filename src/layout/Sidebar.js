import React, { useState} from 'react'
import twitterLogo from "../images/twitter.svg"
import {HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookMarksIcon, ListIcon, ProfileIcon, MoreIcon} from "../icons/Icon";
import SideLink from '../components/SideLink';
import UserBox from '../components/UserBox';
const sideLinks= [
    {
        name:'Anasayfa',
        icon: HomeIcon,
    },
    {
        name:'Keşfet',
        icon: ExploreIcon,
    },
    {
        name:'Bildirimler',
        icon: NotificationsIcon,
    },
    {
        name:'Mesajlar',
        icon: MessagesIcon,
    },
    {
        name:'Yer İşaretleri',
        icon: BookMarksIcon,
    },
    {
        name:'Listeler',
        icon: ListIcon,
    },
    {
        name:'Profil',
        icon: ProfileIcon,
    },
    {
        name:'Daha Fazla',
        icon: MoreIcon,
    }
]
const Sidebar = () => {
    const [active, setActive] = useState("Home");
    const handleMenuItemClick = (name) => {
        setActive(name);
    }
    return (
        <div className="h-screen sticky top-0 w-72 flex flex-col justify-between px-2">
           <div>
               <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest">
               <img src={twitterLogo} alt="TwitterLogo" className="h-9 w-9"></img>
               </div>
               
                <nav className="mb-4">
                    <ul>
                       {sideLinks.map(({name, icon})=> (
                           <SideLink key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick}></SideLink>
                       ))}
                    </ul>
                </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transition-colors duration-200">Tweet</button>
           </div>
           <div>
               <UserBox />
           </div>

        </div>
    )
}

export default Sidebar



