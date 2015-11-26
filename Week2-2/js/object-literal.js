var hotel = {
	name: 'Stamford',
	rooms: 50,
	booked: 35,
	
	checkAvailability: function(){
		return this.rooms - this.booked;
	}
}

var elName = document.getElementById('hotelName');
elName.textContent = hotelName = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = roomsFree = hotel.checkAvailability();