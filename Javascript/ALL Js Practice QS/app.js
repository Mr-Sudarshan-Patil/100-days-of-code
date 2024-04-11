// // // Example -1
// // // ====================================================================================================
// // // let h1= document.querySelector("h1");
// // // let h3= document.querySelector("h3");
// // // let p= document.querySelector("p");
// // // let btn= document.querySelector("button");

// // // Bad programmer use same things repeated

// // // h1.addEventListener('click', function(){
// // //     console.dir(this.innerText);
// // //     this.style.backgroundColor= "red";
// // // })
// // // h3.addEventListener('click', function(){
// // //     console.dir(this.innerText);
// // //     this.style.backgroundColor= "red";
// // // })
// // // p.addEventListener('click', function(){
// // //     console.dir(this.innerText);
// // //     this.style.backgroundColor= "red";
// // // })
// // // btn.addEventListener('click', function(){
// // //     console.dir(this.innerText);
// // //     this.style.backgroundColor= "red";
// // // })

// // // Good programmer avoid to write things repeatedly insted of create a single function and call them again where we can use 

// // // let bgColor = function(){
// // //     console.dir(this.innerText);
// // //     this.style.backgroundColor= "red";
// // // }

// // // h1.addEventListener('click', bgColor);

// // // h3.addEventListener('click', bgColor);

// // // p.addEventListener('click', bgColor);

// // // btn.addEventListener('click', bgColor);

// // // ==========================================================================================================================






// // // Example -2

// // // let input = document.querySelector("input");


// // // Keydown means key is pressed

// // // input.addEventListener('keydown', function(){
// // //     console.log("Key is pressed");
// // // })


// // // Keyup means key is pressed

// // // input.addEventListener('keyup', function(){
// // //     console.log("Key is realies");
// // // })


// // // Which key is pressed check

// // // input.addEventListener('keydown', function(event){
// // //     console.log(event.key);  //a
// // //     console.log(event.code); //KeyA
// // //     console.log("Key is pressed");
// // // })


// // // Player Controller ArrowUp  ArrowDown ArrowRight ArrowLeft  

// // // input.addEventListener('keydown', function(event){
// // //     console.log("Code", event.code); //KeyA
    
// // //     if(event.code == "ArrowUp"){
// // //         console.log("Player Moved Up");
// // //     }
// // //     else if(event.code == "ArrowDown"){
// // //         console.log("Player Moved Down");
// // //     }
// // //     else if(event.code == "ArrowRight"){
// // //         console.log("Player Moved Right");
// // //     }
// // //     else if(event.code == "ArrowLeft"){
// // //         console.log("Player Moved Left");
// // //     }
// // //     else{
// // //         console.log("invalied key");
// // //     }
// // // })







// // // Example 3


// // // let form = document.querySelector("form");

// // // form.addEventListener('submit', function(event){
// // //     event.preventDefault();

// // //     console.log("Hello Sudarshan");

// // //     let inp = document.querySelector("#usernameInput");
// // //     console.dir(inp);
// // //     console.log(inp.value);
// // // });


// // // Example 3    Change / input



// // //========================change=====================================

// // // let form = document.querySelector("form");

// // // form.addEventListener('submit', function(event){
// // //     event.preventDefault();

// // // });

// // // let user = document.querySelector("#user");
// // // let pass= document.querySelector("#pass");

// // // user.addEventListener("change", function(){
// // //     console.log("Your username is: ", this.value);
// // // })

// // // pass.addEventListener("change", function(){
// // //     console.log("Your Pass is : ", this.value);
// // // })



// // //========================input=====================================


// // // let form = document.querySelector("form");

// // // form.addEventListener('submit', function(event){
// // //     event.preventDefault();

// // // });

// // // let user = document.querySelector("#user");
// // // let pass= document.querySelector("#pass");
// // // let h1 = document.querySelector("h1");

// // // user.addEventListener("input", function(){
// // //     console.log("Your username is: ", this.value);
// // //     h1.innerText = this.value;
// // // })

// // // user.addEventListener("mouseout", (event) => {
// // //     console.log("Mouse out");
// // // });

// // // pass.addEventListener("input", function(){
// // //     console.log("Your Pass is : ", this.value);
// // // })

// // // let btn = document.createElement("button");
// // // btn.innerText="Click me";

// // // let body = document.querySelector('body');

// // // body.append(btn);

// // // btn.addEventListener('click', ()=>{btn.style.color="green"});
// // // btn.addEventListener('dblclick', ()=>{btn.style.color="blue"});


// // // let user = document.querySelector("#user1");  

// // // user.addEventListener('input', function(){
// // //     validateInput(user.value)   
// // // })


