// Kitapları getiren fonksiyon
async function fetchAllKitap() {
    const response = await fetch('/kitap');
    const kitaplar = await response.json();
    
    const kitapList = document.getElementById('kitap-list');
    kitapList.innerHTML = ''; // Önceki listeyi temizle
    kitaplar.forEach(kitap => {
        const li = document.createElement('li');
        li.textContent = `${kitap.adi} - ${kitap.yazari} - ${kitap.fiyati} TL`;
        kitapList.appendChild(li);
    });
}

// Yeni kitap ekleyen fonksiyon
document.getElementById('kitap-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const kitapAdi = document.getElementById('kitap-adi').value;
    const kitapYazari = document.getElementById('kitap-yazari').value;
    const kitapFiyati = document.getElementById('kitap-fiyati').value;

    await fetch('/kitap', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            adi: kitapAdi,
            yazari: kitapYazari,
            fiyati: kitapFiyati
        })
    });

    fetchAllKitap(); // Kitap listesini güncelle
});

// Kullanıcıları getiren fonksiyon
async function fetchAllKullanici() {
    const response = await fetch('/kullanici');
    const kullanicilar = await response.json();
    
    const kullaniciList = document.getElementById('kullanici-list');
    kullaniciList.innerHTML = ''; // Önceki listeyi temizle
    kullanicilar.forEach(kullanici => {
        const li = document.createElement('li');
        li.textContent = `${kullanici.adi} - ${kullanici.soyadi} - Bakiye: ${kullanici.bakiye} TL`;
        kullaniciList.appendChild(li);
    });
}

// Kitap satın alma işlemi
document.getElementById('satin-al-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const kullaniciId = document.getElementById('kullanici-id').value;
    const kitapId = document.getElementById('kitap-id').value;
    const miktar = document.getElementById('miktar').value;

    const response = await fetch('/function/satin-al', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            kullaniciId,
            kitapId,
            miktar
        })
    });

    const result = await response.json();
    alert(result.message);
});
