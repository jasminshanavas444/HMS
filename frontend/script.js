// Search doctors
function searchDoctor() {
    const input = document.getElementById('doctorSearch').value.toLowerCase();
    const table = document.getElementById('doctorTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td && td.textContent.toLowerCase().includes(input)) {
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
}

// Search patients
function searchPatient() {
    const input = document.getElementById('patientSearch').value.toLowerCase();
    const table = document.getElementById('patientTable');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td && td.textContent.toLowerCase().includes(input)) {
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
}

// Add new patient
function addPatient() {
    const name = document.getElementById('newPatientName').value;
    const age = document.getElementById('newPatientAge').value;
    const condition = document.getElementById('newPatientCondition').value;

    if (name && age && condition) {
        const table = document.getElementById('newPatientTable');
        const row = table.insertRow();
        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = age;
        row.insertCell(2).innerText = condition;

        document.getElementById('newPatientName').value = '';
        document.getElementById('newPatientAge').value = '';
        document.getElementById('newPatientCondition').value = '';
    } else {
        alert('Please fill in all fields');
    }
}
