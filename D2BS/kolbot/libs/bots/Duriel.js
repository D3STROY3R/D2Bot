function Duriel() {	Town.doChores();	Pather.useWaypoint(46);	Precast.doPrecast(true);	if (!Pather.moveToExit(getRoom().correcttomb, true) || !Pather.moveToPreset(me.area, 2, 152, -3, -3)) {		throw new Error("Failed to move to Duriel");	}	delay(1000);	if (!Pather.useUnit(2, 100, 73)) {		throw new Error("Failed to move to Duriel");	}	Attack.kill("duriel");	Pickit.pickItems();	return true;}