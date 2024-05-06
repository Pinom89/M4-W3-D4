document.addEventListener("DOMContentLoaded", function () {
const userId = new URLSearchParams(window.location.search).get("id");
console.log("ID utente:", userId);

/*
// Recupero la stringa (ID) relativa al post che mi ha portato qua
    const parametro = new URLSearchParams(window.location.search);
    console.log(parametro);
    // Estraggo il valore del parametro "postID" dalla QS
    const id = parametro.get("userId");
    console.log(id); // Log di verifica
*/

  
    // Fetch!
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json()) // Convertiamo in json la response
      .then((dato) => {
        // Recupero l'elemento del DOM con id"datiConsumatore" e inserisco i dettagli
        const datiConsumatore = document.getElementById("datiConsumatore");
        // Imposto il contenuto interno dell'elemento con i dettagli del post ricevuti dall'API
        datiConsumatore.innerHTML = `   
         <ul class="list-group">
            <li class="list-group-item"><strong> Angrafica completa </strong> </li>
            <li class="list-group-item">Nome completo: ${dato.name} </li>
            <li class="list-group-item">Username: ${dato.username} </li>
            <li class="list-group-item">Adress: ${dato.address.street} ${dato.address.suite} ${dato.address.city} ${dato.address.zipcode}</li>
            <li class="list-group-item">Company: ${dato.company.name}</li>
            <li class="list-group-item">Telefone: ${dato.phone}</li>
            <li class="list-group-item">Email: ${dato.email}</li>
            <li class="list-group-item">Web site: ${dato.website}</li>
        </ul>`
      });
    
      rimuoviSpinner()
    });

    function rimuoviSpinner() {
        const spinner = document.getElementById ("spinner")
        spinner.classList.add("d-none");
    }