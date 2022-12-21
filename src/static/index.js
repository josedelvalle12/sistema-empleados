const btnsConfirm = document.querySelectorAll("#btnBorrar")

if (btnsConfirm.length) {
    for (const btn of btnsConfirm) {
        btn.addEventListener("click", event => {
            const resp = confirm("¿Está seguro que desea eliminar?")
            if (!resp) {
                event.preventDefault()
            }
        })
    }
}

