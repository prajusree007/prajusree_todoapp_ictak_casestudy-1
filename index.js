
      function show2()
      { 
        var status; 
        function show1(vlogin)
        {
            var v=vlogin();
            
            if(v==1)
            {
                status=1;
                
            }
            else
            {
                document.getElementById("err").style.color="red";
                err.innerHTML="Incorrect username or password";
                status=0;
                
            }
            
        }
        
        function validate()
        {

            var uname="admin";
            var passwd="12345";    
            var username=document.getElementById("unm").value;
            var password=document.getElementById("pwd").value;
        
        
            if((username==uname) && (password==passwd))
            {
            return 1;
            }
            else{
                
                return 0;
               }
        } 
            show1(validate); 
            if(status==0)
            {
                return false;
            }   
            else
            {
                return true;
            }  
               

      }












        


    
