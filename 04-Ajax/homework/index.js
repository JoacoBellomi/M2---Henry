

const url = "http://localhost:5000/amigos"
let otra = false
const responseHandler = (listaUsuarios) => {
    if(otra) return;
    otra = true
    const [userList] = $("#lista");
    if(userList.hidden) {
        userList.hidden = false;
        return;
    }
        listaUsuarios.forEach((user, index) => {
        // if(userList)
        const newLi = document.createElement("li");
        newLi.id = index;
        newLi.innerText = user.name;
        userList.appendChild(newLi);
        
    });    

};

const [verAmigos] = $("#boton");
const [ocultar] = $("#esconder");
const [Xamigo] = $("#search");
const [BorrarAmigo] = $("#delete"); 



const search = () =>{   
    const [input] = $("#input");
    $.get(`${url}/${input.value}`, (response) => {
        const [span] = $("#amigo");
        if(!response.name) span.innerText = "No se ha encontrado el amigo";
        span.innerText = response.name;
        input.value = ""; 
    }); 
}

const [userList] = $("#lista");
const fetchUsers = () => {
    $.get(url, responseHandler);
}
esconder = () => {
    userList.hidden = true;
    otra = false;
}
const delet = () => {
     const [input] = $("#inputDelete");
    $.ajax({
        type: "DELETE",
        url: `${url}/${input.value}`
    })
    fetchUsers();
}
ocultar.addEventListener("click", esconder);
verAmigos.addEventListener("click", fetchUsers);
Xamigo.addEventListener("click", search);
BorrarAmigo.addEventListener("click", delet);
