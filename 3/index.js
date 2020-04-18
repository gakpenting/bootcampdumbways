function cetakGambar(bilangan) {
  if (bilangan % 2 != 0) {
    let temp = [];
    for (let i = 0; i < bilangan; i++) {
      let temp2 = [];

      if (i % 2 === 0) {
        for (let j = 0; j < bilangan; j++) {
          temp2.push("*");
        }
      } else {
        for (let j = 0; j < bilangan; j++) {
          if (j === 0 || j === bilangan - 1) {
            temp2.push("*");
          } else {
            temp2.push("=");
          }
        }
      }
      temp.push(temp2);
    }
   temp.forEach(a=>{
       console.log(a.join(" "))
   })
  } else {
    console.log("HARUS BILANGAN GANJIL");
  }
}
cetakGambar(5);
