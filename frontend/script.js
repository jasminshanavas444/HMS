const backendURL = "http://localhost:8080";

if (document.getElementById("patients")) {
  fetch(`${backendURL}/patients`)
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("patients");
      data.forEach(p => {
        table.innerHTML += `
          <tr>
            <td>${p.name}</td>
            <td>${p.age}</td>
            <td>${p.gender}</td>
          </tr>`;
      });
    });
}

if (document.getElementById("patientDetails")) {
  fetch(`${backendURL}/patients`)
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("patientDetails");
      data.forEach(p => {
        table.innerHTML += `
          <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.age}</td>
            <td>${p.gender}</td>
            <td>${p.disease}</td>
          </tr>`;
      });
    });
}

if (document.getElementById("doctors")) {
  fetch(`${backendURL}/doctors`)
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("doctors");
      data.forEach(d => {
        table.innerHTML += `
          <tr>
            <td>${d.name}</td>
            <td>${d.department}</td>
            <td>${d.time}</td>
          </tr>`;
      });
    });
}
