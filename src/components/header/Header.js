import React from 'react'
import "./_header.scss"
import {FaBars} from "react-icons/fa"
import {AiOutlineSearch} from "react-icons/ai"
import {MdNotifications, MdApps} from "react-icons/md"

function Header({handleToggleSideBar}) {
    return (
        <div className="border border-dark header">
            <FaBars className="header__menu" size={26} onClick={()=>handleToggleSideBar()} />
                <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" className="header__logo" alt="logo" />
                <form action="">
                    <input type="text" placeholder="search" />
                    <button type="submit"><AiOutlineSearch size={22}/></button>
                </form>
                <div className="header__icons">
                    <MdNotifications size={28}/>
                    <MdApps size={28}/>
                    <img src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" alt="" />
                </div>

            
        </div>
    )
}

export default Header
