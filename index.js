const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');
menuBtn.addEventListener('click', () =>{
    sideMenu.classList.add('show');
    sideMenu.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () =>{
    sideMenu.classList.remove('show');
    document.body.style.overflow = 'auto';
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});


Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.status === 'Declined' ? 'danger' : order.status
    === 'Pending' ? 'Warning' : 'third'}">${order.status}</td>
    <td class ="primary">Details</td>


    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})