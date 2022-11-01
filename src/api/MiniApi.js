import axios from "axios";
const HEADER = "application/json";
const MINI_DOMAIN = "http://localhost:8090/mini_prj/";

const MiniApi =  {

    // 회원가입
    signUp: async function(id, pw,) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(MINI_DOMAIN + "SignUpServlet", loginObj, HEADER);
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
        name: name,
        mail: mail
        }
        return await axios.post(MINI_DOMAIN = "IdServlet", findIdObj, HEADER);
    },

    // pwd 찾기 기능
    
}

    
export default MiniApi;