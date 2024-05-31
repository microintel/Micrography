
let arr={
"abcd":[" abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"],
"alpha":[` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$_&-+(/)*:;!?~|•√π÷×§∆}\={°^¥€¢£%©<®™✓[>"`+"`"],
"spc":["]@#$_&- +(/)*:;!?~`|•√π÷×§∆}\={°^¥€¢£%©<®™✓[>"],
"kalpha":[` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$_&-+(/)*:;!?~|•√π÷×§∆}\={°^¥€¢£%©<®™✓[>"`+"`"+"ಅಆಇಈಉಊಋೠಎಏಐಒಓಔಅಂಅಃಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಕ್ಷಜ್ಞ೦೧೨೩೪೫೬೭೮೯"],
"telpha":[` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$_&-+(/)*:;!?~|•√π÷×§∆}\={°^¥€¢£%©<®™✓[>"`+"`"+"అఆఇఈఉఊఋౠఎఏఐఒఓఔఅంఅఃకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహళక్షజ్ఞ౦౧౨౩౪౫౬౭౮౯"],
"galpha":[` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$_&-+(/)*:;!?~|•√π÷×§∆}\={°^¥€¢£%©<®™✓[>"`+"`"+"ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω"],
"talpha":[` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$_&-+(/)*:;!?~|•√π÷×§∆}\={°^¥€¢£%©<®™✓[>"`+"`"+"அஆஇஈஉஊஎஏஐஒஓஔஃகஙசஞடணதநபமயரலவழளறறனஷஸஜஹ௦௧௨௩௪௫௬௭௮௯"],
"malpha":[` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$_&-+(/)*:;!?~|•√π÷×§∆}\={°^¥€¢£%©<®™✓[>"`+"`"+"അആഇഈഉഊഋൠഎഏഐഒഓഔഅംഅഃകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹളഴററ്റ"],
"nalpha":[` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$_&-+(/)*:;!?~|•√π÷×§∆}\={°^¥€¢£%©<®™✓[>"`+"`"+"अआइईउऊऋऌऍऎएऐऑऒओऔअंअःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहऴक्षत्रज्ञ०१२३४५६७८९"]
 ,"allpha":[` abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$_&-+(/)*:;!?~|•√π÷×§∆}\={°^¥€¢£%©<®™✓[>"`+"`"+
 "ಅಆಇಈಉಊಋೠಎಏಐಒಓಔಅಂಅಃಕಖಗಘಙಚಛಜಝಞಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹಳಕ್ಷಜ್ಞ೦೧೨೩೪೫೬೭೮೯"+
 "அஆஇஈஉஊஎஏஐஒஓஔஃகஙசஞடணதநபமயரலவழளறறனஷஸஜஹ௦௧௨௩௪௫௬௭௮௯"+
 "అఆఇఈఉఊఋౠఎఏఐఒఓఔఅంఅఃకఖగఘఙచఛజఝఞటఠడఢణతథదధనపఫబభమయరలవశషసహళక్షజ్ఞ౦౧౨౩౪౫౬౭౮౯"+
 "अआइईउऊऋऌऍऎएऐऑऒओऔअंअःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहऴक्षत्रज्ञ०१२३४५६७८९"+
 "അആഇഈഉഊഋൠഎഏഐഒഓഔഅംഅഃകഖഗഘങചഛജഝഞടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹളഴററ്റ"
 ],
 
 
 };
 
 let dat="";
 function cho(){
let val=document.getElementById("chose").value;
   if(val){
   dat=String(arr[val]);
   }
   
   }
function ed() {
   let a=dat;
   let vall=a.length-10;
   
  //document.write(vall);
   //document.write(a);
    const input = document.getElementById("inp").value;
    const key = parseInt(document.getElementById("key").value);
    const b = a.substr(key) + a.substr(0, key);
    const sele = document.getElementById("typ").value;

    if (key < 2 || key > vall) {
        document.getElementById("out").textContent = "Invalid key value. Please choose a key between 1 and "+vall;
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
    document.getElementById("inp").value="";
    document.getElementById("key").value="";
    document.getElementById("out").innerHTML="The Caesar cipher output will appear here!";
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