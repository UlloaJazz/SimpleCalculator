function calc (){
    // converting string to int or else 2+2 will equal 22
    // https://www.w3schools.com/jsref/jsref_parseint.asp
    let x = parseInt(document.getElementById("value1").value);
    let y = parseInt(document.getElementById("value2").value);
    let op = document.getElementById("operation").value;
    let result;

    
    if (op == "add"){
        result = x + y;
    } else if (op == "sub"){
        result = x - y;
    }else if (op == "mul"){
        result = x * y;
    }else if (op == "div"){
        result = x / y;
    }
    // https://www.w3schools.com/jsref/prop_node_innertext.asp
    // targeting the results text in the HTML to display the answer
    document.getElementById("results").innerText = result;

}












//
// function calc() {
//     console.log(inputBox.value);
//     switch (inputBox.value) {
//         case "add"':
//             {
//                 result= x + y
//             } 
//             break; 
//         case "subtract":
//             {
//                 result= x - y
//             }
//             break;
//         case "multiply":
//             {
//                 result= x * y
//             }
//             break;
//         case "divide":
//             {
//                 result= x / y
//             }
//             break;
//         
//         default:{

    
//     
// }