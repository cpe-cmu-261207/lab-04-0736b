const button = document.querySelector('#enter');
const input = document.querySelector('#userInput');
const divList = document.querySelector('#divList');
const ul = document.createElement('ul');
ul.className = "text-center mx-auto";
let todos = [];
let dones = [];


const inputLength = () => {
    return input.value.length;
}


const listInit = (task) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(task));
    li.className = "flex justify-between space-x-4 px-4 py-6 group text-xl";
    const divButton = document.createElement('div');
    divButton.className = "m-0 px-4 opacity-0 group-hover:opacity-100 space-x-1 transition duration-300 ease-out"
    const btnDone = document.createElement('button');
    btnDone.innerHTML = "DONE";
    btnDone.className ="font-sans text-sm text-black font-normal px-4 bg-green-600 hover:bg-green-700 transition duration-200 ease-in-out";
    const btnDel = document.createElement('button');
    btnDel.innerHTML = "DELETE";
    btnDel.className ="font-sans deletebtn text-sm text-black font-normal px-4 bg-red-700 hover:bg-red-800 transition duration-200 ease-in-out";
    const hr = document.createElement('hr');
    hr.className = "font-black";
    divButton.appendChild(btnDone);
    divButton.appendChild(btnDel);
    li.appendChild(divButton);
    ul.appendChild(li);
    ul.appendChild(hr);
    // btnDel.addEventListener('click', () => {
	// 	ul.removeChild(li);
	// });
    // btnDone.addEventListener('click', () => {
    //     li.className = "flex justify-between space-x-4 px-4 py-6 group text-xl done";
    // });
}



const createListElement = () => {




    // const li = document.createElement('li');
    // li.appendChild(document.createTextNode(input.value));
    // li.className = "flex justify-between space-x-4 px-4 py-6 group text-xl";
    // const divButton = document.createElement('div');
    // divButton.className = "m-0 px-4 opacity-0 group-hover:opacity-100 space-x-1 transition duration-300 ease-out"
    // const btnDone = document.createElement('button');
    // btnDone.innerHTML = "DONE";
    // btnDone.className ="font-sans text-sm text-black font-normal px-4 bg-green-600 hover:bg-green-700 transition duration-200 ease-in-out";
    // const btnDel = document.createElement('button');
    // btnDel.innerHTML = "DELETE";
    // btnDel.className ="font-sans deletebtn text-sm text-black font-normal px-4 bg-red-700 hover:bg-red-800 transition duration-200 ease-in-out";
    // const hr = document.createElement('hr');
    // hr.className = "font-black";
    // divButton.appendChild(btnDone);
    // divButton.appendChild(btnDel);
    // li.appendChild(divButton);
    // ul.appendChild(li);
    // ul.appendChild(hr);
    // btnDel.addEventListener('click', () => {
	// 	ul.removeChild(li);
	// });
    // btnDone.addEventListener('click', () => {
    //     li.className = "flex justify-between space-x-4 px-4 py-6 group text-xl done";
    // });

    input.value = "";
}


divList.appendChild(ul);

const addListAfterClick = () => {
    if(inputLength() > 0){
        createListElement();
    }
    else if(inputLength() === 0){
        alert('Task cannot be empty!');
    }
}

const addListAfterKeypress = (event) => {
    if(inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
    else if(inputLength() === 0 && event.keyCode === 13){
        alert('Task cannot be empty!');
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);