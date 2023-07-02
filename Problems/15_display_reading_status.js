// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

function dispalyReadingStatus(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i].readingStatus){
            console.log(`You already read ${arr[i].title} by ${arr[i].author}`);
        }else if(!arr[i].readingStatus){
            console.log(`You still need to read ${arr[i].title} by ${arr[i].author}`);
        }
    }
}

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    },
    {
        author: 'Sourav Ranjan',
        title: 'Habbit for code',
        readingStatus: true
    },
    {
        author: 'justine biber',
        title: 'Mokgrind',
        readingStatus: false
    }
]

dispalyReadingStatus(library)