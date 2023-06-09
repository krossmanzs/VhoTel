function toggleMenu() {
    var x = document.getElementById("menu");
    x.classList.toggle("responsive")
} 

function validateForm(form) {
    if(form.firstname.value == "") {
        alert("Please provide your full name!")
        return false
    }
    let phoneNum = form.phone.value
    if (phoneNum.length == "") {
        alert("Phone number must not be empty!")
        return false
    } else if (phoneNum.length < 11 || phoneNum.length > 13) {
        alert("Phone number must be 11 to 13 digits!")
        return false
    } else {
        for (let i = 0; i < phoneNum.length; i++) {
            if(isNaN(phoneNum[i])) {
                alert("Phone number must be in digit!")
                return false
            }
        }
    }

    if (form.checkin.value == "" || form.checkout.value == "") {
        alert("Checkin and checkout must not be empty")
        return false
    } else {
        let checkInDate = new Date(form.checkin.value)
        let checkOutDate = new Date(form.checkout.value)
        if (checkOutDate < checkInDate) {
            alert("Check-in date must be greater than equal check-out date!")
            return false
        }
    }

    if (form.roomtype.value == "") {
        alert("Room type must not be empty")
        return false
    }

    if (form.paymenttype.value == "") {
        alert("Payment type must not be empty")
        return false
    }

    window.location.href = "thankyou.html"
    return false;
}