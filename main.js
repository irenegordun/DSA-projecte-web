//setUpStore
function getShop() {
    $.ajax({
        type: 'GET',
        url: "/dsaApp/store/itemList",
        dataType: 'json',
        success: function (result) {
            $.each(result, function (i, e) {
                $('#table').append(
                    '<tr><td><p><b> ' + e.name +
                    '</b></p><p>' + e.description +
                    '</p><p>' + '<b>Price:</b> ' + e.cost +
                    '</p></td> <td><p>' +  
                    '</p></td> <td> <div class="container"> <input type="submit" value="Buy" ' +
                    ' class="button" onclick="buyItem(this.id)" id="' + e.name + '"></div> </td> </tr>'
                );
            });
        },
        error: function (error) {
            alert("Unable to get Shop data");
        }
    });
}

//setUpInventory
function getInventory() {
    let userlocal = localStorage.getItem("loggedUser");
    $.ajax({
        type: 'GET',
        url: "/dsaApp/store/userInventoryList/" + userlocal,
        dataType: 'json',
        success: function (result) {
            $.each(result, function (i, e) {
                $('#table').append(
                    '<tr><td><p>' + e.itemName +
                    '</p></td><td><p>' + e.itemDescription +
                    '</p></td><td><p>' + e.itemQuantity
                );
            });
        },
        error: function (error) {
            alert("Unable to get your inventory");
        }
    });
}

//Rankings
function getRankings() {
    $.ajax({
        type: 'GET',
        url: "/dsaApp/game/byPoints",
        dataType: 'json',
        success: function (result) {
            $.each(result, function (i, e) {
                $('#table').append(
                    '<tr><td><p>' + e.userName + '</p></td><td><p>' + e.points + '</td></p></tr>'
                );
            });
        },
        error: function (error) {
            alert("Unable to get ranking.");
        }
    });
}