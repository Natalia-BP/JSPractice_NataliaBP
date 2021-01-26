var bulletPosition = Math.floor((Math.random() * 5) + 1);

let spinnerPosition = Math.floor((Math.random() * 5) + 1);

const spinChamber = spinnerPosition => {
	var chamberPosition = Math.floor((Math.random() * 5) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = spinnerPosition => {
    if (bulletPosition == spinnerPosition) return ("You're dead!");
    else return ("Keep playing!");
};

console.log(fireGun(spinnerPosition));