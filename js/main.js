const removeInputValue = () => {
    todolist.value = '';
}
const removeSpace = (taskName) => {
    return taskName.replace(" ", "_");
}
const createLiElement = (codeName) => {
    const element = document.createElement('li');
    element.id = codeName;
    element.classList = 'grid grid-cols-12 grid-gap-3';
    return element;
}
const createLabelElement = (codeName, taskName) => {
    const element = document.createElement('label');
    element.classList = 'col-start-2 col-span-4 text-xl p-2';
    element.for = codeName;
    element.innerText = taskName;
    return element;
}
const createCheckboxElement = (codeName) => {
    const element = document.createElement('input');
    element.classList = 'w-5 h-5 self-center justify-self-end mr-4';
    element.type = "checkbox";
    element.name = codeName;
    element.id = codeName;
    return element;
}
const createButtonElement = (codeName) => {
    const element = document.createElement('button');
    element.classList = 'col-start-12';
    element.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 9v4.501c-.748.313-1.424.765-2 1.319v-5.82c0-.552.447-1 1-1s1 .448 1 1zm-4 0v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1s1 .448 1 1zm1.82 15h-11.82v-18h2v16h8.502c.312.749.765 1.424 1.318 2zm-6.82-16c.553 0 1 .448 1 1v10c0 .552-.447 1-1 1s-1-.448-1-1v-10c0-.552.447-1 1-1zm14-4h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711v2zm-1 2v7.182c-.482-.115-.983-.182-1.5-.182l-.5.025v-7.025h2zm3 13.5c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-3.086-2.122l-1.414 1.414-1.414-1.414-.707.708 1.414 1.414-1.414 1.414.707.708 1.414-1.414 1.414 1.414.708-.708-1.414-1.414 1.414-1.414-.708-.708z"/></svg>';
    element.id = codeName;
    return element;
}
const addVisualTask = (taskName) => {
    const codeName = removeSpace(taskName);
    const element = createLiElement(codeName);
    const label = createLabelElement(codeName, taskName);
    const checkBox = createCheckboxElement(codeName);
    const button = createButtonElement()

    element.appendChild(checkBox);
    element.appendChild(label);
    element.appendChild(button);
    tasklist.appendChild(element);
}
const setTaskID = (request) => {
    const codeName = removeSpace(taskName);
}
const createTask = async (taskName) => {
    addVisualTask(taskName);
    removeInputValue();
    console.log(`{name: "${taskName}", done: false}`);
    const request = await apiPostRequest(`{name: ${taskName}, done: false}`);
    console.log(request);
    //setTaskID(request);
    //bindEventListeners(taskName);
}

todolist.addEventListener('keypress', event => {
    if (event.key == "Enter") {
        createTask(todolist.value);
    }
})
addTask.addEventListener('click', () => {
    createTask(todolist.value);
})

/* 1. create task
    - FE
    - checkbox
    - check the box
        - cross the text
            - update request
                - title
                - change text
                    - update request
                        - trashcan
                        - delete task
                        - remove FE
                            - delete request
                            - post request
                                - clear input
2. Get original tasks
*/