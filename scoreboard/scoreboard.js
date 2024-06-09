let home = document.getElementById("home").innerText;
let guest = document.getElementById("guest").innerText;

home = 0;
guest = 0;

function addHome(x) {
    home += x;
    document.getElementById("home").innerText = home;
    if (home > guest) {
        document.getElementById("leadHome").style.display = "block";
        document.getElementById("leadGuest").style.display = "none";
    }
    else if (home == guest) {
        document.getElementById("leadHome").style.display = "none";
        document.getElementById("leadGuest").style.display = "none";
    }
}

function addGuest(x) {
    guest += x;
    document.getElementById("guest").innerText = guest;
    if (guest > home) {
        document.getElementById("leadGuest").style.display = "block";
        document.getElementById("leadHome").style.display = "none";
    }
    else if (guest == home) {
        document.getElementById("leadGuest").style.display = "none";
        document.getElementById("leadHome").style.display = "none";
    }
}