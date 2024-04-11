

let url= "https://catfact.ninja/fact";
let h2 = document.querySelector("h2");
let btn = document.querySelector("button");


btn.addEventListener("click", (data)=>{   
    let fact = getFack();
    console.log(fact);
});

function getFack(){
    fetch(url)
    .then((res)=>{
        let data = res.json();
        data.then((data)=>{
            return data.fact;
        })
    })
    .catch((err)=>{
        console.log("Error :- ",err);
        return "No Fact Found";
    })
    
}


