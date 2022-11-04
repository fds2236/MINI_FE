import axios from "axios";
const HEADER = "application/json";
const MINI_DOMAIN = "http://localhost:8111/";

const MiniApi =  {

    // 회원가입
    signUp: async function(id, pw, pwdCheck, name, email, emailName, phone1, phone2, phone3, phoneNum, addrNum, addr1, addr2) {
        const signupObj = {
            id: id,
            pwd: pw,
            pwdCheck: pwdCheck,
            memName: name,
            email: email,
            emailName: emailName,
            phone1: phone1,
            phone2: phone2,
            phone3: phone3,
            phoneNum: phoneNum,
            addrNum: addrNum,
            addr1: addr1,
            addr2: addr2
        }
        return await axios.post(MINI_DOMAIN + "SignUpServlet", signupObj, HEADER);
    },

    // 로그인 기능
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(MINI_DOMAIN + "LoginServlet", loginObj, HEADER);
    },

    // id 찾기 기능
    researchId: async function(name, mail) {
        const findIdObj = {
            memName: name,
            email: mail
        }
        return await axios.post(MINI_DOMAIN + "IdServlet", findIdObj, HEADER);
    },

    // pwd 찾기 기능
    researchPwd: async function(id, mail) {
        const findPwdObj = {
            id: id,
            email: mail
        }
        return await axios.post(MINI_DOMAIN + "PwdServlet", findPwdObj, HEADER);
    },

    // 상품 불러오기
    itemInfo: async function(brand) {
        const itemCmd = {
            cmd : "ItemInfo",
            brand : brand
        }
        return await axios.post(MINI_DOMAIN + "ItemServlet", itemCmd, HEADER);
    },

    // 게시글 불러오기
    boardInfo: async function(docNum) {
        const boardCmd = {
            cmd: "BoardInfo",
            docNum: docNum
        }
        return await axios.post(MINI_DOMAIN + "BoardListServlet", boardCmd, HEADER);
    },

    // 특정 게시물 불러오기
    findBoard: async function(docNum) {
        const boardCmd = {
            cmd: "findBoard",
            docNum: docNum
        }
        return await axios.post(MINI_DOMAIN + "BoardFindServlet", boardCmd, HEADER);
    },

    // pwd 재설정 기능
    resetPwd: async function(id, pw, pwdCheck) {
        const rePwdObj = {
            id: id,
            pwd: pw,
            pwdCheck: pwdCheck
        }
        return await axios.post(MINI_DOMAIN + "RePwdServlet", rePwdObj, HEADER);
    }
        
}

    
export default MiniApi;