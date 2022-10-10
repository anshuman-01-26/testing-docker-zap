function scan(ps,msg,src){
    /*This script will contain logic that will test for different vulnerabilities*/

    /*Logic for Authentication*/

    var auth_header = msg.getRequestHeader().getHeader('Authentication')

    /*check if status code is still 200 without the authentication being there */

    if(auth_header==null && msg.getResponseHeader().getStatusCode()==200){
        ps.raiseAlert(3, 3, "Authentication Failure", "Add Authentication to the system", msg.getRequestHeader().getURI().toString(), '', '', '', "Add somthing to authenticate", '', 200, 13, msg);
    }


    
    
}