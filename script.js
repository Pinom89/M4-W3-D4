
const lista = document.getElementById ("lista");
const searchInput = document.getElementById("search");
let dati=[];

window.onload = async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
         dati = await response.json();
        const lista = document.getElementById("lista");
        dati.forEach(dato => {
            lista.innerHTML += `
                    <tr>
                    <th scope="row">${dato.id}</th>
                    <td>${dato.name}</td>
                    <td>${dato.username}</td>
                    <td>${dato.email}</td>
                    <td><button type="button" class="btn btn-success dettagli" data-mdb-ripple-init data-user-id="${dato.id}">Dettagli</button></td>
                </tr>
            `;
        });
        rimuoviSpinner();

        // Seleziona tutti i pulsanti "Dettagli" e aggiungi loro un event listener
        const bottoniDettagli = document.querySelectorAll(".dettagli");
        bottoniDettagli.forEach(bottone => {
            bottone.addEventListener("click", () => {
                // Reindirizza a dettagli.html passando l'ID dell'utente come parametro
                window.location = `dettagli.html?id=${bottone.getAttribute("data-user-id")}`;
            });
        });

    } catch (error) {
        console.error("Errore:", error);
    }

// Stampo i dati estratti per verificare il contenuto
console.log(dati);
};


function ricercaEmail(){
    searchInput.addEventListener("input", function () {
        // Prendo il valore corrente dell'input e lo converto in lowercase
        const searchTerm = searchInput.value.toLowerCase();
        lista.innerHTML = "";
        // Filtraggio dei dati in base ai criteri di ricerca
        const risultatiFiltrati = dati.filter((dato) => 
            dato.email.toLowerCase().includes(searchTerm)
        );
            // Aggiornamento dell'HTML della tabella con i risultati filtrati
        risultatiFiltrati.forEach((dato) => {
            lista.innerHTML += `
                <tr>
                    <th scope="row">${dato.id}</th>
                    <td>${dato.name}</td>
                    <td>${dato.username}</td>
                    <td>${dato.email}</td>
                    <td><button type="button" class="btn btn-success dettagli" data-mdb-ripple-init data-user-id="${dato.id}">Dettagli</button></td>
                </tr>
            `;
        });
          // Seleziona tutti i pulsanti "Dettagli" e aggiungi loro un event listener
          const bottoniDettagli = document.querySelectorAll(".dettagli");
          bottoniDettagli.forEach(bottone => {
              bottone.addEventListener("click", () => {
                  // Reindirizza a dettagli.html passando l'ID dell'utente come parametro
                  window.location = `dettagli.html?id=${bottone.getAttribute("data-user-id")}`;
              });
          });
    });
    }

    function rimuoviSpinner() {
        const spinner = document.getElementById ("spinner")
        spinner.classList.add("d-none");
    }

   
    
function ricercaUsername(){
    searchInput.addEventListener("input", function () {
        // Prendo il valore corrente dell'input e lo converto in lowercase
        const searchTerm = searchInput.value.toLowerCase();
        lista.innerHTML = "";
        // Filtraggio dei dati in base ai criteri di ricerca
        const risultatiFiltrati = dati.filter((dato) => 
             dato.username.toLowerCase().includes(searchTerm) 
        );
            // Aggiornamento dell'HTML della tabella con i risultati filtrati
        risultatiFiltrati.forEach((dato) => {
            lista.innerHTML += `
                <tr>
                    <th scope="row">${dato.id}</th>
                    <td>${dato.name}</td>
                    <td>${dato.username}</td>
                    <td>${dato.email}</td>
                    <td><button type="button" class="btn btn-success dettagli" data-mdb-ripple-init data-user-id="${dato.id}">Dettagli</button></td>
                </tr>
            `;
        });
          // Seleziona tutti i pulsanti "Dettagli" e aggiungi loro un event listener
          const bottoniDettagli = document.querySelectorAll(".dettagli");
          bottoniDettagli.forEach(bottone => {
              bottone.addEventListener("click", () => {
                  // Reindirizza a dettagli.html passando l'ID dell'utente come parametro
                  window.location = `dettagli.html?id=${bottone.getAttribute("data-user-id")}`;
              });
          });
    });
    }
    
    
    
function ricercaNome(){
    searchInput.addEventListener("input", function () {
        // Prendo il valore corrente dell'input e lo converto in lowercase
        const searchTerm = searchInput.value.toLowerCase();
        lista.innerHTML = "";
        // Filtraggio dei dati in base ai criteri di ricerca
        const risultatiFiltrati = dati.filter((dato) => 
            dato.name.toLowerCase().includes(searchTerm)
        );
            // Aggiornamento dell'HTML della tabella con i risultati filtrati
        risultatiFiltrati.forEach((dato) => {
            lista.innerHTML += `
                <tr>
                    <th scope="row">${dato.id}</th>
                    <td>${dato.name}</td>
                    <td>${dato.username}</td>
                    <td>${dato.email}</td>
                    <td><button type="button" class="btn btn-success dettagli" data-mdb-ripple-init data-user-id="${dato.id}">Dettagli</button></td>
                </tr>
            `;
        });
          // Seleziona tutti i pulsanti "Dettagli" e aggiungi loro un event listener
          const bottoniDettagli = document.querySelectorAll(".dettagli");
          bottoniDettagli.forEach(bottone => {
              bottone.addEventListener("click", () => {
                  // Reindirizza a dettagli.html passando l'ID dell'utente come parametro
                  window.location = `dettagli.html?id=${bottone.getAttribute("data-user-id")}`;
              });
          });
    });
    }
