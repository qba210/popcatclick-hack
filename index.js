console.log("%cpopcat.click hack", "font-size: 35px;color: yellow;font-family:verdana");
console.log("%cHack loaded successfuly!", "font-weight: bold;font-size: 27px;color: #0ea7ed;font-family:verdana");

class PopcatHack {
	clickers = 1;
	waitTime = 3;
	unpopCat = true;
	isActive = true;
	timeouts = [];

	constructor(){this.updateIntervals()}

	updateIntervals(){
		if (!this.isActive) return;
		this.stopAll();
		for (let i = 0; i < this.clickers; i++){
			this.timeouts.push(setInterval(() => this.pop(), this.waitTime));
		}
	}

	startAll(){
		this.isActive = true;
		this.updateIntervals();
	}

	stopAll(){
		this.isActive = false;
		this.timeouts.forEach(timeout => clearInterval(timeout));
	}

	setClickerCount(count){
		this.clickers = count;
		this.updateIntervals();
	}

	setWaitTime(time){
		this.waitTime = time;
		this.updateIntervals();
	}

	setUnpopCat(unpop){
		this.unpopCat = unpop;
	}

	pop(){
		document.dispatchEvent(new KeyboardEvent("keydown"));
		if (this.unpopCat){
			document.dispatchEvent(new KeyboardEvent("keyup"));
		}
	}
}

try{
popcatHack = new PopcatHack();
}catch{const popcatHack = new PopcatHack()}