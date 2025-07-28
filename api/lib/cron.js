import cron from "cron";
import https from "https";

const job = new cron.CronJob("*/14 * * * *",()=>{
    https.get("https://backend-storyshort.onrender.com", (res) =>{
        if(res.statusCode == 200) console.log("Get Request Success by cron");
        else console.log("Get Request failed by cron")
    })
    .on("error",(e) => console.log("Error in cron jobs error ",e));
})

export default job ; 