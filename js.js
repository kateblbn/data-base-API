const urlApi = 'https://jsonplaceholder.typicode.com/users';
const names = document.querySelector('.names');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const err = document.querySelector('.err');


fetch(urlApi)
      .then(response => response.json())
      .then(json => getUsers(json) )


function getUsers(json) {
    console.log(json);
    json.forEach( el => { 
        let template = `
        <div class="base__people">
        <p class="base__people-name">Name : ${el.name}</p>
        <p class="base__people-website"> Website:  <a href="${el.website}">${el.website}</a> </p>
        <p class="base__people-company">Company: ${el.company.name}</p>
        </div>
        `
    names.innerHTML += template;
    })

    btn.addEventListener('click', findInfo);

    function findInfo() {
        let valueInfo = search.value;
        for (let i = 0; i < json.length; i++) {
            const element = json[i];
            if (valueInfo === element.name) {
                let showInfo = `
                <div class="base__people">
                <h3 class="title">We found : </h3>
                <p class="base__people-name">Name: ${element.name}</p>
                <p class="base__people-email">Email: ${element.email}</p>
                <p class="base__people-company">Company: ${element.company.name}</p>
                </div>
                `
                names.innerHTML = showInfo;
                break;
             }   
              else if (valueInfo !== element.name) {
                let noFind = `
                <p class="error">Not find! Try again</p>`
                names.innerHTML = noFind;
            }
        } 
    }
}

