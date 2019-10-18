
console.log('about to send email');

emailBtn = document.getElementById("sendEmailBtn");

// for backend email-sending
emailBtn.onclick = () => {
    subject ="User Feedback"
    body = "The body of User Feedback"
    // const formData = new FormData();
    // formData.append('subject', "User Feedback")
    // formData.append('body', "The body of User Feedback")

    axios.post('/email/', { 
        // data:formData
        // data: {'subject': subject, 'body':body},
        subject: subject,
        body: body
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

// // for frontend email-sending
// emailBtn.onclick = () => {
//     console.log("pressed send_email btn")

//     // we try to send the email to ourselves at this point
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "minimiacademy1@gmail.com",
//         Password : "minimi12345",
//         To : 'minimiacademy1@gmail.com',
//         From : "minimiacademy1@gmail.com",
//         Subject : "User Feedback",
//         Body : "The body of User Feedback"
//     }).then(
//         message => alert(message),
//         console.log('at least received some feedback after sending the email')
//     );
// }
