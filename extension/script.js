async function fetchData() {
    const res=await fetch ("api_address");
    const record=await res.json();
    document.getElementById("date").innerHTML=record.data[0].date;
    
}
fetchData();