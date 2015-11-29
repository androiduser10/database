function loadPage(){
    $("lookup").observe("click", check);
}

function checkFile(){
    if ($("checkbox").checked === true){
        new Ajax.Request("world.php?all=true",
        {
            method:"GET",
            onSuccess: function view(ajax){
                $("result").innerHTML = ajax.responseText;
            }
        }
    );
    }
    else {
        var country = $("term").value;
        new Ajax.Request("world.php? lookup="+country,
        {
            method: "GET",
            onSuccess: function showResponse(ajax){
                alert(ajax.responseText);
                $("result").innerHTML = ajax.responseText;
            }
        }
    );
    }
}
window.onload = loadPage;