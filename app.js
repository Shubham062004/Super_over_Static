
var s_b = document.querySelector("#strike")
var r_b = document.querySelector("#reset")
var team1_s_tag = document.getElementById("score-team1")
var team2_s_tag = document.getElementById("score-team2")
var team1_w_tag = document.getElementById("wicket-team1")
var team2_w_tag = document.getElementById("wicket-team2")
var strike_Audio = new Audio("http://bit.ly/so-ball-hit")
var gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer")
var team1_score = 0
var team2_score = 0
var team1_wicket = 0
var team2_wicket = 0
var team1BallsFaced = 0
var team2BallsFaced = 0
var turn = 1
var possibleOutcomes = [0,1,2,3,4,6,"W"];

s_b.addEventListener("click",s_bClicked)
function s_bClicked(){
    strike_Audio.pause()//to pause when button is clicked second time
    strike_Audio.currentTime=0//to start the audio from start when clicked second time 
    strike_Audio.play()
    //choosing random value
    var randomness = Math.random()
    var random1 = randomness * possibleOutcomes.length
    var randomIndex = Math.floor(random1)
    var randomValue= possibleOutcomes[randomIndex]
    //India batting
    if(turn==1){
        team1BallsFaced++;
        var ball = document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`)
        ball.innerHTML=randomValue
        if(randomValue=="W"){
            team1_wicket++;
            team1_w_tag.innerHTML = team1_wicket
        }else{
            team1_score+= randomValue
            team1_s_tag.innerHTML=team1_score
        }
    }

    if(team1BallsFaced==6 || team1_wicket ==2){
        turn=2
        if(turn==2){
            team2BallsFaced++;
            var ball = document.querySelector(`#team2-superover div:nth-child(${team2BallsFaced})`)
            ball.innerHTML=randomValue
            if(randomValue=="W"){
            team2_wicket++;
            team2_w_tag.innerHTML = team2_wicket
            }else{
            team2_score+= randomValue
            team2_s_tag.innerHTML=team2_score
            }
        }

    }

    if(team2_score>team1_score || team2_wicket==2 || team2BallsFaced==6){
        turn=3
       gameover()
    }
}

function gameover(){
    if(team1_score>team2_score || team2_wicket==2){
        alert("India Won!")
        
    }
    else if(team1_score<team2_score || team1_wicket==2){
        alert("Pakistan Won")
        
    }else{
        alert("It's a tie")
    }
    
}

r_b.addEventListener("click",resetFunction)
function resetFunction(){
    window.location.reload()
}

