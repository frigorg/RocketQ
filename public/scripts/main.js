import Modal from './modal.js'

const modal = Modal();

const unread_cards_trashbtn = document.querySelectorAll(".card_unread .actions .trash");
const unread_cards_readbtn = document.querySelectorAll(".card_unread .actions .read");

unread_cards_trashbtn.forEach((trashbtn)=>{
    trashbtn.addEventListener("click", e => {
        modal.changeToDeleteModal();
        modal.open()
    })
})

unread_cards_readbtn.forEach((readbtn)=>{
    readbtn.addEventListener("click", e => {
        modal.changeToReadModal();
        modal.open()
    })
})

const modal_wrapper = document.querySelector(".modal-wrapper")

modal_wrapper.querySelector(".btn.cancel").addEventListener("click", e => {modal.close()})
modal_wrapper.querySelector(".btn.proceed").addEventListener("click", e => {modal.close()})