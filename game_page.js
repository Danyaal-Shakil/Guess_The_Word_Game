player1_name=localStorage.getItem("player1_name")
player2_name=localStorage.getItem("player2_name")
player1_score=0
player2_score=0
question_turn="player_1"
answer_turn="player_2"
document.getElementById("player1_name").innerHTML=player1_name+" : "
document.getElementById("player2_name").innerHTML=player2_name+" : "
document.getElementById("player1_score").innerHTML=player1_score
document.getElementById("player2_score").innerHTML=player2_score
document.getElementById("player_question").innerHTML="questionturn - "+player1_name
document.getElementById("player_answer").innerHTML="answerturn - "+player2_name
function send(){
    get_word=document.getElementById("word").value
    word=get_word.toLowerCase()
    console.log("word in lower case= "+word)
    ca1=word.charAt(1)
    console.log(ca1)
    ld2=Math.floor(word.length/2)
    ca2=word.charAt(ld2)
    console.log(ca2)
    lm1=word.length-1
    ca3=word.charAt(lm1)
    console.log(ca3)
    rc1=word.replace(ca1,"_")
    rc2=rc1.replace(ca2,"_")
    rc3=rc2.replace(ca3,"_")
    console.log(rc3)
    qw="<h4 id='word_display'> Q. "+rc3+"</h4>"
    ib="<br> answer: <input type='text' id='input_check_box'>"
    cb="<br> <br> <button class='btn btn-info' onclick='check()'>check</button>"
    ro=qw+ib+cb
    document.getElementById("output").innerHTML=ro
    document.getElementById("word").value=""
}
function check(){
    get_answer=document.getElementById("input_check_box").value 
    answer=get_answer.toLowerCase()
    console.log("answer in lower case - "+answer)
    if (answer==word) {
        if (answer_turn=="player_1") {
    player1_score=player1_score+1
    document.getElementById("player1_score").innerHTML=player1_score            
        } else {
    player2_score=player2_score+1
    document.getElementById("player2_score").innerHTML=player2_score
        }
    }
    if (question_turn=="player_1") {
    question_turn="player_2" 
    document.getElementById("player_question").innerHTML="question_turn - "+player2_name   
    } else {
    question_turn="player_1" 
    document.getElementById("player_question").innerHTML="question_turn - "+player1_name    
    }
    if (answer_turn=="player_1") {
        answer_turn="player_2" 
        document.getElementById("player_answer").innerHTML="answer_turn - "+player2_name   
        } else {
        answer_turn="player_1" 
        document.getElementById("player_answer").innerHTML="answer_turn - "+player1_name    
        }
        document.getElementById("output").innerHTML=""
}