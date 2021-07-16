const path = require('path')

console.log(path.sep)

const file_path = path.join('/content','sub','test.txt')
console.log(file_path)

const base_nm = path.basename(file_path)
console.log(`base file ${base_nm}`)