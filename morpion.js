
function checkWin(){

    document.querySelectorAll("td").forEach(morpionCase =>{

        console.log(morpionCase.innerHTML)
    })

    return false
}

let allTD = document.querySelectorAll('td')
let team = 1

document.querySelectorAll("td").forEach(morpionCase =>
    morpionCase.addEventListener("click", () => {

        if(!checkWin()){
            if(morpionCase.innerHTML === ""){
                if(team === 0){

                    morpionCase.innerHTML = "X"
                    team = 1
                }else if(team === 1){

                    morpionCase.innerHTML = "0"

                    team = 0
                }
            }else{

                console.log("pas de triche")
            }
        }else{

            console.log("check win")
        }
    })
)