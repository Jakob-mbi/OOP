import Validation from "./validation"
class Ui{
    constructor(){

    }
    static startingUi()
    {
        const app = document.querySelector("#app")
        app.innerHTML=`
        <div class="card border-primary mb-3" style="max-width: 32rem;">
            <div class="card-header">Welcome to the Game</div>
            <div class="card-body overflow-auto" id="console">

            </div>
            <div class="card-footer">
            <button type="button" class="btn btn-primary my-1" id="Continue">Start Game</button>
            <button type="button" class="btn btn-danger" id="Continue">Restart Game</button>
            </div>
        </div>
        `
    }
    static uiConsoleText(text,classes)
    {
        try{
            Validation.existensOfUi("console")
            const gameUi = document.querySelector("#console")
            gameUi.innerHTML +=`<div class="my-3 d-block ${classes}">${text}</div></hr>`
        }
        catch(err)
        {
            console.error(err)
        }
        

    }
}

export default Ui