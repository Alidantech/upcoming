function showNavigation(){
   var navigator = document.getElementById('navigator');
   if(navigator.style.display === 'none'){
    navigator.style.display = 'block';
    navigator.style.height = "90%";
   }else {
    navigator.style.display = 'none';

   }
   console.log("clicked")
}