// // // function validateInput(input) {
// // //     let char = /^[a-zA-Z\s]+$/;
// // //     if (!char.test(input)) {
// // //         alert("Please enter only alphabetical characters (a to z and A to Z)!");
// // //     }
// // // }




// // // Call Stack

// // // function hello(){
// // //     console.log("hello");
// // // }


// // // function demo(){
// // //     console.log("Calling hello fnx");
// // //     hello();
// // // }

// // // console.log("Calling demo fnx");
// // // demo();

// // // console.log("functions over");

// // // Calling demo fnx
// // // callinghello fnx
// // // hello
// // // functions ove


// // // function one(){
// // //     return 1;
// // // }

// // // function two(){
// // //     return one() + one();
// // // }

// // // function three(){
// // //     let ans= two()+one();
// // //     console.log(ans);
// // // }

// // // //
// // // //two
// // // //three

// // // console.log("Calling function three")
// // // three();


// // // let h1 = document.querySelector("h1");


// // // setTimeout(()=>{
// // // h1.style.color="red";
// // // },1000);

// // // setTimeout(()=>{
// // //     h1.style.color="orange";
// // //     },2000);

// // // setTimeout(()=>{
// // //         h1.style.color="green";
// // //         },3000);

// // // setTimeout(()=>{
// // //             h1.style.color="pink";
// // //             },4000);



// // // function changeColor(colorName , delay){
// // //     setTimeout(()=>{
// // //         h1.style.color = colorName;
// // //     }, delay)
    
// // // }

// // // changeColor("red", 1000);
// // // changeColor("orange", 2000);
// // // changeColor("green", 3000);



// // // CallBack

// // // let h1 = document.querySelector("h1");

// // // function changeColor(colorName , delay , nexColorChange){
// // //     setTimeout(()=>{
// // //         h1.style.color = colorName;
// // //         nexColorChange();
// // //     }, delay)
    
// // // }

// // // changeColor("red", 1000 , ()=>{
// // //     changeColor("orange", 1000, ()=>{
// // //         changeColor("green", 1000 , ()=>{
// // //             changeColor("pink", 1000);
// // //         });
// // //     });
// // // });


// // // red is our color
// // // 1000 1s is our delay
// // // nextColor we have added arrow function and call them ass a next color like orange then green.

// // // changeColor("red", 1000 , ()=>{
// // //     changeColor("orange", 1000, ()=>{
// // //         changeColor("green", 1000);
// // //     });  // this is our callback hell 


// // // CallBack Nesting ==> Callback Hell

// // // Avoid call back hello javascript inroduce ==>  Promised Asyn and await




// // // input.addEventListener("input", function(){
// // //     console.log(input.value);
// // //     h2.innerText=input.value;
// // // });



// // // let input=document.querySelector("input");
// // // let h2=document.querySelector("h2");

// // // input.addEventListener('input', function(){
// // //     let value = this.value;
// // //     var filteredVal = value.replace(/[^a-zA-Z\s]/g, "");
// // //     if (filteredVal !== value) {
// // //             this.value = filteredVal; // Update input value with filtered value
// // //     }
// // //     h2.innerText = filteredVal;
// // // })







// // //==============================================[Promises]===================================================






// // // function savetoDb(data){
// // //     let speed = Math.floor(Math.random()*10)+1;
// // //     if(speed>4){
// // //         console.log("Data saved", data);
// // //     }
// // //     else{
// // //         console.log("Week Connection, Data not saved", data);
// // //     }
// // // }

// // // savetoDb("apna college");




// // // function savetoDb(data, success, failure){
// // //     let speed = Math.floor(Math.random()*10)+1;
// // //     if(speed>4){
// // //         success();
// // //     }
// // //     else{
// // //         failure();
// // //     }
// // // }

// // // savetoDb("apna college", 
// // // ()=>{
// // //     console.log("Success: Data saved");
// // //         savetoDb("hello world", 
// // //         ()=>{
// // //             console.log("Success2: Data saved");
// // //         },
// // //         ()=>{
// // //             console.log("failure2: Data Not Saved due to week connection");
// // //     } )
// // // }, 
// // // ()=>{
// // //     console.log("failure: Data Not Saved due to week connection");
// // // });  


// // // Promises means success or failure
// // // Promise is an object == > resolev (success) and reject (failure)




// // // function savetoDb(data){
// // //     return new Promise((resolve, reject)=>{    
// // //     let speed = Math.floor(Math.random()*10)+1;

// // //     if(speed>4){
// // //         resolve("Data Save");
// // //     }
// // //     else{
// // //         reject("Week connection, Data not saved");
// // //     }

// // //     })
// // // }

// // // savetoDb("apna college");



// // // Promises is object and its onw methods
// // //promises having a two methods that is then() and catch()
// // // when we want to set any work while fulfilled then we use then() method and for reject we use catch() method

