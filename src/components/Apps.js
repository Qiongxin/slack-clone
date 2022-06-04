import React from 'react'
import styled from 'styled-components'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';


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
                    <img src="../images/zoom.png" alt="zoom" />
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
    color: grey;
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

const AppIcons = styled.div``;

const AppIcon = styled.div``;