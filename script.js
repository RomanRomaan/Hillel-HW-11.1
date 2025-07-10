// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно
const table = document.createElement('table');

for (i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr)
    for (n = 0; n < 10; n++) {
        const td = document.createElement('td');
        td.textContent = (i + 1) * (n + 1);
        tr.appendChild(td)
    }
}
table.classList.add('pifagor-table');
document.body.appendChild(table);
