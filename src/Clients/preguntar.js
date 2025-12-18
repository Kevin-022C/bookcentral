import axios from "axios";

const preguntarClient = async ()=> {
    const instance = await axios.get("https://randomuser.me/api/").then(res => res.data);
    return await instance;
}
export async function preguntar() {
    return await preguntarClient();
}
