for 
while 
do while
for Of
for in
///////////////////////////////////
//iterate over the array as well as print the series
for (variable;Condition Rule;increment/decrement)
for(i=0;i<5;i++){
    console.log(i);
}
0
1
2
3
4

var city = ['Delhi','Mumbai','london','Nice']
for (i=0;i<city.length;i++){
    console.log(city[i]);
}
Delhi
Mumbai
london
Nice

var city = ['Delhi','Mumbai','london','Nice']
for (i=0;i<city.length;i++){
    console.log(`<li>${city[i]}</li>`);
}
<li>Delhi</li>
<li>Mumbai</li>
<li>london</li>
<li>Nice</li>

///////////////////////
 var city = ['Delhi','Mumbai',['Red','yellow','Green'],'london','Nice']

for (i=0;i<city.length;i++){
    if(Array.isArray(city[i])){
        for(j=0;j<city[i].length;j++){
            console.log(city[i][j])
        }
    }else{
        console.log(city[i]);
    }
}
Delhi
Mumbai
 Red
 yellow
 Green
 london
 Nice


 //////////////
 var i = 0;
 while(i<5){
    console.log(i);
    i++;
 }
0
1
2
3
4
4

/////
var i = 0;
do{
    console.log(i);
    i++;
}
while(i<5)

0
1
2
3
4
4

var i = 10;
while(i<5){
    console.log(i);
    i++
}



var i =10;
do{
    console.log(i);
    i++;
}
while(i<5)

10
10



///es6 for of

var city = ['Delhi','Mumbai','london','Nice']
 for(mycity of city){
    console.log(mycity);
 }

 Delhi
Mumbai
london
Nice

var city = ['Delhi','Mumbai',['Red','yellow','Green'],'london','Nice']
for (mycity of city){
    if(Array.isArray(mycity)){
        for(mycolor of mycity){
            console.log(mycolor);
        }
    }else{
        console.log(mycity);

    }
}

Delhi
Mumbai
Red
yellow
Green
london
Nice