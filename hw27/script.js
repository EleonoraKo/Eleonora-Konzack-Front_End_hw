const txtBox = document.getElementById('txtbox');
const divInfo = document.getElementById('divinfo');

txtBox.addEventListener('focus', () =>{
    divInfo.style.display = 'block';
});


txtBox.addEventListener('focusout', () =>{
    divInfo.style.display = 'none';
});