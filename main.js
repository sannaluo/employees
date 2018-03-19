let employeeList = {};
let employeeObject = {};
let employeename;
let employee = 1;
let employeeType = 'monthly';

/* document.getElementById('form').addEventListener('submit', saveEmployee(document.getElementById('firstname').innerHTML, document.getElementById('firstname').innerHTML, document.getElementById('firstname').innerHTML));

function saveEmployee(name, surname, salary){
  //  this.employeeList = JSON.parse();
    this.employeeObject = {
        'firstname' : name,
        'surname' : surname,
        'salary' : salary
    }
localStorage.setItem('employee', this.employeeObject.toString());
    console.log('works');
    console.log( this.employeeObject[1]);
    console.log( document.getElementById('form').elements['firstname'].value);
console.log(document.getElementById('firstname').value);
}
*/

document.getElementById('editName').addEventListener('click', () => this.name());
document.getElementById('save').addEventListener('click', () => this.save());
document.getElementById('show').addEventListener('click', () => this.show());
document.getElementById('monthly').addEventListener('click', () => this.monthly());
document.getElementById('hourly').addEventListener('click', () => this.hourly());
document.getElementById('contractor').addEventListener('click', () => this.contractor());


function name() {
    document.getElementById('name').contentEditable = 'true';
    document.getElementById('surname').contentEditable = 'true';
    document.getElementById('pay').contentEditable = 'true';
    document.getElementById('hours').contentEditable = 'true';
    document.getElementById('days').contentEditable = 'true';
    // document.getElementById('mottoEdited').style.border = '1px solid #FFC82C';
    //   document.getElementById('editMotto').style.display = 'none';
    // document.getElementById('editMotto2').style.display = 'block';
    employeename = document.getElementById('name');
}

function save() {

    switch (employeeType) {
        case 'monthly': localStorage.setItem(employee.toString(), document.getElementById('name').innerHTML + ', ' + document.getElementById('surname').innerHTML + ', ' + document.getElementById('pay').innerHTML +','+ 'n'+','+ 'n');
        break;
        case 'hourly' :  localStorage.setItem(employee.toString(), document.getElementById('name').innerHTML + ', ' + document.getElementById('surname').innerHTML + ', ' + document.getElementById('pay').innerHTML + ', ' + document.getElementById('hours').innerHTML + ', '+ 'n');
        break;
        case 'contractor':  localStorage.setItem(employee.toString(), document.getElementById('name').innerHTML + ', ' + document.getElementById('surname').innerHTML + ', ' + document.getElementById('pay').innerHTML + ', '+ 'n' + ', ' + document.getElementById('days').innerHTML);
    break;
    }
    employee++;
    console.log(document.getElementById('name').innerHTML);
    document.getElementById('name').innerHTML = 'Enter first name';
    document.getElementById('surname').innerHTML = 'Enter surname';
    document.getElementById('pay').innerHTML = 'Enter pay';
    document.getElementById('hours').innerHTML = 'Enter hours';
    document.getElementById('days').innerHTML = 'Enter days';
}

function show() {
    let total = 0;
    document.getElementById('employeeList').innerHTML = '';
    for (let i = 1; i < employee; i++) {
        console.log(i);
        console.log(localStorage.getItem(i));
        let employeeArray = localStorage.getItem(i).toString().split(',');
        let name = employeeArray[0];
        let surname = employeeArray[1];
        let pay = employeeArray[2];
        let hours = employeeArray[3];
        let days = employeeArray[4];

        if (hours === 'n' && days === 'n'){
            total = pay;
            hours = '';
            days = '';
            console.log('both');
        } else if (hours === 'n' && days !== 'n') {
            total = pay*days;
            hours = '';
            console.log('days');

        } else if (days === 'n' && hours !== 'n') {
            total = pay*hours;
            days = '';
            console.log('hours');
        } else {
            console.log('failed');
        }

        try {
            console.log(total);

        } catch(error) {
            console.log('could not add'+ error);
        }

        console.log(name, surname, pay);

        document.getElementById('employeeList').innerHTML += '<li> <p>First name: ' + name + '</p><p>Surname: ' + surname + '</p><p>Pay: ' + pay + '</p><p>Hours done: ' + hours + '</p> <p>Days done: ' + days + '</p> <p>Paid in total: ' + total + '</p></li>';
    }
}
function monthly() {
    document.getElementById('hours').style.display = 'none';
    document.getElementById('days').style.display = 'none';
    employeeType = 'monthly';
}
function hourly() {
    document.getElementById('days').style.display = 'none';
    document.getElementById('hours').style.display = 'block';
    employeeType = 'hourly';
}
function contractor() {
    document.getElementById('hours').style.display = 'none';
    document.getElementById('days').style.display = 'block';
    employeeType = 'contractor';
}
