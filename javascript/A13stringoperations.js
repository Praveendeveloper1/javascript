var city = "amsTErDam"
var city = "PAriS"

city.toUpperCase()
'AMSTERDAM'
city.toLocaleLowerCase()
'amsterdam'

city.length
9
city[0]
'a'
city[1]
'm'
city.charAt(0)
'a'
city.charAt(1)
'm'
city.at(0)
'a'
city.at(1)
'm'

var city = "amsTErDam"

city.charAt(-1)
''
city.at(-1)
'm'
city.charAt(1)
'm'
city.at(1)
'm'
city.at(-2)
'a'
city.at(-1)
'm'
city.at(-3)
'D'

var a = "jhon"
var b = "Jhon"

a==b
false
a.toLowerCase == b.toLowerCase
true

var city = "amsTErDam"
"Amsterdam"

var city = "amsTErDam"
undefined
city.slice(1)
'msTErDam'
city.slice(2)
'sTErDam'
city.slice(2,5)
'sTE'
city.slice(1,8).toLowerCase()
'msterda'
city.slice(1,9).toLowerCase()
'msterdam'
city.slice(0,1)
'a'
city.slice(0,-1)
'amsTErDa'
city.slice(0,-2)
'amsTErD'
city.slice(0,-3)
'amsTEr'
city.slice(2,-2)
'sTErD'

var city = "amsTErDam"
undefined
city.charAt(0).toUpperCase()
'A'
city.at(0).toUpperCase()
'A'
city.slice(1).toLowerCase()
'msterdam'
city.at(0).toUpperCase()+city.slice(1).toLowerCase()
'Amsterdam'

var city = "paRiS"

city.at(0).toUpperCase()+city.slice(1).toLowerCase()
'Paris'

var a = " Nikita. "

a.length
9
a.trim()
'Nikita.'
var a = " Nikita . "
undefined
a.trim()
'Nikita .'

var a = "I am Learning JavaScript"
a.replace('JavaScript','JS')
'I am Learning JS'

var a = "JavaScript I am learning JavaScript"

a.replace('JavaScript','JS')
'JS I am learning JavaScript'

var a = "JavaScript I am learning JavaScript"
undefined
a.replace('JavaScript','JS')
'JS I am learning JavaScript'
a.replace(/JavaScript/g,'JS')
'JS I am learning JS'

var a = " Nikita . "
undefined
a.replace(/ /g,'')
'Nikita.'
a.replaceAll(' ','')
'Nikita.'
var a = "JavaScript I am learning JavaScript"
undefined
a.replaceAll('Java','')
'Script I am learning Script

var url = "https://github.com/Aakashdeveloper/edu_intern_april_22/tree/master/javascript"

url.split('/')
(8) ['https:', '', 'github.com', 'Aakashdeveloper', 'edu_intern_april_22', 'tree', 'master', 'javascript']0: "https:"1: ""2: "github.com"3: "Aakashdeveloper"4: "edu_intern_april_22"5: "tree"6: "master"7: "javascript"length: 8[[Prototype]]: Array(0)
var a = "JavaScript I am learning JavaScript"
undefined
a.split(' ')
(5) ['JavaScript', 'I', 'am', 'learning', 'JavaScript']



