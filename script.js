let students = [];

document.getElementById('submit-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('roll-no').value;
    const classVal = document.getElementById('class').value;

    const student = {
        name,
        rollNo,
        class: classVal
    };

    students.push(student);
    displayStudents();
    document.getElementById('student-form').reset();
});

function displayStudents() {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNo}</td>
            <td>${student.class}</td>
            <td><button class="delete-btn" data-index="${index}">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });

    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            students.splice(index, 1);
            displayStudents();
        });
    });
}


