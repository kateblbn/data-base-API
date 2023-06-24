let link = 'https://jsonplaceholder.typicode.com/photos'; 
const photo = document.querySelector('.photo');
const button = document.querySelector('.button');
const el = document.querySelector('.el');
const container = document.querySelector('.container');


fetch(link)
      .then(response => response.json())
      .then(json => getPhoto(json))

      function getPhoto(json) {
            for (let i = 0; i < json.length; i++) {
                const elem = json[i];                
                if ( elem.id <= 100) {
                    el.innerHTML += `<div class="elements"><img src="${elem.url}" alt=""></div>
                    ` ;
                }
            }
        }

        button.addEventListener('click', () => {
            container.classList.toggle('show')
        })