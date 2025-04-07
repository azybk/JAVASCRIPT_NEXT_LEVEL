// contoh 1
// let janji = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(janji) {
//         resolve("ditepati");

//     } else {
//         reject("tidak ditepati");
//     }
// })

// janji1
//     .then(response => console.log("OK " + response))
//     .catch(response => console.log("NOT OK " + response))


// contoh 2
// let janji = true
// const janji2 = new Promise((resolve, reject) => {
//     if(janji) {
//         setTimeout(() => {
//             resolve("ditepati")
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             reject("tidak ditepati")
//         }, 2000)
//     }
// })

// console.log('mulai')
// // console.log(janji2)
// // console.log(
// //     janji2.then(() => console.log(janji2))
// //     // janji2.catch(() => console.log(janji2))
// // )
// janji2
//     .finally(() => console.log('selesai menunggu'))
//     .then(() => console.log(janji2))
//     .catch(() => console.log(janji2))
// console.log('selesai')


// contoh 3
let kondisi = true
const film = new Promise((resolve, reject) => {
    if(kondisi) {
        setTimeout(() => {
            resolve([{
                judul: 'avengers',
                sutradara: 'aink',
                pemeran: 'aink, este, thea'
            }])
        }, 1000)
    } else {
        setTimeout(() => {
            reject([{
                data: "data film tidak ditemukan"
            }])
        }, 1000)
    }
})

const cuaca = new Promise((resolve, reject) => {
    if(kondisi) {
        setTimeout(() => {
            resolve([{
                kota: 'jakarta',
                suhu: 26,
                kondisi: 'cerah berawan'
            }])
        }, 500)
    } else {
        setTimeout(() => {
            reject([{
                data: "data cucaca tidak ditemukan"
            }])
        }, 500)
    }
})

// film
//     .then(response => console.log(response))
//     .catch(response => console.log(response))

// cuaca
//     .then(response => console.log(response))
//     .catch(response => console.log(response))

Promise.all([film, cuaca])
    // .then(response => console.log(response))
    .then(response => {
        const [film, cuaca] = response
        console.log(film)
        console.log(cuaca)
    })
