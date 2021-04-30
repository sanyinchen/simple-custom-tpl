const readEachLineSync = require('read-each-line-sync')
const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./data/config.json", "utf-8"))
console.log(data)
let getTplPathFromArrays = (levels = []) => {
    if (levels.length === 0) {
        return ""
    }
    return "$tpl:" + levels.join("$")
}
createTpl = (obj, levels = []) => {
    if (!obj) {
        return
    }
    let keys = Object.keys(obj)
    if (keys.length === 0) {
        console.log(obj)
        throw new Error("keys.length = 0?")
    }
    if (keys.length === 1) {
        let value = obj[keys[0]]
        console.log("value:", value, " key:", keys[0])
    } else {
        keys.forEach((key) => {
            levels.push(key)
            createTpl(obj[key], levels)
            levels.pop()
        })
    }

}
createTpl(data["mockdata"], ["mockdata"])