// // // function savetoDb(data){
// // //     return new Promise((resolve, reject)=>{    
// // //     let speed = Math.floor(Math.random()*10)+1;

// // //     if(speed>4){
// // //         resolve("Data Save");
// // //     }
// // //     else{
// // //         reject("Week connection, Data not saved");
// // //     }

// // //     })
// // // }

// // // let request = savetoDb("apna college");

// // // // console.log(request);
// // // request.then(()=>{
// // //     console.log("Promise was resolve");
// // //     console.log(request);
// // // })
// // // .catch(()=>{
// // //     console.log("Promise was rejected");
// // //     console.log(request);
// // // })





// // // function savetoDb(data){
// // //     return new Promise((resolve, reject)=>{    
// // //     let speed = Math.floor(Math.random()*10)+1;

// // //     if(speed>4){
// // //         resolve("Data Save");
// // //     }
// // //     else{
// // //         reject("Week connection, Data not saved");
// // //     }

// // //     })
// // // }

// // // savetoDb("apna college")
// // // .then(()=>{
// // //     console.log("Promise was resolve");
// // // })
// // // .catch(()=>{
// // //     console.log("Promise was rejected");
// // // })



// // // Promises Chainnig => multiple then we us

// // // Promises => Improved version



// // // function savetoDb(data){
// // //     return new Promise((resolve, reject)=>{    
// // //     let speed = Math.floor(Math.random()*10)+1;

// // //     if(speed>4){
// // //         resolve("Data Save");
// // //     }
// // //     else{
// // //         reject("Week connection, Data not saved");
// // //     }

// // //     })
// // // }

// // // E.g 1
// // // savetoDb("apna college")
// // // .then(()=>{
// // //     console.log("Data 1: saved");
// // //     savetoDb("Hello word").then(()=>{
// // //         console.log("Data 2: saved");
// // //     })
// // // })
// // // .catch(()=>{
// // //     console.log("Promise was rejected");
// // // })

// // // E.g 2
// // // savetoDb("apna college")
// // // .then(()=>{
// // //     console.log("Data 1: saved");
// // //     return savetoDb("Hello word")
// // // })
// // // .then(()=>{
// // //     console.log("Data 2: saved");
// // //     return savetoDb("Hellow sudarshan");
// // // })
// // // .then(()=>{
// // //     console.log("Data3: saved");
// // // })
// // // .catch(()=>{
// // //     console.log("Promise was rejected");
// // // })


// // // E.g 3

// // // function savetoDb(data){
// // //     return new Promise((resolve, reject)=>{    
// // //     let speed = Math.floor(Math.random()*10)+1;

// // //     if(speed>4){
// // //         resolve("Data Save");
// // //     }
// // //     else{
// // //         reject("Week connection, Data not saved");
// // //     }

// // //     })
// // // }

// // // savetoDb("apna college")
// // // .then((result)=>{
// // //     console.log("Data 1: saved");
// // //     console.log(result);
// // //     return savetoDb("Hello word")
// // // })
// // // .then((result)=>{
// // //     console.log("Data 2: saved");
// // //     console.log(result);
// // //     return savetoDb("Hellow sudarshan");
// // // })
// // // .then((result)=>{
// // //     console.log("Data3: saved");
// // //     console.log(result);
// // // })
// // // .catch((error)=>{
// // //     console.log("Promise was rejected");
// // //     console.log(error);
// // // })




// // //============================================[Promises End]=================================================




// // // let h1 = document.querySelector("h2");

// // // function changeColor(colorName , delay){
// // //    return new Promise((resolve, reject)=>{
// // //         setTimeout(()=>{
// // //             h1.style.color = colorName;
// // //             resolve("Color changed");
// // //         }, delay)
// // //     });
// // // }

// // // changeColor("red", 1000 , ()=>{
// // //     changeColor("orange", 1000, ()=>{
// // //         changeColor("green", 1000 , ()=>{
// // //             changeColor("pink", 1000);
// // //         });
// // //     });
// // // });

// // // let request=changeColor("red", 1000);
// // // request.then((result)=>{
// // //     console.log(result);
// // //     return changeColor("orange", 1000);
// // // })
// // // .then((result)=>{
// // //     console.log(result);
// // //     return changeColor("green", 1000);
// // // })



// // let h2 = document.querySelector("h2");

// // function changeColor(color, delay){
// //     let p= new Promise((resolve, reject)=>{
// //         setTimeout(()=>{
// //             h2.style.color= color;
// //             resolve();
// //         }, delay);
// //     });
// //     return p;
// // }


// // async function demo(){
// //     try{
// //         await changeColor("red",1000);
// //         await changeColor("blue",1000);
// //         await changeColor("pink",1000);
// //         await changeColor("orange",1000);
// //         await changeColor("red",1000);
// //         await changeColor("blue",1000);
// //         await changeColor("pink",1000);
// //     }

