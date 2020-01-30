   //    these example are callBack function practice.
   // const add = (a, b) => {
   //     return a + b;
   // }

   // setTimeout(() => {
   //     console.log(add(1, 4))

   // }, 2000)

   const add = (a, b, callback) => {
       setTimeout(() => {
           callback(a + b)
       }, 2000)
   }

   add(1, 4, (sum) => {
       console.log(sum);
   })