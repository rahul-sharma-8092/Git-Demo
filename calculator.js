const calculator = () => {

    let num1 = parseInt(prompt("Enter num1"));
    let num2 = parseInt(prompt("Enter num2"));

    let operator = prompt("Enter Operator( + - * / )");
    let result = 0;
    
    switch (operator) {
        case '+' :
        result = num1 + num2;           
        break;
        
        case '-' :
        result = num1 - num2;           
        break;
        
        case '*' :
        result = num1 * num2;           
        break;

        case '/' :
        result = num1 / num2;           
        break;

        default:
        console.log("Invalid Operator");
        break;
    }
    console.log("Reslut:", result);
}