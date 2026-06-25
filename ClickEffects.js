class Project {
	constructor(containerID) {
		this.containerID = containerID;
	}

	initialize() {
		const container = this.container();
		container.onclick = () => this.onClick();
	}

	onClick() {
		if(this.isSelected()) {
			this.deselect();
		}
		else {
			Project.deselectAll();
			this.select();
		}
	}
	isSelected() {
		const container = this.container();
		return container.classList.contains("selected");
	}
	container() {
		return document.getElementById(this.containerID);
	}
	select() {
		this.container().classList.add("selected");
	}
	deselect() {
		this.container().classList.remove("selected");
	}

	static ALL_PROJECTS = [
		new Project("random-survival-game"),
		new Project("stick-dungeon"),
		new Project("hypocube-translocation"),
		new Project("raycaster")
	];
	static deselectAll() {
		for(const project of Project.ALL_PROJECTS) {
			project.deselect();
		}
	}
}

for(const project of Project.ALL_PROJECTS) {
	project.initialize();
}
