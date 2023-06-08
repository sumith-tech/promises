console.log('person1:shows ticket')
console.log('person2:shows ticket')

const preMovie= async ()=>{

    const promiseWifeTicket= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket')
        },3000)
    })

    const getPopcorn=new Promise((resolve,reject)=>{
        resolve('Popcorn')
    })

    const getButter=new Promise((resolve,reject)=>{
        resolve('butter')
    })

    const getColdDrinks= new Promise((resolve,reject)=>{
        resolve('Pepsi')
    }) 

    const ticket= await promiseWifeTicket;
    console.log(`Wife:I have the ${ticket}`)
    console.log('Hus:we should go in')
    console.log('Wife:I want some popcorn')

    const popcorn= await getPopcorn;
    console.log(`Hus:i got ${popcorn}`)
    console.log('Wife:I need butter in it')

    const butter= await getButter;
    console.log(`Hus:i got ${butter}`)
    console.log('Wife:I need cold Drinks babe')

    const pepsi= await getColdDrinks;
    console.log(`Hus:Here your ${pepsi}`)
    console.log('Wife:Alright less goo')

    //promise all

// let [popcorn,butter,pepsi]= await Promise.all([getPopcorn,getButter,getColdDrinks]);
//     console.log(`${popcorn},${butter},${pepsi}`)

    return ticket
}
preMovie().then((m)=>console.log(`shows ${m}`))