var count = 0
function handleClick(){
    count = count + 1;
    if(count%2!=0){
        document.getElementById("p1").style.color="red"
        document.getElementById("section1").style.backgroundColor="green"
    }
    else{
        document.getElementById("p1").style.color="black"
        document.getElementById("section1").style.backgroundColor="white"

    }

}