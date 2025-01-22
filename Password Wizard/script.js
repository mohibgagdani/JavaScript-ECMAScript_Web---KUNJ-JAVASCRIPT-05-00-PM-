function changePassword() {
    let oldPassword = document.getElementById('oldPassword').value;
    let newPassword = document.getElementById('newPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let existingPassword = '123456';
    let message = '';

    if (oldPassword !== existingPassword) {
        message = 'Error: Old password is incorrect!';
    } else if (newPassword.length < 6) {
        message = 'Error: New password must be at least 6 characters!';
    } else if (newPassword !== confirmPassword) {
        message = 'Error: New passwords do not match!';
    } else {
        message = 'Hooray! Castle gates ab naye password se secure hain! 🏰✨';
    }

    document.getElementById('message').innerHTML = message;
}
