import React from 'react'
import styled from 'styled-components'
import { auth, db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarOption from './SidebarOption';
import AddIcon from '@material-ui/icons/Add';
import { useAuthState } from 'react-firebase-hooks/auth';



function Sidebar() {
  const [channels] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth)

  return (
    <SidebarContanier>
        <SidebarHeader>
            <SidebarInfo>
                <h2>
                    {user.displayName.split(' ')[0].toUpperCase()}
                </h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user.displayName}
                </h3>
            </SidebarInfo>
            <CreateIcon />
        </SidebarHeader>

        <SidebarOptions>
            <SidebarOption Icon={InsertCommentIcon} title='Threads' />
            <SidebarOption Icon={InboxIcon} title='Metions & reactions' />
            <SidebarOption Icon={DraftsIcon} title='Saved items' />
            <SidebarOption Icon={BookmarkBorderIcon} title='Channel browser' />   
            <SidebarOption Icon={PeopleAltIcon} title='People & user groups' />
            <SidebarOption Icon={AppsIcon} title='Apps' />
            <SidebarOption Icon={FileCopyIcon} title='File browser' />
            <SidebarOption Icon={ExpandLessIcon} title='Show less' />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title='Channels' />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title='Add Channel' />

            {channels?.docs.map((doc) => (<SidebarOption key={doc.id} id={doc.id} title={doc.data().name}/>))}
        </SidebarOptions>
        
    </SidebarContanier>

    
  )
}

export default Sidebar

const SidebarContanier = styled.div`
    background-color: var(--slack-color);
    color: white;
    flex: 0.3;
    margin-top: 60px;
    max-width: 260px;
    border-top: 1px solid #49274b;
`;

const SidebarOptions = styled.div`
    overflow: scroll;
    height: 89%;

    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    padding: 13px;
    border-bottom: 1px solid #49274b;

    > .MuiSvgIcon-root {
        padding: 8px;
        background-color: white;
        color: #49274b;
        border-radius: 50%;
        font-size: 18px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3{
        display: flex;
        font-weight: 400;
        font-size: 13px;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
