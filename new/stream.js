// const fs = require('fs') //file system
// const path = require('path')
// const rs = fs.createReadStream(path.join(__dirname, 'files', 'bigfile.txt'), 'utf8')
// const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newbig.txt'))

//one way to write stream
// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

//another efficient way
// rs.pipe(ws)