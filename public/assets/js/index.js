//get request from sever
$.get("/api/tables/", (data) =>{
    console.log(data);
    if(data){
        for(let i = 0; i < data.length; i++){
            const li = $("<li>").text(`${i+1} ${data.name}`)
            $("#appendRestList").append(li)
            }
    }
});

$.get("/api/tables/", (data) =>{
    console.log(data);
    if(data){
        for(let i = 0; i < data.length; i++){
        const li = $("<li>").text(`${i+1} ${data.name}`)
        $("#appendWaitList").append(li)
        }
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
        uniqueID : $("#reserve_uniqueID").val().trim(),
    } 

    $.post("/reserve/", newRes)
        .then((data) => console.log("test.html", data));
})

