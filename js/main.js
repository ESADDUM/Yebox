import YeboxEngine from "./Framework/Yebox/Yebox.js";


let YeEngine = new YeboxEngine()
YeEngine.CreateBasicTags()



let Start = setInterval(()=>{
    // Add your methods for Sanddox here
    YeEngine.AlterThemeSystem(YeEngine.Theme.DarkTheme)
    YeEngine.AlterTheme(YeEngine.Theme.SkyTheme)
    YeEngine.Questions_save[0]

    //End Your methods Here
    clearInterval(Start) //Dont erase this line
},400)

let update = setInterval()=> {
YeEngine.ModifyContentClass(document.getElementById("quest1"."Olá Mundo")
},400)