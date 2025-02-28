// const fs = require('fs')


/////To Create Directory/////////////

// fs.mkdir('./new', (err) => {
//     if (err) throw err
//     console.log('Directory created')
// })

//To delete directory if it exists or create it if it doesnt exist, we can follow this
// if(fs.existsSync('./new')){
//     fs.rmdir('./new', (err) => {
//         if (err) throw err
//         console.log('Directory created')
//     })
// }
// if(!fs.existsSync('./new')){
//     fs.mkdir('./new', (err) => {
//         if (err) throw err
//         console.log('Directory created')
//     })
// }