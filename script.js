

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '75a0498866mshf03dbfff55789fcp1e9e4cjsn345b65dbad7b',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {
            
            // console.log(response)
            wordheading.innerHTML=response.word;
            definition.innerHTML=response.definition.replace("1.","<br>1.").replace("2.","<br><br>2.").replace("3.","<br><br>3.").replace("4.","<br><br>4").replace("5.","<br><br>5").replace("6.","<br><br>6").replace("7.","<br><br>7").replace("8.","<br><br>8").replace("9.","<br><br>9").replace("10.","<br><br>10");
            
        })
        .catch(err => console.error(err));
}
searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})
// if(response.definition.length===0)
// {
//     console.log("Please enter valid english word")
// }