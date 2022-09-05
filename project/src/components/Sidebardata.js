import React from 'react';
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as BsIcons from "react-icons/bs"
import * as CgIcons from "react-icons/cg"

export const Sidebardata=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Personal Details',
        path:'/details',
        icon:<BsIcons.BsPersonCircle/>,
        cName:'nav-text'
    }
    ,
    {
        title:'Offer Letter',
        path:'/letter',
        icon:<CgIcons.CgNotes/>,
        cName:'nav-text'
    }
    ,
    
]