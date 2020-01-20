/*
Timothy Washington
washington_a05a.js
INFO 2124 - Javascript I
Thoendel
Creation date: Jan 19, 2020
*/
//comment Legend: {c=creates variable, s=sets a variable to a value, p=prints list}
let todo = ["type", "type more", "type again", "repeat 0"];//cs
console.log(todo.join());//p
todo.unshift("type before");//s
console.log(todo.join());//p
todo=[todo[4],todo[3],todo[2],todo[1],todo[0]];//p
console.log(todo.join());//p
for(var a=0;a<todo.length-1;a++){//loops for length
    for(var b=0;b<todo.length-1-a;b++){//loops for remainder
        if(todo[b].length>todo[b+1].length){
            var see=todo[b];//cs
            todo[b]=todo[b+1];//s
            todo[b+1]=see;//s
        }
    }
}//^sorts by length
console.log(todo.join());//p
if(todo.join().indexOf('x') != -1)console.log("contains X");//checks for X
else console.log("doesn't contain X");
console.log("-");//takes up space

let glist= new Array();//c
for(var a=0;a<6;a++){
    glist.push(`buy ${a+1} egg`);//s
}
console.log(glist.join());//p
glist.shift();//s
console.log(glist.join());//p
glist.push(glist[3],glist[4]);//s
glist[3]="buy egg 7";//s
glist[4]="buy egg 8";//s
console.log(glist.join());//p