import axios from "axios";
export async function saveLog(log) {
    try {
        await axios.post("http://localhost:3000/logs", {
            log: log,
        });
        console.log("log saved!")
    } catch (error) {
        console.log(error)
    }
}
