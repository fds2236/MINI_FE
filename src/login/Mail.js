import { Link } from "react-router-dom";
import { useState} from "react";
import MailApi from "../api/MailApi";
import Modal from "../util/Modal";
import styled from "styled-components";

const Mail = () => {
    const [mail1, setMail1] = useState("");
    const [mail2, setMail2] = useState("");

    const onChangeEmail = (e) => {
        setMail1(e.target.value)
    }

    const onChangeEmail2 = (e) => {
        setMail2(e.target.value)
    }

    const onClickMail = async() => {
        try{
            const res = await MailApi.userEmail(mail1+mail2)
        } catch(e) {
        }
    }


    return(
        <>
        <input onChange={onChangeEmail}></input> <input onChange={onChangeEmail2}></input>
        <button onClick={onClickMail}></button>
        </>
    )
}

export default Mail;