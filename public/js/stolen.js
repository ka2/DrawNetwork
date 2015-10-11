var socket = io.connect();
var selectedRoom;
var roomList;

socket.emit('get room list');
socket.on('recieve room list', function(data) {
	roomList = data;
	for (var i = 0; i < data.length; i++) {
		var checked = false;
		if(i == 0) {
			checked = true;
		}
		createRadioElement("rooms", data[i]['id'], checked);
	}
	var table = document.getElementById("room-list");
	var tbody = table.getElementsByTagName('tbody')[0];
	for (var i = 0; i < data.length; i++) {
		var row = tbody.insertRow(i);
		row.id = data[i]['id'];
		row.onclick = function() {
			selectedRoom = this.id;
			var temp = document.getElementById(this.id + "-radio");
			temp.checked = true;
			var tableRows = document.getElementById("room-list").rows;
			for(var i = 0; i < tableRows.length; i++) {
				tableRows[i].cells[0].className = "";
				tableRows[i].cells[1].className = "";
				tableRows[i].cells[2].className = "";
			}
			var temp2 = document.getElementById(this.id);
			temp2.cells[0].className = "row-selected";
			temp2.cells[1].className = "row-selected";
			temp2.cells[2].className = "row-selected";
		};
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = data[i]['id'];
		cell2.innerHTML = data[i]['users'] + "/10";
		var time = (new Date().getTime() - data[i]['activity']) / 1000;
		cell3.innerHTML = convertTime(time);

		if (i == 0) {
			selectedRoom = data[i]['id'];
			cell1.className = "row-selected";
			cell2.className = "row-selected";
			cell3.className = "row-selected";
		}
	}
	if (isOverflowed(document.getElementById('table-wrap-scroll'))) {
		document.getElementById('room-id').style.width = "179px";
		document.getElementById('no-users').style.width = "134px";
	}
});

function isOverflowed(element) {
	return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function createRadioElement(name, value, checked) {
	var radioHtml = '<input id="' + value + '-radio" type="radio" name="' + name + '" value="' + value + '"';
	if ( checked ) {
		radioHtml += ' checked="checked"';
	}
	radioHtml += '/>';

	var radioFragment = document.getElementById('room-container');
	radioFragment.innerHTML += radioHtml;
}

checkHomeState();

if (checkPageState()) {
 	socket.emit('does room exist', getURLParam('room'));
 	socket.on('does room exist result', function(data) {
		if(data == true) {
			document.getElementById('name-box').className = "";
			document.getElementById('name-content').className = "";
		} else {
			document.getElementById('name-box').className = "";
			document.getElementById('room-not-exist').className = "";
			document.getElementById('name-content').className = "Invisible";
		}

		//}
  	});
  	// Fall back incase the above doesnt catch that the room doesnt exist
  	socket.on('room does not exist', function(data) {
		document.getElementById('name-box').className = "";
		document.getElementById('room-not-exist').className = "";
		document.getElementById('name-content').className = "Invisible";
  	});
}