const addList = document.getElementById('button-add')
addList.addEventListener('click', (e)=>{
    e.preventDefault()
    if (e.target) {
        const getForm = document.getElementById('create-list')
        getForm.style = 'display:block;'
    }
})


const closeForm = document.getElementById('close')
closeForm.addEventListener('click', (e)=>{
    e.preventDefault()
    if (e.target) {
        const getForm = document.getElementById('create-list')
        getForm.style = 'display:none;'
    }
})
const closeEdit = document.getElementById('close-edit')
closeEdit.addEventListener('click', (e)=>{
    e.preventDefault()
    if (e.target) {
        const getForm = document.getElementById('edit-list')
        getForm.style = 'display:none;'
    }
})


const buttonForm = document.getElementById('button-create')
buttonForm.addEventListener('click', (e)=>{
    e.preventDefault()
    if (e.target) {
        swal({
            
            text: "Behasil Di Tambahkan",
            icon: "success",
            button: "Close",
          });
    }
})

const editButton = document.querySelector('.action')
editButton.addEventListener('click', (e)=>{
    e.preventDefault()
    if (e.target.className = 'edit-doc') {
        const editForm = document.querySelector('.edit-list')
        editForm.style = "display:block;"
        e.target.className = 'far fa-edit'
    }

    
})


