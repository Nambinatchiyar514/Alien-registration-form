// Form Validation Functions
function validatePlanet(name) {
    let regex = /^(?=.*[aeiouAEIOU])(?=.*\d).+$/;
    return regex.test(name);
}

function validateAntenna(count) {
    let num = parseInt(count);
    return !isNaN(num) && num % 2 === 0;
}

function validateAlienID(id) {
    let regex = /^ZOR-[A-Z]{2}_\d{4}@UFO$/;
    return regex.test(id);
}

function validatePhrase(phrase) {
    let regex = /[\p{P}\p{Emoji}]/u;
    return regex.test(phrase);
}

function validateLandingDate(dateStr) {
    let inputDate = new Date(dateStr);
    let today = new Date();
    today.setHours(0,0,0,0);
    return inputDate >= today;
}

// Image Preview
document.getElementById('alienImage').addEventListener('change', function(event) {
    let preview = document.getElementById('preview');
    let file = event.target.files[0];
    if(file && (file.type === "image/jpeg" || file.type === "image/png") && file.size <= 2*1024*1024){
        preview.src = URL.createObjectURL(file);
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
        alert("Image must be JPG/PNG and less than 2MB!");
        event.target.value = ""; // reset file input
    }
});

// Form Submit
document.getElementById("alienForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let planet = document.getElementById("planet").value;
    let antenna = document.getElementById("antenna").value;
    let alienID = document.getElementById("alienID").value;
    let phrase = document.getElementById("phrase").value;
    let date = document.getElementById("landingDate").value;
    let image = document.getElementById("alienImage").files[0];

    if (!validatePlanet(planet)) return alert("Planet must have at least one vowel and one number!");
    if (!validateAntenna(antenna)) return alert("Antenna count must be an even number!");
    if (!validateAlienID(alienID)) return alert("Alien ID must match ZOR-XY_9999@UFO!");
    if (!validatePhrase(phrase)) return alert("Phrase must contain emoji or punctuation!");
    if (!validateLandingDate(date)) return alert("Landing date cannot be in the past!");
    if (!image) return alert("Please upload an alien image!");

    alert("Alien registration successful 🚀");
    document.getElementById("alienForm").reset();
    document.getElementById("preview").style.display = 'none';
});
