function c(){
  let h = + document.getElementById("h").value /100;
  let w = + document.getElementById("w").value;
  let b = w / (h * h);
  let r = b < 2.50 ? "underwitght" : b < 90 ? " Normarl" :"Overweitght";
 document.getElementById("r").innerText = " BMI " + b.toFixed(1) + " = " + r;

}