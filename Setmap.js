let xyz = new Set(["akhi","ami","akash"])
console.log(xyz, xyz.size)
xyz.add("akjlkdaj")//add element at the end
console.log(xyz)
xyz.delete("ami")//delete ami element
console.log(xyz)

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  console.log(fruits)// prints key with their values
  console.log(fruits.get("apples"))//print only the value of apples
  console.log(fruits.delete("oranges"))
  console.log(fruits.has("oranges"))

  let cars =  new Set(["bmw","audi","maruthi"])
  console.log(cars)

  let bike=new Map()
  bike.set("pulser", 150)
  bike.set("honda", 100)
  console.log(bike)
  console.log(bike.get("honda"))
  bike.delete("honda")//delete honda element
  console.log(bike)


  //Maps :

  var newarray=["anca","kdc","ajbdchdb",{name:"sunil"},123,true]

   newarray.map((element)=> console.log(element.name))//correct method for mapping
   
//Mapping an array
   let newmapp = ["akhill", "amith" , "imran" ,"srusti" , true ,12345,{num:"9595985"} ]
   newmapp.map((element,index)=> console.log(element,index,element.num))


   let val = [10, 20, 30]
   let res = val.map((value, index) =>{
      console.log(value, index)
      return (value)
   })
console.log(res)