// //     catch(error){
// //         console.log("error caught");
// //         console.log(error);
       
       
// //     }
// //     await changeColor("orange",1000);
// //         await changeColor("red",1000);
// //         await changeColor("blue",1000);
// //         await changeColor("pink",1000);
// //         await changeColor("orange",1000);
// //         changeColor("red",1000);
  
// // }

// // demo();



// // APIS

// // Application Programming Interface


// // Our First Request

// // Using Fetch

// // let url= "https://catfact.ninja/fact"; 
// // fetch(url)
// // .then((res)=>{
// //     console.log(res);
// //     return res.json()
// // })
// // .then((data)=>{
// //     console.log(data);
// //     console.log(data.fact);
// // })
// // .catch((err)=>{
// //     console.log("Error --", err);
// // })


// // let url= "https://catfact.ninja/fact"; 

// // async function getFacts(){
// //     try{
// //         let res = await fetch(url);
// //         let data = await res.json();
// //         console.log(data.fact);
// //     } catch(e){
// //         console.log("Error :" , e);
// //     }
 
// // }



// // Axios : Exact jason data pad we note need to parse them to like fetch

// // let url= "https://catfact.ninja/fact";

// // async function getFacts(){
// //     try{
// //         let res = await axios.get(url);
// //         console.log(res.data.fact);
// //     } catch(e){
// //         console.log("Error :" , e);
// //     }
 
// // }







// let url = "https://catfact.ninja/fact";
// let h2 = document.querySelector("h2");
// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {   
//     getFack()
//         .then(fact => {
//             console.log(fact);
//             // You can update the UI here if needed
//         })
//         .catch(err => {
//             console.log("Error:", err);
//             // Handle error if needed
//         });
// });

// function getFack() {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(data => {
//             return data.fact;
//         })
//         .catch(err => {
//             console.log("Error:", err);
//             throw new Error("No Fact Found");
//         });
// }



// let url = "https://catfact.ninja/fact";



// async function getFacts(){
//     try{
//         let res= await fetch(url);
//         let data=await res.json();
//         console.log(data.fact);

//         let res2= await fetch(url);
//         let data2=await res2.json();
//         console.log(data2.fact);
//     }
//     catch (er){
//         console.log("error: ", er);
//     }
   
// }





// let url = "https://catfact.ninja/fact";
// let h2 = document.querySelector("h2");
// let btn = document.querySelector("button");

// btn.addEventListener("click",async ()=>{
//     console.log("Btn Was Click");
//     let fact = await getFacts();
//     console.log(fact);
//     h2.innerText=fact;
// })
// async function getFacts(){
//     try{
//     let res = await axios.get(url);
//     // console.log(res);
//     // console.log(res.data);
//     // console.log(res.data.fact);
//     return res.data.fact;
//     }catch(err){
//         console.log("error: ", err);
//         return "No Fact Found";
//     }
// }



// let url="https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// let image = document.querySelector("img");

// btn.addEventListener("click", ()=>{
//     console.log("Btn was click")
//     getImg()
//     .then((data) => {
//         console.log(data);
//         image.setAttribute("src", data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
    
// })

// function getImg(){
//     return fetch(url).then((res)=>{
//         return res.json();
//        })
//        .then((data)=>{
//         //    console.log(data);
//            return data.message;
//        })
//        .catch((err)=>{
//         return "Image url not found";
//        })
// }





// let url="https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// let image = document.querySelector("img");

// btn.addEventListener("click", async ()=>{
//     let data = await getImg();
//     console.log(data);
//     image.setAttribute("src", data);
// })


// async function getImg(){

//     try{

//         let img = await fetch(url);
//         let source= await img.json();
//         // console.log(source.message);
//         return source.message;
//     }
//     catch(e){
//         return "Image not found";
//     }

// }



// let url="https://dog.ceo/api/breeds/image/random";

// let btn = document.querySelector("button");
// let image = document.querySelector("img");

// btn.addEventListener("click", async ()=>{
//     let link = await getImg();
//     console.log(link);
//     image.setAttribute("src", link);
// })

// async function getImg(){
//     try{
//         let img = await axios.get(url);
// //     console.log(img);
//     return img.data.message;
 
//     }
//     catch(e){
//         return "Img link not found";
//     }
// }





// Sending Header with API reuest


// const url ="https://icanhazdadjoke.com/"



// async function getJoke(){
//     try{

//         const header={headers:{Accept: "application/json"}};
//         let res=await axios.get(url, header);
//         console.log(res.data.joke);

//     }catch(e){
//         console.log("ERROR" , e);
//     }
// }







