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

class StyledEmpTable extends EmpTable 
{
    getStyles() 
    {
        return '<link rel="stylesheet" href="style.css">';
    }

    getHtml() 
    {
        return this.getStyles() + super.getHtml();
    }
}

const employees = [
    { name: 'Name', position: 'Name-1', age: 1 },
    { name: 'Name1', position: 'Name-2', age: 2 },
    { name: 'Name2', position: 'Name-3', age: 3 }
];

const styledTable = new StyledEmpTable(employees);
document.getElementById('list').innerHTML = styledTable.getHtml();
