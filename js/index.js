const form = document.getElementById('form');
const inputFirstname4 = document.getElementById(inputFirstname4);
const inputLastname4 = document.getElementById(inputLastname4);
const inputEmail = document.getElementById(inputEmail);
const inputtel = document.getElementById(inputtel);
const inputmessage = document.getElementById(inputmessage);

form.addEventListener('submit',e=>{
    e.preventDefault();

    validateInputs();
});

const setError =(element,message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innerText = '';
    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}

const validateInputs = () =>{
    const inputFirstname4 = inputFirstname4.value.trim();
    const inputLastname4 = inputLastname4.value.trim();
    const inputEmail = inputEmail.value.trim();
    const inputtel = inputtel.value.trim();
    const inputmessage = inputmessage.value.trim();

    if(inputFirstName4Value === ''){
        setError(inputFirstName4Value,'First Name is required');

    }else{
        setSuccess(inputFirstName4);
    }
    


}

















 
