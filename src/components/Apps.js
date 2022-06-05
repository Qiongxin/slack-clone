import React from 'react'
import styled from 'styled-components'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import zoom from '../images/zoom.png';
import github from '../images/github.png';
import gmail from '../images/gmail.png';
import googleDrive from '../images/google-drive.png';


function Apps() {
  return (
    <AppContainer>
        <Header>
            <h4>Apps</h4>
            <ExitToAppIcon />
        </Header>
        <Body>
            <AppSearch>
                <SearchIcon />
                <input placeholder='Search for apps by name or category' />
            </AppSearch>
            <AppTitle>
                <p>Your top apps</p>
                <span><FilterListRoundedIcon />Filter</span>
            </AppTitle>
            <AppIcons>
                <AppIcon>
                    <img src={zoom} alt="zoom" />
                    <span>
                        <h3>Zoom</h3>
                        <p>Easily start a zoom video meeting on Slack.</p>
                    </span>
                </AppIcon>
                <AppIcon>
                    <img src={github} alt="github" />
                    <span>
                        <h3>Github</h3>
                        <p>Get more updates from the world's leading development platform within Slack.</p>
                    </span>
                </AppIcon>
                <AppIcon>
                    <img src={gmail} alt="gmail" />
                    <span>
                        <h3>Slack for Gmail</h3>
                        <p>Send emails into Slack to discuss them with your teammates.</p>
                    </span>
                </AppIcon>
                <AppIcon>
                    <img src={googleDrive} alt="google drive" />
                    <span>
                        <h3>Google Drive</h3>
                        <p>Get notifications about Google Drive files on Slack.</p>
                    </span>
                </AppIcon>
            </AppIcons>

            
        </Body>
    </AppContainer>
  )
}

export default Apps

const AppContainer = styled.div`
    margin-top: 60px;
    flex: 1;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    padding: 23px;

   > .MuiSvgIcon-root {
        color: grey;
        font-size: 18px;
    }
`;

const Body = styled.div`
    padding: 23px;
`;

const AppSearch = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;
    padding: 5px 8px;
    color: gray;
    border: 1px solid lightgray;

    > input {
        outline: none;
        width: 40%;
        border: none;
        padding: 5px;
    }

    > .MuiSvgIcon-root {
        font-size: 20px;
    }
`;

const AppTitle = styled.div`
    display: flex;
    color: gray;
    font-weight: 500;
    justify-content: space-between;
    padding: 20px 0;

    > span {
        display: flex;
        align-items: center;
    }
`;

const AppIcons = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const AppIcon = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    border-radius: 10px;
    width: 49%;
    margin-bottom: 15px;

    > img {
        width: 60px;
        margin: 20px;
    }

    > span {
        margin-right: 18px;
    }

    > span > p {
        color: gray;
        margin-top: 8px;
    }
`;