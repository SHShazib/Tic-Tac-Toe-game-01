// Get and fill number
let sign = "X";
function fill(number){
    let box = document.getElementById("div" + number);
    if (box.innerText == ""){
            box.innerText = sign;
            check();
    }
    if (winner()){
        displayBlock("win");
    }
    else{
        if (draw()){
            displayBlock("draw");
        }
    }
}
function check(){
    if(sign == "X"){
        sign = "O";
    }
    else{
        sign = "X";
    }
}
// get data 
function getData(div){
    return document.getElementById(div).innerHTML;
}
// Check Null number 
function checkCondition(ex1,ex2,ex3){
    if( getData(ex1)!="" && 
    getData(ex2)!="" && 
    getData(ex3)!="" &&
    
    getData(ex1) == getData(ex2) && 
    getData(ex2) == getData(ex3) )

    {return true;}
}

// Winner function
function winner(){
    if ( checkCondition("div1","div2","div3") || 
    checkCondition("div4","div5","div6") || 
    checkCondition("div7","div8","div9") || 
    checkCondition("div1","div4","div7") || 
    checkCondition("div2","div5","div8") || 
    checkCondition("div3","div6","div9") || 
    checkCondition("div1","div5","div9") || 
    checkCondition("div3","div5","div7") )
    {return true;}
}

// Draw function 
function draw(){
    if ( getData("div1")!= "" &&
    getData("div2")!= "" && 
    getData("div3")!= "" &&
    getData("div4")!= "" && 
    getData("div5")!= "" && 
    getData("div6")!= "" && 
    getData("div7")!= "" && 
    getData("div8")!= "" && 
    getData("div9")!= "")
    {return true;}
}


// Restart Button 
function restart(){
    for (let i = 1; i <= 9 ; i++) {
        document.getElementById("div" + i).innerHTML = "";
    }
    displayNone("win");
    displayNone("draw");
}

// Display Block function
function displayBlock(id){
    document.getElementById(id).style.display = 'block';
}
// Display None function
function displayNone(id){
    document.getElementById(id).style.display = 'none';
}