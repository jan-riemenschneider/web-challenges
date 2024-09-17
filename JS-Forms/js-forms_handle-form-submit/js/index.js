console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener('submit', (Event) => {
    Event.preventDefault(); 
    const formData = new FormData(Event.target); 
    const data = Object.fromEntries(formData); 
    console.log(data);

    const age = parseInt(data.age);       
    const badness = parseInt(data.badness);  
    console.log(age + badness);


    Event.target.reset();
    document.querySelector('input[name="firstName"]').focus();
})