alert("Please choose your key value between 1 and 86 for better robust security.\n Remember your keys! 🛡️🔐 \nIf you forget your key, the output will be different. 🙈🔓!");
function ed() {
    const a = " " + Array.from({ length: 94 }, (_, i) => String.fromCharCode(i + 33)).join("");
    const input = document.getElementById("inp").value;
    const key = parseInt(document.getElementById("key").value);
    const b = a.substr(key) + a.substr(0, key);
    const sele = document.getElementById("typ").value;

    if (key < 1 || key > 86) {
        document.getElementById("out").textContent = "Invalid key value. Please choose a key between 1 and 86.";
        return;
    }

    if (sele === "e") {
        en(input, key, a, b);
    } else if (sele === "d") {
        de(input, a, b);
    } else {
        document.getElementById("out").textContent = "Invalid operation";
    }
}

function en(input, key, a, b) {
    let enc = "";
    for (let x of input) {
        enc += b[a.indexOf(x)];
    }
    let xc = b.substr(key, 8);
    let xz = a.substr(key, 8);
    let en = xc.substr(0, 4) + xz.substr(0, 4) + enc + xc.substr(4) + xz.substr(4);
    document.getElementById("out").innerHTML = en;
}

function de(input, a, b) {
    let dec = "";
    let xf = input.slice(8, -8);
    for (let x of xf) {
        dec += a[b.indexOf(x)];
    }
    document.getElementById("out").innerHTML = dec;
}

function ref() {
    location.reload();
}

function cpy() {
    const x = document.getElementById("out").textContent;
    
    const x1 = document.createElement("textarea");
    x1.value = x;
    document.body.appendChild(x1);
    
    x1.select();
    document.execCommand("copy");
    
    document.body.removeChild(x1);
    
    alert("Copied to clipboard");
}
