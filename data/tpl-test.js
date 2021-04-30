let personalName = "my name is `$tpl:mockdata$account$name`"
let personalId = "my account id is `$tpl:mockdata$account$id`"
let personalHobby = "my hobby is `$tpl:mockdata$extra$hobby`"
let data = personalName + "\n" + personalId + "\n" + personalHobby
console.log(data)
