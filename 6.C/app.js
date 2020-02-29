const addList = document.getElementById('button-add')
addList.addEventListener('click', (e)=>{
    
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
    
    if (e.target) {
        swal({
            
            text: "Behasil Di Tambahkan",
            icon: "success",
            button: "Close",
          });
    }
})

const editForm = document.querySelectorAll('.edit-doc')
for (let i = 0; i < editForm.length; i++) {
    const edit = editForm[i];
    edit.addEventListener('click',e => {
        e.preventDefault()
        if (e.target) {
            const getForm = document.getElementById('edit-list')
            getForm.style = 'display:block;'
        }
    })
}


const tombolHapus = document.querySelectorAll('.hapus-list')
for (let i = 0; i < tombolHapus.length; i++) {
    const edit = tombolHapus[i];
    edit.addEventListener('click',e => {
        e.preventDefault()
        
    })
}


