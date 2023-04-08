let txt = document.getElementById("id-txt");

const btn = document.getElementById("id-btn");
const word = document.getElementById("id-word");
const def = document.getElementById("id-def");

btn.addEventListener('click',()=>{
    if(txt){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '51e6fdfbc0msh096a037733c7338p15d68fjsn2b63092ffde6',
                'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+txt.value, options)
            .then(response => response.json())
            .then((response) =>{

                word.textContent = response['word'];
                def.textContent = response['definition'];

                 console.log(response)
            })
            .catch((err) =>{
                alert("Unknown error occured...")
                console.error(err)
            });

    }else{
        alert("Please enter something...")
    }

},false);

const speakBtn = () => {

    let speech = new SpeechSynthesisUtterance();
    if ("speechSynthesis" in window) {
        let val = txt.value;
        if (txt) {
            speech.text = val;
            speech.rate = 1;
            speech.pitch = 10;
            speech.lang = "en-US";
            speechSynthesis.speak(speech);
            text.value = "";
        } else {
            alert("Please enter something");
        }
    } else {
        alert("Speech System is not supported by your browser");
    }

}
