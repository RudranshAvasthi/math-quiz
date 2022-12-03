question_turn = "p1";
answer_turn = "p2";
player1name = localStorage.getItem("player1_name_key");
player2name = localStorage.getItem("player2_name_key");
player1score = 0
player2score = 0
document.getElementById("player1_name").innerHTML = player1name + ":";
document.getElementById("player1_score").innerHTML = player1score;

document.getElementById("player2_name").innerHTML = player2name + ":";
document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "question turn:" + player1name;
document.getElementById("player_answer").innerHTML = "answer turn:" + player2name;

function send() {
    number1 = document.getElementById("number1").value; 
    number2 = document.getElementById("number2").value; 
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-infp'onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value ="";
    document.getElementById("number2").value =""; 
}

function check() {
    user_answer = document.getElementById("input_check_box").value;
    user_answer = parseInt(user_answer)
    if (user_answer == actual_answer) {
        if (answer_turn == "p1") {
            player1score = player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;


        } else {
            player2score = player2score + 1;
            document.getElementById("player2_score").innerHTML = player2score;

        }

    }
    if (question_turn == "p1") {
        question_turn = "p2";
        answer_turn = "p1";
        document.getElementById("player_question").innerHTML = "question turn:" + player2name;
        document.getElementById("player_answer").innerHTML = "answer turn:" + player1name;
    } else {
        question_turn = "p1";
        answer_turn = "p2";
        document.getElementById("player_question").innerHTML = "question turn:" + player1name;
        document.getElementById("player_answer").innerHTML = "answer turn:" + player2name;

    }
document.getElementById("output").innerHTML="";

}