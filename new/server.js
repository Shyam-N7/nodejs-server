// import { readFile } from 'node:fs';

console.log("Hello!")

// const os = require('os')

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())
// const fs = require('fs')

//Similar to async and await in JS, we can do the same in node using the below method so that the above method isnt required
const fsPromises = require('fs').promises
const path = require('path')

//one way to access  file and directory names
// console.log(__dirname)
// console.log(__filename)

// console.log("-----------")

//other way to access  file and directory names
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

//".parse()" returns everything as object, like for example root, dir, base..etc
// console.log(path.parse(__filename))

//we can export files using module.exports = {function names}
//{or}
//exports.function_name = (a,b) => a+b;

//we can import the file as const var_name = require('./file_name')
//console.log(math.add(2,3))  we have to access like this when we import using above method
//{or}
//we can import by array destructuring, for example const {function_1, function_2..etc} = require('./file_name')
//console.log(function_1(2,3))  we can access directly

// fs.readFile('./files/start.txt', 'utf8', (err, data) => {   //'utf8' is used to print the exact data in the file else buffers will be printed
//     if(err) throw err;
//     console.log(data)
// })

// fs.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8', (err, data) => {   //directory and path shouldn't be hard quoted, its not a good practice, coz different operating systems has different methods to access file
//     if(err) throw err;
//     console.log(data)
// })

// fs.writeFile(path.join(__dirname, 'files', 'new.txt'), 'New text file created', (err) => {
//     if(err) throw err;
//     console.log("Created")
//     //To change content in existing file, we should follow this
//     fs.appendFile(path.join(__dirname, 'files', 'start.txt'), '\n\n New content here', (err) => {
//         if(err) throw err;
//         console.log("Appended")
//         //To rename content in existing file, we should follow this
// fs.rename(path.join(__dirname, 'files', 'start.txt'), path.join(__dirname, 'files', 'start1.txt'), (err) => {
//     if(err) throw err;
//     console.log("Renamed")
//         })
//     })
// })//The above process, function inside function is called "callback hell"

//Using append, we can create new file too
// fs.appendFile(path.join(__dirname, 'files', 'start.txt'), '\n\n New content here', (err) => {
//     if(err) throw err;
//     console.log("Appended")
// })

// readFile('./files/start.txt', (err, data) => {   //'utf8' is used to print the exact data in the file else buffers will  be printed
//     if(err) throw err;
//     console.log(data)
// })

// const fileOpns = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, 'files', 'start1.txt'), 'utf8')
//         console.log(data)
//         await fsPromises.writeFile(path.join(__dirname, 'files', 'new.txt'), 'New text file created')
//         console.log("Created")
//         await fsPromises.appendFile(path.join(__dirname, 'files', 'start.txt'), 'Hello again!')
//         console.log("Appended")
//         await fsPromises.rename(path.join(__dirname, 'files', 'start.txt'), path.join(__dirname, 'files', 'start1.txt'))
//         console.log("Renamed")
//         //To delete file, we use unlink fucntion
//         await fsPromises.unlink(path.join(__dirname, 'files', 'new.txt'))
//         console.log('Deleted')
//     } catch (err) {
//         console.error(err)
//     }
// }
// fileOpns()

//exiting on uncaught errors
// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error : ${err}`)
//     process.exit(1)
// })