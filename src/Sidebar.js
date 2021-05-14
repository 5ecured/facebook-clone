import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import { ExpandMoreOutlined } from '@material-ui/icons'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import { useStateValue } from './StateProvider'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue()

    return (
        <div className='sidebar'>
            {/* <SidebarRow src='https://cdn.shopify.com/s/files/1/1195/1380/products/4589745112811-10_1024x1024@2x.jpg?v=1581182277' title='Edward' /> */}
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />
            <SidebarRow />
        </div>
    )
}

export default Sidebar