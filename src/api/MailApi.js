import axios from "axios";
const HEADER = "application/json";
const MINI_DOMAIN = "http://localhost:8111/";

const MailApi = {
    mailSave: async function(email) {
        const mailObj = {
            email: email
        }
        return await axios.post(MINI_DOMAIN + "MailServlet", mailObj, HEADER);
    }
}

export default MailApi;
