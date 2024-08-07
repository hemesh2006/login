let internships = [];
let currentIndex = -1;

function openForm(index = -1) {
    
    document.getElementById('form-container').style.display = 'block';
    if (index >= 0) {
        document.getElementById('form-title').textContent = 'Edit Internship';
        document.getElementById('internshipName').value = internships[index].name;
        document.getElementById('internName').value = internships[index].intern;
        currentIndex = index;
    } else {
        document.getElementById('form-title').textContent = 'Add Internship';
        document.getElementById('internshipName').value = '';
        document.getElementById('internName').value = '';
        currentIndex = -1;
    }
}

function closeForm() {
    document.getElementById('form-container').style.display = 'none';
}

function saveInternship() {
    const internshipName = document.getElementById('internshipName').value;
    const internName = document.getElementById('internName').value;

    if (currentIndex >= 0) {
        internships[currentIndex] = { name: internshipName, intern: internName };
    } else {
        internships.push({ name: internshipName, intern: internName });
    }

    closeForm();
    renderList();
}

function deleteInternship(index) {
    internships.splice(index, 1);
    renderList();
}

function renderList() {
    const internshipList = document.getElementById('internship-list');
    internshipList.innerHTML = '';
    internships.forEach((internship, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${internship.name} - ${internship.intern}`;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.onclick = () => openForm(index);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => deleteInternship(index);

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        
        internshipList.appendChild(listItem);
    });
}
