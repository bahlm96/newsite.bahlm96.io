function fun(){
    document.getElementById('sidebar').style.display='none';
    document.getElementById('btn').style.display='none';
    document.getElementById('op').style.display='block';
}
function opbtn(){
    document.getElementById('sidebar').style.display='inline-block';
    document.getElementById('op').style.display='none';
    document.getElementById('btn').style.display='block';
}
function myFunction(){
var element = document.body
element.classList.toggle("dark-mode");}