function scan(as,msg,param,value){
    var injections = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '-',
        '=',
        '+',
        '/',
        '\\',
        '|',
        '{',
        '}',
        '[',
        ']'
    ]
    //var url = msg.getRequestHeader().getURI();

    var new_url = new URL("https://github.com/anshuman-01-26?tab=repository&a=6");
    
    var param = new_url.searchParams;
    
    var entries = param.entries();

    var search_quries = [];

    for(var item of entries){
        search_quries.push(item[0])
    }
    console.log(search_quries)
    for(var i=0;i<injections.length;i++){
        for(var j=0;j<search_quries.length;j++){
            param.set(search_quries[j],injections[i])
        }
        console.log(new_url.searchParams)
    }



    
    

}

scan();