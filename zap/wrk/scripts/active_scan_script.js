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
    var url = msg.getRequestHeader().getURI();

    var new_url = new URL(url);
    
    var param = new_url.searchParams;
    
    var entries = param.entries();


    
    

}

scan();