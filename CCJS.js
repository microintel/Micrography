alert("Please choose your key value between 1 and 86 for better robust security.\n Remember your keys! 🛡️🔐 \nIf you forget your key, the output will be different. 🙈🔓!");
        function ed() {
      
            function en(input, key) {
                let enc = "";
                let xc = "";
                let xz = "";
                for (let x of input) {
                    enc += b[a.indexOf(x)]; }
                xc += b.substr(key, 8);
                xz += a.substr(key, 8);
                let en = xc.substr(0, 4) + xz.substr(0, 4) + enc + xc.substr(4) + xz.substr(4);
                document.getElementById("out").innerHTML = en;
            }

            function de(input) {
                let dec = "";
                let xf = input.slice(8, -8);
                for (let x of xf) {
                    dec += a[b.indexOf(x)];
                }
                document.getElementById("out").innerHTML = dec;
            }

            let a = "";
            for (let c = 33; c < 127; c++) {
                a += String.fromCharCode(c);
            }
            
            a += " ";

            let input = document.getElementById("inp").value;
            let key = parseInt(document.getElementById("key").value);
            let b = a.substr(key) + a.substr(0, key);
            let sele = document.getElementById("typ").value;

            if (sele === "e") {
                en(input, key);
            } else if (sele === "d") {
                de(input);
            } else {
                document.getElementById("out").textContent = "Invalid operation";
            }
        }
        function ref(){
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
    