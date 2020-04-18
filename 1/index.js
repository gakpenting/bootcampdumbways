var dataKey = ['dumb','ways','the','best'];
        var word = 'dumbways';
        dataKey.forEach(a=>{
            if(word.indexOf(a)>-1){
                console.log(`${a} => true`)
            }else{
                console.log(`${a} => false`)
            }
        })