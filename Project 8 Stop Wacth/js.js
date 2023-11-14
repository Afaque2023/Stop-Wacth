let milli = 0;
let sec = 0;
let min = 0;
let hr = 0;

let timer = false;

function start(){
    timer = true;
    myFun();
}
function stop(){
    timer= false;
    myFun();
}
function reset(){
    location.reload();
}
function myFun(){
    if(timer == true){
        milli = milli + 1;
        if(milli == 100){
            sec = sec + 1
            milli = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0
        }
        if(min == 60){
            hr = hr + 1
            min = 0;
        }
        let getSec = sec;
        let getMin = min;
        let getHr = hr;
        if(sec < 10){
            getSec="0"+sec; 
        }
        if(min < 10){
            getMin="0"+min;
        }
        if(hr<10){
            getHr="0"+hr
        }
        setTimeout("myFun()",10 )
        document.getElementById("milli").innerHTML=milli;
        document.getElementById("sec").innerHTML=getSec;
        document.getElementById("min").innerHTML=getMin;
        document.getElementById("hr").innerHTML=getHr;

    }

}

// for (let i = 1920; i <= new Date().getFullYear(); i++) {
//     document.querySelector("#hr").innerHTML += `<option>${i}</option>`;
// }

// for (let i = 1920; i <= new Date().getFullYear(); i++) {
//     document.querySelector(".year").innerHTML += `<option>${i}</option>`;
// }

// document.getElementById("hr").addEventListener("change", function () {
//     document.getElementById("min").innerHTML = `<option value="00">00</option>`;
//     document.getElementById("min").removeAttribute("disabled");
    
//     for (let i = 0; i < 24; i++) {
//         document.getElementById("hr").innerHTML += `<option value="${i}">${i}</option>`;
//     }
//     document.getElementById("min").focus();
//     // console.log(document.querySelector(".year").value);
//     document.getElementById("start").innerText= document.getElementById("min").value
// });



// document.getElementById("min").addEventListener("change", function () {
//     document.getElementById("sec").innerHTML = `<option value="00">00</option>`;
//     document.getElementById("sec").removeAttribute("disabled");
    
//     for (let i = 0; i < 60; i++) {
//         document.getElementById("min").innerHTML += `<option value="${i}">${i}</option>`;
//         document.getElementById("sec").innerHTML += `<option value="${i}">${i}</option>`;
//     }
//     document.getElementById("min").focus();
//     // console.log(document.querySelector(".year").value);
//     document.getElementById("stop").innerText= document.getElementById("sec").value
// });

// document.getElementById("sec").addEventListener("change", function () {
//     document.getElementById("milli").innerHTML = `<option value="00">00</option>`;
//     document.getElementById("sec").removeAttribute("disabled");
    
//     for (let i = 0; i < 100; i++) {
//         document.getElementById("milli").innerHTML += `<option value="${i}">${i}</option>`;
//     }
//     document.getElementById("min").focus();
//     // console.log(document.querySelector(".year").value);
//     document.getElementById("stop").innerText= document.getElementById("milli").value
// });

// document.getElementById("mili").addEventListener("change", function () {
//     document.getElementById("hr").innerHTML = `<option value="00">00</option>`;
//     document.getElementById("sec").removeAttribute("disabled");
    
//     for (let i = 0; i < 100; i++) {
//         document.getElementById("milli").innerHTML += `<option value="${i}">${i}</option>`;
//     }
//     document.getElementById("min").focus();
//     // console.log(document.querySelector(".year").value);
//     document.getElementById("reset").innerText= document.getElementById("milli").value
// });


//  for (let i = 0; i < 24; i++) {
//      document.getElementById("hr").innerHTML += `<option value="${i}">${i}</option>`;
//  }

//  for (let i = 0; i < 60; i++) {
//      document.getElementById("min").innerHTML += `<option value="${i}">${i}</option>`;
//      document.getElementById("sec").innerHTML += `<option value="${i}">${i}</option>`;
//  }

// for (let i = 0; i < 100; i++) {
//     document.getElementById("milli").innerHTML += `<option value="${i}">${i}</option>`;
// }

// function addOptionsToSelect(selectId, range) {
//     const select = document.getElementById(selectId);
//     for (let i = 0; i <= range; i++) {
//         const option = document.createElement("option");
//         option.value = i < 10 ? `0${i}` : `${i}`;
//         option.text = option.value;
//         select.appendChild(option);
//     }
// }

// addOptionsToSelect("hr", 23); // 0 to 23 for hours
// addOptionsToSelect("min", 59); // 0 to 59 for minutes
// addOptionsToSelect("sec", 59); // 0 to 59 for seconds
// addOptionsToSelect("milli", 99); // 0 to 99 for milliseconds



// function start() {
//     // Your start function logic here
//     timer = true;     myFun();
// }

// function stop() {
//     // Your stop function logic here
// }

// function reset() {
//     // Your reset function logic here
// }

// document.getElementById("hr").addEventListener("change", function () {
//     // Update minutes options based on the selected hour
//     // Use this logic to update other select elements as well
// });