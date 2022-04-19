import Modal from './modal.js'

const modal = Modal();

const cards = document.querySelectorAll("#cards .card")

const modal_wrapper = document.querySelector(".modal-wrapper");

cards.forEach((card) => {
    card.querySelector(".trash").addEventListener("click", btn => {
        const id = card.querySelector(".question").dataset.id;
        modal_wrapper.dataset.id = id;
        modal_wrapper.dataset.action = "delete";
        modal.changeToDeleteModal();
        modal.open()
    })
    card.querySelector(".read").addEventListener("click", btn => {
        const id = card.querySelector(".question").dataset.id;
        modal_wrapper.dataset.id = id;
        modal_wrapper.dataset.action = "read";
        modal.changeToReadModal();
        modal.open()
    })
})

modal_wrapper.querySelector(".btn.cancel").addEventListener("click", e => {
    modal_wrapper.dataset.id = "";
    modal.close();
})

const modal_form = modal_wrapper.querySelector("form");

modal_wrapper.querySelector(".btn.proceed").addEventListener("click", e => {
    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId = modal_wrapper.dataset.id;
    const action = modal_wrapper.dataset.action;
    modal_form.setAttribute("action", `/question/${roomId}/${questionId}/${action}`);
    if (modal_wrapper.querySelector("#password").value != "")
        modal.close();
})