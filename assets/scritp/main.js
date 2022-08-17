  var index = 0;
  var imgs = ["https://demo4.datvang.top/wp-content/uploads/2022/02/slider2.jpg", "https://demo4.datvang.top/wp-content/uploads/2022/02/slider1.jpg"]
        function changeImage() {
          
            document.getElementById('img').src = imgs[index];
            index++;
            if (index == 2) {
                index = 0;
            }    
        }
        function changeBackImage() {
          
            document.getElementById('img').src = imgs[index];
            index-1;
            if (index = 0) {
                index == 2;
            }    
        }
        autoImage=function(){
            document.getElementById('img').src=imgs[index];
            index++;
            if(index==2){
                index=0
            }
        }
        setInterval(autoImage,2000)
