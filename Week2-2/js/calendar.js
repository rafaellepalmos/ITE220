// display the calendar here
var hotelTable = document.getElementById("hotelCalendarTable");
var defaultData = hotelTable.innerHTML;
var stringHTML = "<tr>";

for (var i=1; i < 32; i++) {
	if (i%7 == 0){
		stringHTML += "<td>"+i+"</td></tr><tr>";
	} else {
		stringHTML += "<td>"+i+"</td>";
	}
}
stringHTML += "</tr>"
hotelTable.innerHTML += stringHTML;
