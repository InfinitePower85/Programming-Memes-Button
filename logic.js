const dog_btn = document.getElementById('jokeButton');
const dog_result = document.getElementById('jokeResult');
console.log(dog_result);
console.log(dog_btn);
dog_btn.addEventListener('click', getRandomJoke);

const garbage_btn = document.getElementById('g_button');
const ok_button = document.getElementById('ok_button');
const rating = document.getElementById('rating1');

let dt_btn = null;

garbage_btn.addEventListener('click', rateDown);
ok_button.addEventListener('click', rateUp);

/*async function dogButton() {
  for (let i = 0; i < dog_results.length; i++) {
    const urll = await getRandomDog();
    console.log(urll + " this is the url");
    dog_results[i].innerHTML = `<img src=${urll} alt="dog"/>`;
  }
}*/

function rateDown() {
    console.log("That joke was garbage");
    rating.innerHTML = `<p> There goes 5 seconds you won't get back! </p>
                        <button class = "dt" id="dt_btn"> Send Death Threats </button>
                        <div id="death_counter"></div>`;
    dt_btn = document.getElementById('dt_btn');
    console.log(dt_btn);
    dt_btn.addEventListener('click', sendDT);
}

dt_ctr = 0;
function sendDT() {
    dt_ctr += 1;
    console.log("you have sent dt");
    s = 's'
    if (dt_ctr == 1) {
        s = '';
    }

    document.getElementById('death_counter').innerHTML = `<p> You have sent ${dt_ctr} death threat${s}`;
}

function rateUp() {
    console.log("meh, that was ok");
    rating.innerHTML = `<p> I guess that meme was alright, any death threats have been rescinded </p>`;
    dt_ctr = 0;
}

let number = 0;
let data = null;
let fetched = false;
async function getRandomJoke() {
    console.log("loding");
    if (!fetched) // should be only one api call per page 
    {
        console.log("APi calling now ");
        let response = await fetch("https://programming-memes-images.p.rapidapi.com/v1/memes", {

        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5c9c6c3bbcmsh492f7c3590925dfp1ae8d6jsnef696100a3fe',
            'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
        }
        });
        console.log(response);
        data = await response.json();
        console.log(data[0].image);
        fetched = true;
    }

    dog_result.innerHTML = `<img src=${data[number].image} alt="imageHere">`;
    number += 1;
    number = number % 12;
    /*response.then((res) => res.json())
    .then((data) => {
        console.log("debug");
        console.log(data.image);
        dog_result.innerHTML = `<img src=${data.image} alt="imageHere/>`;
    });*/
  /*fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then(data => {
        console.log(`${data.url}`)
        if(data.url.includes('.mp4')) {
            return getRandomDog();
        } else {
            
          return data.url;
        }
  })*/
  return "No data fetched yet";
}
console.log("hello world")