// setTimeout(function(){
//     var randomNumber=Math.floor(Math.random()*6)+1;
//     var randomImagePath="images/"+randomNumber+".jfif";

//     var Image=document.querySelectorAll("img")[0];
//     Image.setAttribute("src",randomImagePath);
// },3000);



const interval=setInterval(function(){
    var randomNumber=Math.floor(Math.random()*6)+1;
    var randomImagePath="images/"+randomNumber+".jfif";

    var Image=document.querySelectorAll("img")[0];
    Image.setAttribute("src",randomImagePath);

    const  count=0;
    for(var i=0;i<3;i++){
    document.querySelector("p").innerHTML=count;
    }


    document.querySelector("button").addEventListener("click",playgame);
    function playgame(){
        if(id==randomNumber){
            console.log("you win ")
        }
    }

},3000);

// const arr=setInterval(function(){
//     const  count=0;
//     for(var i=0;i<3;i++){
//     document.querySelector("p").innerHTML=count;
//     count++;
//     }
// },1000);


let output = document.querySelector("p");
let count = 0;

setInterval(() => {
    output.innerHTML = count;
    count++;

    if (count > 2) {
      count = 0;
    }
}, 3000)


// clearInterval(interval);

// function playgame(){
//     var randomNumber=Math.floor(Math.random()*6)+1;
//     var randomImagePath="images/"+randomNumber+".jfif";

//     var Image=document.querySelectorAll("img")[0];
//     Image.setAttribute("src",randomImagePath);

//     // for(var i=1;i<=6;i++){
//     //     if(randomNumber==id){
//     //         document.querySelector("h2").innerHTML="You win The game";
//     //     }
//     //     else{
//     //         document.querySelector("h2").innerHTML="losss the game";
//     //     }
//     // }
// }

// document.querySelector("button").addEventListener("click",playgame);

