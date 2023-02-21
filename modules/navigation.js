const navigator  = () =>{

    
const listLink = document.querySelector('.listLink');
const addNewLink = document.querySelector('.addNewLink');
const contactLink = document.querySelector('.contactLink');
const bookList = document.querySelector('.bookList');
const addBook = document.querySelector('.addBook');
const contact = document.querySelector('.contact');

listLink.addEventListener('click', () => {
  bookList.classList.remove('hide');
  contact.classList.add('hide');
  addBook.classList.add('hide');
});

addNewLink.addEventListener('click', () => {
  addBook.classList.remove('hide');
  contact.classList.add('hide');
  bookList.classList.add('hide');
});

contactLink.addEventListener('click', () => {
  contact.classList.remove('hide');
  addBook.classList.add('hide');
  bookList.classList.add('hide');
});
}
export default navigator();