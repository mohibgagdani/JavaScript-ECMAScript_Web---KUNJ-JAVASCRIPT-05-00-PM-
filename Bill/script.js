function addToBill() {
    let brand = document.getElementById("brand").value;
    let model = document.getElementById("model").value;
    let imei = document.getElementById("imei").value;
    let price = parseFloat(document.getElementById("price").value);
    
    if (!brand || !model || !imei || isNaN(price)) {
        alert("Please fill all fields correctly");
        return;
    }
    
    let gst = price * 0.18;
    let total = price + gst;
    
    let row = `<tr>
        <td>${brand}</td>
        <td>${model}</td>
        <td>${imei}</td>
        <td>${price.toFixed(2)}</td>
        <td>${gst.toFixed(2)}</td>
        <td>${total.toFixed(2)}</td>
    </tr>`;
    
    document.getElementById("bill").innerHTML += row;
    
    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";
    document.getElementById("imei").value = "";
    document.getElementById("price").value = "";
}