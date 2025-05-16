// function buyApple1(num){

//     if (num < 5){
//         return Promise.resolve(`Van ${num} alma`)
//     }
//     else{
//         return Promise.reject(`Nincs ennyi almánk`)
//     }

// }

// const almaigeret = buyApple1(4)


// almaigeret.then(value =>{
//     console.log(value)
// })
// //console.log(almaigeret)

// buyApple1(6).catch(error => {
//     console.log(error)
// });

// //console.log(almaigeret)

// buyApple1(4).then(value2 =>{
//     console.log(value2)
// }).catch(error2 => {console.log(error2)})

// //console.log(almaigeret)


// function buyApple2(num){
    
// return new Promise((resolve, reject)=>{
//     if (num < 5){
//         resolve(`Van ${num} alma`)
//     }
//     else{
//        reject(`Nincs ennyi almánk`)
//     }
// })
// }

// //const almaigeret2 = buyApple2(4)


// //buyApple2(4).then(value2 =>{
//  //   console.log(value2)
// //}).catch(error2 => {console.log(error2)})

// //console.log(almaigeret)


// function buyApple3(num){
    
//     return new Promise((resolve, reject)=>{
//         if (num < 5){
//             setTimeout(() => {resolve(`Van ${num} alma`)},1000)
//         }
//         else{
//            reject(`Nincs ennyi almánk`)
//         }
//     })

    
//     }


//    // buyApple3(4).then(value2 =>{
//      //   console.log(value2)
//     //}).catch(error2 => {console.log(error2)})
        