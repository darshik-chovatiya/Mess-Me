let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let message = document.querySelector('#messageInput').value;
    if (message.trim() === "") {
        alert("Please enter a message!");
        return;
    }
    let phoneNumber = '6351068172'; // You can change this number to a dynamic one if needed.
    let link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(link, '_blank');
});
