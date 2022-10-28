import axios from "axios";
const HEADER = "application/json";
const MINI_DOMAIN = "http://localhost:8090/mini_prj/";

const MiniApi =  {

    // 로그인 기능
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(MINI_DOMAIN + "LoginServlet", loginObj, HEADER);
    }






}

export default MiniApi;