const table = document.querySelector("table");
const tbody = table.querySelector("tbody");

const data = [
    {
        grupo: "Grupo 1",
        geo: "Geografía 1",
        fEntrada: "10/10/2022",
        fExigida: "10/10/2022",
        usuario: "Usuario 1",
        nombreProyecto: "Proyecto 1",
        idProyecto: "123456789",
    },
    {
        grupo: "Grupo 2",
        geo: "Geografía 2",
        fEntrada: "10/10/2022",
        fExigida: "10/10/2022",
        usuario: "Usuario 2",
        nombreProyecto: "Proyecto 2",
        idProyecto: "987654321",
    },
    {
        grupo: "Grupo 3",
        geo: "Geografía 3",
        fEntrada: "10/10/2022",
        fExigida: "10/10/2022",
        usuario: "Usuario 3",
        nombreProyecto: "Proyecto 3",
        idProyecto: "456789123",
    },
    {
        grupo: "Grupo 4",
        geo: "Geografía 4",
        fEntrada: "10/10/2022",
        fExigida: "10/10/2022",
        usuario: "Usuario 4",
        nombreProyecto: "Proyecto 4",
        idProyecto: "567891234",
    },
    {
        grupo: "Grupo 5",
        geo: "Geografía 5",
        fEntrada: "10/10/2022",
        fExigida: "10/10/2022",
        usuario: "Usuario 5",
        nombreProyecto: "Proyecto 5",
        idProyecto: "678912345",
    },
    {
        grupo: "Grupo 6",
        geo: "Geografía 6",
        fEntrada: "10/10/2022",
        fExigida: "10/10/2022",
        usuario: "Usuario 6",
        nombreProyecto: "Proyecto 6",
        idProyecto: "789123456",
    },
];

data.forEach((item) => {
    const tr = document.createElement("tr");
    const tdGrupo = document.createElement("td");
    const tdGeo = document.createElement("td");
    const tdfEntrada = document.createElement("td");
    const tdfExigida = document.createElement("td");
    const tdUsuario = document.createElement("td");
    const tdNombreProyecto = document.createElement("td");
    const tdIdProyecto = document.createElement("td");

    tdGrupo.textContent = item.grupo;
    tdGeo.textContent = item.geo;
    tdfEntrada.textContent = item.fEntrada;
    tdfExigida.textContent = item.fExigida;
    tdUsuario.textContent = item.usuario;
    tdNombreProyecto.textContent = item.nombreProyecto;
    tdIdProyecto.textContent = item.idProyecto;

    tr.appendChild(tdGrupo);
    tr.appendChild(tdGeo);
    tr.appendChild(tdfEntrada);
    tr.appendChild(tdfExigida);
    tr.appendChild(tdUsuario);
    tr.appendChild(tdNombreProyecto);
    tr.appendChild(tdIdProyecto);

    tbody.appendChild(tr);
});