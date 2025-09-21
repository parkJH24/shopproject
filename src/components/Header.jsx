import { Link } from "react-router-dom";
import styled from "styled-components";
import MainMenu from "./MainMenu";
import { useEffect, useState } from "react";
import { googleLogin, googleLogout, onUserState } from "../api/firebase";
import UserData from "./UserData";

export default function Header() {

    const [user, setUser] = useState();

    const login = () => {
        googleLogin().then(setUser)
    }

    const logout = ()=>{
        googleLogout().then(setUser)
    }

    useEffect(()=>{
        onUserState((user)=>{
            setUser(user);
        })
    },[])
    console.log(user)
    return (
        <HeaderContainer>
            <h1>
                <Link to='/'>JH</Link>
            </h1>
            <MainMenu />
            <div className="userInfoWrap">
                {user && user.isAdmin &&
                    
                    <Link to='/products/upload'>업로드</Link>
                }
                {user ? (
                    <>
                        <UserData user={user} />
                        <button className="logoutBtn" onClick={logout}>logout</button>
                    </>
                ) : (
                    <button className="loginBtn" onClick={login}>login</button>
                )}


            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    padding: 24px 12px;
    box-sizing: border-box;
    gap: 24px;
    border-bottom: solid 1px rgba(0,0,0,0.2);
    h1 a{
        font-size: 36px;
        color: lightskyblue;
    }
    .userInfoWrap{
        display: flex;
        margin-left: auto;
        align-items: center;
        gap: 12px;
        button{
            padding: 6px 12px;
            border-radius : 6px;
            border: solid 1px rgba(0,0,0,0.1);
            &.loginBtn{
                background: lightblue;
            }
            &.logoutBtn{
                background: lightcyan;
            }

        }
    }
`