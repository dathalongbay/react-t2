/* 
    Tạo ra 3 biến cho các phép tính
    các phép tính sẽ luôn cần ( số thứ nhất +|-|*|/ số thứ 2)
    vd : 1 + 5
    vd : 2 * 4 ....
    vậy nên ta cần biến firstNumber chứa số đầu tiên
    operator chứa toán tử 
    secondNumber chứa số thứ hai 
    ví dụ phép tính 2 * 5 thì firstNumber là 2, operator là * và secondNumber là 5
 */
let operator = '';
let firstNumber = '';
let secondNumber = '';

/* 
Lấy tất cả các thẻ nút 0 đến 9 và dấu . để nối thập phân vì các nút này đều có class là .calc-number. Ta dùng bộ chọn querySelectorAll để lấy ra 1 NodeList gồm nhiều thẻ
 */
let calcNumbers = document.querySelectorAll('.calc-number');
// in ra console để debug
console.log({calcNumbers});

// dùng vòng lặp for ... of dể duyệt NodeList thu được
for (const numberItem of calcNumbers) {
    // gắn sự kiện cho các nút này vì có nhiều node nên chúng ta phải đặt chúng trong vòng lặp
    numberItem.addEventListener("click",function(){
        // gọi đến hàm appendNumber() ở bên dưới 
        // và truyền vào numberItem.innerText đây chính là văn bản trong mỗi nút từ 0 đến 9 và dấu .
        // khi ấn nút số 2 thì chúng ta lấy văn bản bên trong là số 2 để truyền vào hàm appendNumber bên dưới 
        appendNumber(numberItem.innerText);
    });
}

/* hàm này để nối thêm số vào trong thẻ có id là input chính là màn hình hiển thị của máy tính casio */
function appendNumber(number) {
    // += là toán tử nối chuỗi với chính bản thân nó 
    // ví dụ màn hình casio có text là 9 thì sẽ nối thêm chuỗi number được truyền thêm vào 
    document.getElementById('input').innerText += number;
}

// lấy các thẻ chứa toán từ + - * / vì chúng đều có class chung là .operator
let operators = document.querySelectorAll('.operator');
// dùng vòng lặp for ... of để duyệt NodeList operator thu được vì nó sẽ có 4 phần tử bên trong là + - * /
for (const operatorItem of operators) {
    // gắn sự kiện click chuột cho các nút này 
    operatorItem.addEventListener("click",function(){
        // gọi đến hàm setOperator bên dưới và truyền vào văn bản bên trong nút đó 
        // ví dụ nút + thì innerText của nó là +
        // nút * thì innerText của nó là *
        setOperator(operatorItem.innerText);
    });
}

/* hàm này để thiết lập số đầu tiên firstNumber và toán tử cho máy tính casio */
function setOperator(op) {
    // gán phép tính + - * / cho biến toàn cục operator ở bên trên
    operator = op;
    // gán văn bản trong màn hình casio với id là input cho biến firstNumber
    firstNumber = document.getElementById('input').innerText;
    // sau khi gán toán tử và firstNumber ta đưa màn hình casio về 1 chuỗi rỗng để chuẩn bị 
    // cho người dùng nhấp số thứ 2 và secondNumber
    document.getElementById('input').innerText = '';
}

// nút = để tính kết quả có id là result 
// ta sẽ gắn 1 sự kiện click cho nút này với event handler là hàm calculate
document.getElementById("result").addEventListener("click", calculate)
function calculate() {
    // ta sẽ lấy văn bản trong màn hình casio gán cho biến secondNumber
    secondNumber = document.getElementById('input').innerText;
    // đặt mặc định cho kết quả của phép tính là 0
    let result = 0;
    // in ra toán tử, firstNumber và secondNumber để debug xem có gì bất thường không
    console.log({operator, firstNumber, secondNumber});
    // dùng lệnh rẽ nhánh switch ... case để tính toán
    switch (operator) {
        case '+':
            // ép kiểu về số thực cho các biến firstNumber và secondNumber
            // vì rất có thể các biến này đang có kiểu là string
            result = parseFloat(firstNumber) + parseFloat(secondNumber);
            break;
        case '-':
            // ép kiểu về số thực cho các biến firstNumber và secondNumber
            // vì rất có thể các biến này đang có kiểu là string
            result = parseFloat(firstNumber) - parseFloat(secondNumber);
            break;
        case '*':
            // ép kiểu về số thực cho các biến firstNumber và secondNumber
            // vì rất có thể các biến này đang có kiểu là string
            result = parseFloat(firstNumber) * parseFloat(secondNumber);
            break;
        case '/':
            // ép kiểu về số thực cho các biến firstNumber và secondNumber
            // vì rất có thể các biến này đang có kiểu là string
            result = parseFloat(firstNumber) / parseFloat(secondNumber);
            break;
    }

    // đưa kết quả vào trong màn hình casio thông qua thuộc tính innerText
    document.getElementById('input').innerText = result;
    // đưa các biến operator,firstNumber,secondNumber về mặc định rỗng sau khi thực hiện xong 
    // một phép tính
    operator = '';
    firstNumber = '';
    secondNumber = '';
}

// gắn sự kiện xóa màn hình cho nút clear
document.getElementById("clear").addEventListener("click", clearResult)
function clearResult() {
    // lệnh này sẽ đưa màn hình casio về rỗng
    document.getElementById('input').innerText = '';
    // đưa các biến operator,firstNumber,secondNumber về mặc định rỗng khi click vào nút clear
    operator = '';
    firstNumber = '';
    secondNumber = '';
}