//Get all the countries from Asia continent /region using Filter function
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
request.onload=function (){
    var data1=JSON.parse(this.response);
    const asia=data1.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asia);}

//Get all the countries with population of less than 2 lakhs using Filter function

var request1=new XMLHttpRequest();
request1.open('GET','https://restcountries.com/v3.1/all',true);
request1.send();
request1.onload=function (){
    var data2=JSON.parse(this.response);
    const popul=data2.filter((element)=>{
        return element.population<200000;
    })
    console.log(popul);}



//Print the following details name, capital, flag using forEach function.

var request2=new XMLHttpRequest();
request2.open('GET','https://restcountries.com/v3.1/all',true);
request2.send();
request2.onload=function (){
    var data3 =JSON.parse(this.response);
    data3.forEach((element)=>{
        console.log(element.name.common,element.capital,element.flags.png);
    })}


//Print the total population of countries using reduce function 


var request3=new XMLHttpRequest();
request3.open('GET','https://restcountries.com/v3.1/all',true);
request3.send();
request3.onload=function (){
    var data4=JSON.parse(this.response);
    const population=data4.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}


//Print the country which use US Dollars as currency.

var request5 = new XMLHttpRequest();
request5.open("GET","https://restcountries.com/v3.1/all",true);
request5.send();
request5.onload = () => {

    const data = JSON.parse(request5.response);
    const datas = data.filter((value) => {
      for (var i in value.currencies) {
        if (i === "USD") {
          return true;
        }
      }
    }).map((value) => value.name);
    console.log(datas);
  }
