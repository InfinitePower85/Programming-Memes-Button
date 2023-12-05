const joke_btn = document.getElementById('jokeButton');
const joke_result = document.getElementById('jokeResult');
joke_btn.addEventListener('click', getRandomJoke);

const garbage_btn = document.getElementById('g_button');
const ok_button = document.getElementById('ok_button');
const rating = document.getElementById('rating1');

let dt_btn = null;

garbage_btn.addEventListener('click', rateDown);
ok_button.addEventListener('click', rateUp);



function rateDown() {
    console.log("That joke was garbage");
    rating.innerHTML = `<p> There goes 5 seconds of your life that you won't get back. While you could have been looking at a good meme,
                       or better yet, watching paint dry, instead you were forced to look upon this meme. Anger and rage builds up 
                       inside of you; this "meme" hast offended your eyes. </p>
                        <button class = "dt" id="dt_btn"> Let them know exactly how you feel  </button>
                        <div id="death_counter"></div>`;
    dt_btn = document.getElementById('dt_btn');
    console.log(dt_btn);
    dt_btn.addEventListener('click', sendDT);
}

dt_ctr = 0;
numConfetti = 5;
extra_message = "";
function sendDT() {
    dt_ctr += 1;
    console.log("you have sent dt");
    s = 's'
    if (dt_ctr == 1) {
        s = '';
    }
    if (dt_ctr > 0 && dt_ctr % 20 == 0) {
      extra_message = `${dt_ctr} death threat milestone!`;
      for (i = 0; i < numConfetti; i++)
      {
        confetti({
          particleCount: 100,
          spread: 300,
          startVelocity: 20,
          scalar: 0.9,
          ticks: 180
        });
      }
    }
    document.getElementById('death_counter').innerHTML = `<p> You have sent ${dt_ctr} death threat${s}</p> <br> <p> ${extra_message}</p>`;
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

    joke_result.innerHTML = `<img src=${data[number].image} alt="imageHere">`;
    number += 1;
    number = number % 12;
  return "No data fetched yet";
}
console.log("hello world")