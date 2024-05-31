var bold = document.getElementById('bold')
var italic = document.getElementById('bold')
var underLine = document.getElementById('underline')
var text1 = document.getElementById('text1')


var flage = 1



// Function to change the font color of the text
function changeFontColor() {
    
    var colorPicker = document.getElementById("colorPicker");
    text1.style.color = colorPicker.value; // Apply the selected color
}

// Function to change the Background color of the text
function changeBackgroundColor() {
    
    var Picker = document.getElementById("Picker");
    text1.style.background = Picker.value; // Apply the selected color
}




bold.addEventListener('click',()=>{
    if (flage == 1){
        text1.style.fontWeight='bold'
        flage = 0
    }else{
        text1.style.fontWeight='normal'
        flage = 1
    }

})


function ilalic(){
    if (flage == 1){
        text1.style.fontStyle= 'italic'
        flage = 0
    }else{
        text1.style.fontStyle= 'normal'
        flage = 1
    }
   
}

flage=1

underLine.addEventListener('click',()=>{
   
    if (flage == 1){
        text1.style.textDecoration='underline'
        flage = 0
    }else{
        text1.style.textDecoration='none'
        flage = 1
    }
   
    })    

    function aligleft(){
      text1.style.textAlign='left'
    }

    function aligCenter(){
        text1.style.textAlign='center'
    }

    function aligRight(){
        text1.style.textAlign='right'
    }
    
    
     var num = 30
    console.log(num);
    function inc(){
        num++
        text1.style.fontSize=`${num}px`
    }

    function dec(){
        num--
        text1.style.fontSize= `${num}px`
    }
    
    function fontSize(){
         var size = document.getElementById('font-size').value
         console.log(size);
        text1.style.fontSize= `${size}px`
     }
    
     function color(){
        
     }

//  var para = document.getElementById('para').setAttribute('class','abc')
//  console.log(para);
// console.log(para.childNodes.length);
// console.log(para.childNodes[5].childNodes[0].nodeValue);
    
