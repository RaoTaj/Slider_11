    var displayimg = document.getElementById("dispaly");
    var parentimg = document.getElementById("allimgs");
    var allimgs = parentimg.getElementsByTagName("IMG");
    var indexnum = 0;


    
    function slider(){
        displayimg.src = allimgs[indexnum].src;
    }


slider();

    function prev(){
        if(indexnum == 0){
            indexnum = allimgs.length - 1;
        }else {
            indexnum --;
        }
        slider()
    }

    function next(){
        if(indexnum == allimgs.length - 1){
            indexnum = 0;
        }else {
            indexnum ++;
        }
        slider()
    }