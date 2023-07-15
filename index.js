// console.log('Hello World')


let inputArry = [];   // Stores the Input text for notes in form of an array


// // seeking for history at initial start of page and making its notes
if (localStorage.length != 0) {
    inputArry = (localStorage.getItem('notes')).split('~`?*&^%$#@!');
    showArry();
}
else {
    noNotesShower();
}


let addContentbtn = document.getElementById('addContentbtn');
addContentbtn.addEventListener('click', () => {
    let inputTextarea = document.getElementById('inputTextarea');
    let inputText = inputTextarea.value;
    inputArry.push(inputText);
    inputTextarea.value = null;

    showArry();
});


// showArry() function makes note of each single element in the inputArry
function showArry() {
    let notesCollectionin = document.getElementById('notesCollectionin');
    notesCollectionin.innerHTML = null;
    inputArry.forEach((element, index) => {
        notesCollectionin.innerHTML += `
            <div class="note">
                <div class="noteOut">
                    <h3 class="noteHeading">Note ${index + 1}</h3>
                    <p class="paraHeading">${element}</p>
                    <button id="${index}" class="deletebtn" onclick="deleteFromArry(this.id)">Delete</button>
                </div>
            </div>`;
    });

    console.log(inputArry);
    if (inputArry.length == 0) {
        localStorage.clear();
    }
    else {
        localStorage.setItem('notes', inputArry.join('~`?*&^%$#@!'));
    }

    noNotesShower();
};


// deleteFromArry(id) deletes the element with index id from the inputArry and reprints the showArry() function to show the changes
deleteFromArry = (id) => {
    let toDelete = document.getElementById(id);
    inputArry.splice(id, 1);
    showArry();
};


// adds noNotesShower() if there are no notes
function noNotesShower() {
    if (inputArry.length == 0) {
        document.getElementById('notesCollectionin').innerHTML = `
            <div id="noNotes" class="noNotes">
                <h5>Nothing to show! Use 'Add a Note' section to add notes</h5>
            </div>`
    };
};
