//your JS code here. If required.
let arr = [1,2,3,4,5,6];
// console.log(arr)


ourAsyncFunction();

function getUsername() {
    return new Promise((resolve, reject) => {
        resolve(arr)
      
    });
  }
  
  function getAge(data) {
    return new Promise((resolve, reject) => {
        //  console.log(data)
        setTimeout(()=>{
            let even_num = data.filter((item)=>
                item%2===0
            )
            // console.log(even_num)
              resolve(even_num)
        },1000)
      // reject("Couldnt get percentage sorry");
    });
  }
  
  function getGrade(data) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num = data.map((item)=>item*2)
              resolve(num)
        },2000)
    });
  }
  

let ans = document.getElementById("output")

  async function ourAsyncFunction() {
    // console.log("hii")
    try {
      const data1 = await getUsername();
    //   console.log(data1)
      const data2 = await getAge(data1);
    //   console.log(data2)
      ans.innerText = data2;
      const data3 = await getGrade(data2);
      ans.innerText = data3
    } catch (e) {
      console.log("ERROR>>>", e);
    }
}
