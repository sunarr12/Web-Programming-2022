const gambar = document.getElementById("gambar")
const pilih = document.getElementById("pilih")

function imageBinatang() {
    if (pilih.value == "domba") {
        return gambar.src = "domba.jpg"
    } else if (pilih.value == "gajah") {
        return gambar.src = "gajah.jpeg"
    } else if (pilih.value == "harimau") {
        return gambar.src = "harimau.jpeg"
    } else if (pilih.value == "jerapah") {
        return gambar.src = "jerapah.jpg"
    } else if (pilih.value == "Kudanil") {
        return gambar.src = "kuda_nil.jpeg"
    } else if (pilih.value == "panda") {
        return gambar.src = "panda.jpeg"
    } else if (pilih.value == "singa") {
        return gambar.src = "singa.jpg"
    } else {
        window.location.reload();
    }
}

function imageConfirmation() {
    if (pilih.value == "domba") {
        alert("Ini Gambar domba")
    } else if (pilih.value == "gajah") {
        alert("Ini Gambar gajah")
    } else if (pilih.value == "harimau") {
        alert("Ini Gambar harimau")
    } else if (pilih.value == "jerapah") {
        alert("Ini Gambar jerapah")
    } else if (pilih.value == "Kudanil") {
        alert("Ini Gambar kudanil")
    } else if (pilih.value == "panda") {
        alert("Ini Gambar panda")
    } else {
        alert("Ini Gambar singa")
    }
}