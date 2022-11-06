import axios from "axios";
const HEADER = "application/json";
const MINI_DOMAIN = "http://localhost:8111/";

const MiniApi =  {

    // 회원가입
    signUp: async function(id, pwd, name, email, phone, addr) {
        const signUpObj = {
            id: id,
            pwd: pwd,
            memName: name,
            email: email,
            phone: phone,
            addr: addr
            
        }
        return await axios.post(MINI_DOMAIN + "SignUpServlet", signUpObj, HEADER);
    },
    
    // 아이디 중복확인
    idCheck: async function(id) {
        const idCheckObj = {
            id: id
        }
        return await axios.post(MINI_DOMAIN + "IdCheckServlet", idCheckObj, HEADER);
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
    itemInfo: async function(brand, sort, proCode) {
        console.log("브랜드 : " + brand);
        console.log("정렬조건 : " + sort);
        console.log("상품코드 : " + proCode)
        const itemCmd = {
            cmd : "ItemInfo",
            brand : brand,
            sort : sort,
            proCode : proCode
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

    // 게시물 등록하기
    regBoard: async function(boardNum, category, title, content, id) {

        const boardCmd = {
            cmd: "regBoard",
            boardNum: boardNum,
            category: category,
            title: title,
            content: content,
            id: id
        }
        return await axios.post(MINI_DOMAIN + "BoardRegServlet", boardCmd, HEADER);
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