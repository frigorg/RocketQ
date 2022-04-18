export default function Modal(){

    const modal_wrapper = document.querySelector(".modal-wrapper");

    function open(){
        modal_wrapper.classList.remove("hidden");
    }
    function close() {
        modal_wrapper.classList.add("hidden");
    }
    function changeToDeleteModal() {
        modal_wrapper.querySelector("h2").innerHTML = "Excluir pergunta";
        modal_wrapper.querySelector("p").innerHTML = "Tem certeza que voçê deseja excluir esta pergunta?";
        modal_wrapper.querySelector(".proceed").innerHTML = "Sim, excluir";
        modal_wrapper.querySelector(".proceed").classList.add("btn_warning");
        modal_wrapper.querySelector(".proceed").classList.remove("btn_normal");

    }
    function changeToReadModal() {
        modal_wrapper.querySelector("h2").innerHTML = "Marcar como lido";
        modal_wrapper.querySelector("p").innerHTML = "Tem certeza que você deseja marcar esta pergunta como lida?";
        modal_wrapper.querySelector(".proceed").innerHTML = "Sim, marcar como lida";
        modal_wrapper.querySelector(".proceed").classList.add("btn_normal");
        modal_wrapper.querySelector(".proceed").classList.remove("btn_warning");
    }

    return {
        open,
        close,
        changeToDeleteModal,
        changeToReadModal
    }
    
} 