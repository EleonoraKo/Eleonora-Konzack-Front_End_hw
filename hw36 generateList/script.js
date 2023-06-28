function generateList(array){
    document.write('<ul>');
    array.forEach((element, index) => {
        if(!Array.isArray(element))
        document.write('<li>' + element + '</li>');
        else{
            document.write('<ul>');
            element.forEach(el => {
                document.write('<li>' + index + '.' + el + '</li>');
            });
            document.write('</ul>');
        }
    });
    document.write('</ul>');
}

generateList([1,2,3]);


generateList([1,2,[1,2,3],4]);