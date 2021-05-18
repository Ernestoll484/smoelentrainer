var images = ["img/GK.png" ,"img/MDL.png" ,"img/OWL.png" ,"img/DK.png" ,"img/GW.png" ,"img/MP.png" ,"img/SB.png" ,"img/DB.png" ,"img/LdJ.png" ,"img/FdJ.png" ,"img/DD.png" ,"img/MB.png" ];
    function images(imgs){
    	 var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("images").src = myPix[randomNum];
     
    }