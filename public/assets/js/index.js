//get request from sever
$.get("/api/tables/", (data) =>{
    console.log(data);
    if(data){
        data.forEach(d, index=> {
           const li = $("<li>").text(`${index+1} ${d.name}`)
           $("#appendResList").append(li)
        });
    }
});

$.get("/api/tables/", (data) =>{
    console.log(data);
    if(data){
        data.forEach(d, index=> {
           const li = $("<li>").text(`${index+1} ${d.name}`)
           $("#appendWaitList").append(li)
        });
    }
});

$('#clear').on('click'), (e) =>{
    $("#appendWaitList").empty();
    $("#appendRestList").empty();

    $.post("/api/clear/")
    .then((data) =>{
        alert(data)
    })  
}


$("#add-res").on("click", (e) =>{
    e.preventDefault()

    const newRes = {
        name : $("#reserve_name").val().trim(),
        phoneNumber : $("#reserve_phone").val().trim(),
        email : $("#reserve_email").val().trim(),
        uniqueID : $("reserve_uniqueID").val().trim(),
    } 

    $.post("/api/reserve/", newRes)
        .then((data) => console.log("test.html", data));
})

