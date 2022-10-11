function scan(as,msg,param,value){
    /*The injection list*/
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
    var url = msg.getRequestHeader().getURI();

    var new_url = new URL(url);
    
    var param = new_url.searchParams;
    
    var entries = param.entries();

    var search_quries = [];

    for(var item of entries){
        search_quries.push(item[0])
    }

    for(var i=0;i<injections.length;i++){
        for(var j=0;j<search_quries.length;j++){
            param.set(search_quries[j],injections[i])
        }
        /*Write the logic for request and check the response*/
    }



    
    

}

scan();