// Don't delete code bellow and this code must be at the bottom of the file

//1. Membuat tipe untuk buku dimana setiap buku memiliki judul, penulis, dan tahun terbit.
type Book ={
    title: string;
    author : string;
    publicationYear : number;
}
//2. Memmbuat array books untuk menyimpan buku.
const books: Book[] = [];


//3. ini fungsi untuk addBook 
function addBook(title:string, author:string, publicationYear:number): void{
    let newBook: Book = {title, author, publicationYear};
    books.push(newBook);
    console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}//menggunakan method .push()

//4. ini fungsi untuk listBooks 
function listBooks(): void{
    if(books.length === 0){
        console.log("Tidak ada buku yang tersedia.");
        return;
    }
    console.log("All Books:");
    books.map(book => {
        console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
    });
}//menggunakan method .map()

//5. ini fungsi untuk searchBook 
function searchBook(title?:string): void{
    if(!title){
        console.log("Please provide a title to search.");
        return
    }

    const found = books.filter(book => 
        book.title.toLowerCase().includes(title.toLowerCase())
    );

    console.log(`Search Results for "${title}":`);
    if(found.length === 0){
        console.log(`no books found white the title "${title}".`);
        return;
    }
    
    found.forEach(book => {
        console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
    });
    
}//mengunakan method filter()


export { addBook, listBooks, searchBook };


// Contoh penggunaan fungsi-fungsi di atas
addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
addBook("1984", "George Orwell", 1949);
addBook("To Kill a Mockingbird", "Harper Lee", 1960);


listBooks();

searchBook("1984");
searchBook("Naruto");


