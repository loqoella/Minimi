


let center_option = document.getElementById("center_option");
let center_option_text = null;

let inputState = document.getElementById("inputState");
let inputState_text = null;

let child_name = document.getElementById("child_name");
let child_name_text = null;

let parent_name = document.getElementById("parent_name");
let parent_name_text = null;

let email_address = document.getElementById("email_address");
let email_address_text = null;

let address = document.getElementById("address");
let address_text = null;
let address1 = document.getElementById("address1");
let address1_text = null;

let inputCity = document.getElementById("inputCity");
let inputCity_text = null;

let inputZip = document.getElementById("inputZip");
let inputZip_text = null;

let day = document.getElementById("day");
let day_text = null;
let month = document.getElementById("month");
let month_text = null;
let year = document.getElementById("year");
let year_text = null;
let due_day = document.getElementById("due_day");
let due_day_text = null;
let due_month = document.getElementById("due_month");
let due_month_text = null;
let due_year = document.getElementById("due_year");
let due_year_text = null;

let mobile_num = document.getElementById("mobile_num");
let mobile_num_text = null;

let boy_radio = document.getElementById("boy_radio");
let girl_radio = document.getElementById("girl_radio");
let gender_text = null;

let child_age = document.getElementById("child_age");
let child_age_text = null;

let special_needs = document.getElementById("exampleFormControlTextarea1");
let special_needs_text = null;

let days_required = "";
let monday = document.getElementById("monday");
let tuesday = document.getElementById("tuesday");
let wednesday = document.getElementById("wednesday");
let thursday = document.getElementById("thursday");
let friday = document.getElementById("friday");

let monday_selected = false;
let tuesday_selected = false;
let wednesday_selected = false;
let thursday_selected = false;
let friday_selected = false;

let submit_button = document.getElementById("submit_button");

center_option.onclick = () => {
    center_option_text = document.getElementById('center_option').selectedOptions[0].value;
    console.log(center_option_text);
}

day.onclick = () => {
    day_text = document.getElementById('day').selectedOptions[0].value;
}
month.onclick = () => {
    month_text = document.getElementById('month').selectedOptions[0].value;
}
year.onclick = () => {
    year_text = document.getElementById('dyearay').selectedOptions[0].value;
}
due_day.onclick = () => {
    due_day_text = document.getElementById('due_day').selectedOptions[0].value;
}
due_month.onclick = () => {
    due_month_text = document.getElementById('due_month').selectedOptions[0].value;
}
due_year.onclick = () => {
    due_year_text = document.getElementById('due_year').selectedOptions[0].value;
}

inputState.onclick = () => {
    inputState_text = document.getElementById('inputState').selectedOptions[0].value;
    console.log(inputState_text);
}

child_age.onclick = () => {
    child_age_text = document.getElementById('child_age').selectedOptions[0].value;
    console.log(child_age_text);
}

child_name.oninput = (e) => {
    child_name_text = e.target.value;
    console.log(child_name_text);
}

special_needs.oninput = (e) => {
    special_needs_text = e.target.value;
    console.log(special_needs_text);
}

inputZip.oninput = (e) => {
    inputZip_text = e.target.value;
    console.log(inputZip_text);
}

inputCity.oninput = (e) => {
    inputCity_text = e.target.value;
    console.log(inputCity_text);
}

parent_name.oninput = (e) => {
    parent_name_text = e.target.value;
    console.log(e.target.value);
}

email_address.oninput = (e) => {
    email_address_text = e.target.value;
    console.log(email_address_text);
}

address.oninput = (e) => {
    address_text = e.target.value;
    console.log(address_text);
}

address1.oninput = (e) => {
    address1_text = e.target.value;
    console.log(address1_text);
}

mobile_num.oninput = (e) => {
    mobile_num_text = e.target.value;
    console.log(mobile_num_text);
}

boy_radio.onclick = (e) => {
    gender_text = "Boy";
    console.log(gender_text);
}
girl_radio.oninput = (e) => {
    gender_text = "Girl";
    console.log(gender_text);
}


monday.onclick = (e) => {
    if(monday.checked == true){
        monday_selected = true;
    }else{
        monday_selected = false;
    }
}
tuesday.onclick = (e) => {
    if(tuesday.checked == true){
        tuesday_selected = true;
    }else{
        tuesday_selected = false;
    }
}
wednesday.onclick = (e) => {
    if(wednesday.checked == true){
        wednesday_selected = true;
    }else{
        wednesday_selected = false;
    }
}
thursday.onclick = (e) => {
    if(thursday.checked == true){
        thursday_selected = true;
    }else{
        thursday_selected = false;
    }
}
friday.onclick = (e) => {
    if(friday.checked == true){
        friday_selected = true;
    }else{
        friday_selected = false;
    }
}

submit_via_email = () => {
    subject ="New Enrolment Form Informaion"
    body = `Center: ${center_option_text},
            Child's Name: ${child_name_text},
            Gender: ${gender_text},
            Child's Age: ${child_age_text},
            Parent's Name: ${parent_name_text},
            Email: ${email_address_text},
            Mobile: ${mobile_num_text},
            Address1: ${address_text},
            Address2: ${address1_text},
            City: ${inputCity_text},
            State: ${inputState_text},
            ZIP: ${inputZip_text},
            Date when care will be required (Begin Date): ${day_text} / ${month_text} / ${year_text}
            Due Date (End Date): ${due_day_text} / ${due_month_text} / ${due_year_text}
            Days required: ${days_required},
            Special Needs: ${special_needs_text}    
            `

    axios.post('/email/', { 
        subject: subject,
        body: body,
    }).then(function (response) {
        console.log(response);
        alert("Email sent successfully. We will respond as soon as possible.");
    }).catch(function (error) {
        console.log(error);
        alert(`Errors sending email, please check if the email address is correct. 
            Alternatively, please contact us via minimicampsie@gmail.com`) 
    });
}

submit_button.onclick = (e) => {
    e.preventDefault();
    submit_button.setAttribute("value", "Submitting the form, please wait for a few seconds for the response...");
    if(monday_selected){
        days_required += "Monday, ";
    }
    if(tuesday_selected){
        days_required += "Tuesday, ";
    }
    if(wednesday_selected){
        days_required += "Wednesday, ";
    }
    if(thursday_selected){
        days_required += "Thursday, ";
    }
    if(friday_selected){
        days_required += "Friday";
    }

    submit_via_email();

    monday.checked = false;
    tuesday.checked = false;
    wednesday.checked = false;
    thursday.checked = false;
    friday.checked = false;
    monday_selected = false;
    tuesday_selected = false;
    wednesday_selected = false;
    thursday_selected = false;
    friday_selected = false;
    console.log(days_required);
}



