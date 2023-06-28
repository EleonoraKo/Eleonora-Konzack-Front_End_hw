// Написати приклад використання методів функцій window.open()/window.close().
let fnWnd; 
function winOpen()
{
fnWnd = window.open('https://lms.ithillel.ua/groups/63e3cf101da3397cb1a82bcf/homeworks/648ca753d812fd7c7b9af8fd');
}

function winClose()
{
fnWnd.close();
}