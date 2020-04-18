let kembalian=[5000,10000,20000,50000]
function hitungKembalian(totalBelanja,bayar){
    let sumbangan=0
    if(bayar>totalBelanja){
        let kembalian=bayar-totalBelanja;
        let cashback=0;
        if(totalBelanja>200000){
            let persen=totalBelanja*10/100;
cashback=persen;
        }
        let totalSemua=kembalian+cashback;
        let kembalianTotal={}
        while(totalSemua!==0){
if(totalSemua>=50000){
totalSemua-=50000
if(!kembalianTotal["50000"]){
kembalianTotal["50000"]=1
}else{
    kembalianTotal["50000"]+=1
}

}else if(totalSemua>=20000&&totalSemua<=50000){
    totalSemua-=20000
    if(!kembalianTotal["20000"]){
        kembalianTotal["20000"]=1
        }else{
            kembalianTotal["20000"]+=1
        }
}else if(totalSemua>=10000&&totalSemua<=20000){
    totalSemua-=10000
    if(!kembalianTotal["10000"]){
        kembalianTotal["10000"]=1
        }else{
            kembalianTotal["10000"]+=1
        }
}else if(totalSemua>=5000&&totalSemua<=10000){
    totalSemua-=5000
    if(!kembalianTotal["5000"]){
        kembalianTotal["5000"]=1
        }else{
            kembalianTotal["5000"]+=1
        }
}
else{
    sumbangan+=totalSemua
    totalSemua-=totalSemua

}
        }
        
 for(a in kembalianTotal){
     console.log(`${a} ${kembalianTotal[a]} lembar`)
 }       
 console.log(`sumbangan ${sumbangan}`)
    }else{
        console.log("UANG KAMU KURANG!!!")
    }
    
}
hitungKembalian(220000,250000)