function tampilkanForm() {
    document.getElementById("formSection").classList.toggle("hidden");
}

window.onload = function() {
    const nama = localStorage.getItem('nama') || document.getElementById("namaInput").value;
    const role = localStorage.getItem('role') || document.getElementById("roleInput").value;
    const availability = localStorage.getItem('availability') || document.getElementById("availabilityInput").value;
    const usia = localStorage.getItem('usia') || document.getElementById("usiaInput").value;
    const lokasi = localStorage.getItem('lokasi') || document.getElementById("lokasiInput").value;
    const pengalaman = localStorage.getItem('pengalaman') || document.getElementById("pengalamanInput").value;
    const email = localStorage.getItem('email') || document.getElementById("emailInput").value;

    document.getElementById("namaDisplay").innerText = nama;
    document.getElementById("roleDisplay").innerText = role;
    document.getElementById("availabilityDisplay").innerText = availability;
    document.getElementById("usiaDisplay").innerText = usia;
    document.getElementById("lokasiDisplay").innerText = lokasi;
    document.getElementById("pengalamanDisplay").innerText = pengalaman + ' years';
    document.getElementById("emailDisplay").innerText = email;

    document.getElementById("namaInput").value = nama;
    document.getElementById("roleInput").value = role;
    document.getElementById("availabilityInput").value = availability;
    document.getElementById("usiaInput").value = usia;
    document.getElementById("lokasiInput").value = lokasi;
    document.getElementById("pengalamanInput").value = pengalaman;
    document.getElementById("emailInput").value = email;
}

function simpanPerubahan() {
    const nama = document.getElementById("namaInput").value;
    const role = document.getElementById("roleInput").value;
    const availability = document.getElementById("availabilityInput").value;
    const usia = document.getElementById("usiaInput").value;
    const lokasi = document.getElementById("lokasiInput").value;
    const pengalaman = document.getElementById("pengalamanInput").value;
    const email = document.getElementById("emailInput").value;

    document.getElementById("namaDisplay").innerText = nama;
    document.getElementById("roleDisplay").innerText = role;
    document.getElementById("availabilityDisplay").innerText = availability;
    document.getElementById("usiaDisplay").innerText = usia;
    document.getElementById("lokasiDisplay").innerText = lokasi;
    document.getElementById("pengalamanDisplay").innerText = pengalaman + ' years';
    document.getElementById("emailDisplay").innerText = email;

    localStorage.setItem('nama', nama);
    localStorage.setItem('role', role);
    localStorage.setItem('availability', availability);
    localStorage.setItem('usia', usia);
    localStorage.setItem('lokasi', lokasi);
    localStorage.setItem('pengalaman', pengalaman);
    localStorage.setItem('email', email);

    tampilkanForm();
}