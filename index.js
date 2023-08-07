function yesnoCheck() {
    
    if(document.getElementById('radioonepair').checked) {
        document.getElementById('common').style.display = 'block';
    }else{
        document.getElementById('common').style.display='none';
    }
    
    if(document.getElementById('radiotwopair').checked) {
        document.getElementById('commontwo').style.display = 'block';
    }else{
        document.getElementById('commontwo').style.display='none';
    }

    if(document.getElementById('radiothreepair').checked) {
        document.getElementById('commonthree').style.display = 'block';
    }else{
        document.getElementById('commonthree').style.display='none';
    }
}
function myFunction(){
    window.alert(" Added To Cart")
}



