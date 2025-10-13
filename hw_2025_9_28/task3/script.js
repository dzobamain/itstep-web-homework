class Employee 
{
    constructor(name, position, age) {
        this.name = name;
        this.position = position;
        this.age = age;
    }
}

const bankEmployees = [
    new Employee("John Smith", "Bank Manager", 40),
    new Employee("Alice Johnson", "Accountant", 32),
    new Employee("Michael Brown", "Cashier", 28),
    new Employee("Emily Davis", "Loan Officer", 35),
    new Employee("Robert Wilson", "Security Guard", 45)
];

class EmpTable 
{
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() 
    {
        let html = '<table>';
        html += '<tr><th>Name</th><th>Position</th><th>Age</th></tr>';
        for (let emp of this.employees) {
            html += `<tr><td>${emp.name}</td><td>${emp.position}</td><td>${emp.age}</td></tr>`;
        }
        html += '</table>';
        return html;
    }
}

const empTable = new EmpTable(bankEmployees);
document.getElementById('table').innerHTML = empTable.getHtml();
