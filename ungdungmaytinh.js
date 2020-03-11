function ungDungMayTinh(tinh) {
    let a = Number(document.getElementById('inputA').value);
    let b = Number(document.getElementById('inputB').value);
    let result;
    switch (tinh){
        case 'cong':
            result = (a + b);
            break;
        case 'tru':
            result = (a - b);
            break;
        case 'nhan':
            result = (a * b);
            break;
        case 'chia':
            result = (a / b);
            break;
    }
    document.getElementById('result').innerText=result;
}