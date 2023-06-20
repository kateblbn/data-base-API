let link = 'https://jsonplaceholder.typicode.com/photos'; 
const photo = document.querySelector('.photo');
const button = document.querySelector('.button');
const el = document.querySelector('.el');


fetch(link)
      .then(response => response.json())
      .then(json => getPhoto(json))

      function getPhoto(json) {
console.log(json);
        // el.innerHTML = json.url;
        button.addEventListener('click', show)

        function show() {

            for (let i = 0; i < json.length; i++) {
                const elem = json[i];                
                if ( elem.id < 100) {
                    el.innerHTML += `<div class="elements"><img src="${elem.url}" alt=""></div>
                    ` ;
                }
            }
        }
      }