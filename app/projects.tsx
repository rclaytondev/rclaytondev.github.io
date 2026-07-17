import { StaticImageData } from "next/image";

import hypocubeTranslocationImage from "../public/hypocube-translocation.png";
import mathEditorImage from "../public/math-editor.png";
import physicsSimulationImage from "../public/physics-simulation.png";
import platformerRoguelikeImage from "../public/platformer-roguelike.png";
import projectEulerImage from "../public/project-euler.png";
import randomSurvivalGameImage from "../public/random-survival-game.png";
import raycasterImage from "../public/raycaster.png";
import stickDungeonImage from "../public/stick-dungeon.png";

export type ProjectData = {
	id: string,
	title: string,
	description: string,
	button: {
		text: string,
		url: string
	},
	lightBackground: boolean,
	image: StaticImageData
}

export const PROJECTS: ProjectData[] = [
	{
		id: "platformer-roguelike",
		title: "Arachnomechanica (2025-present)",
		description: "A procedurally-generated 2D platformer game about creatures with complex emergent behavior.",
		button: {
			text: "Play online",
			url: "https://rclaytondev.github.io/arachnomechanica"
		},
		lightBackground: false,
		image: platformerRoguelikeImage
	},
	{
		id: "project-euler",
		title: "Project Euler + Codewars (2020-present)",
		description: "I have solved over 150 mathematical programming challenges from the website Project Euler, placing me in the top 0.4% of users.",
		button: {
			text: "View on GitHub",
			url: "https://github.com/rclaytondev/programming-challenges"
		},
		lightBackground: false,
		image: projectEulerImage
	},
	{
		id: "physics-simulation",
		title: "Physics Simulation (2021-2022)",
		description: "An advanced 2D physics engine.",
		button: {
			text: "View on GitHub",
			url: "https://github.com/rclaytondev/physics-simulation"
		},
		lightBackground: true,
		image: physicsSimulationImage
	},
	{
		id: "math-editor",
		title: "Mathematical Text Editor (2023-2024)",
		description: "A text editor with a focus on conveniently supporting mathematical notation.",
		button: {
			text: "View on GitHub",
			url: "https://github.com/rclaytondev/math-editor"
		},
		lightBackground: true,
		image: mathEditorImage
	},
	{
		id: "random-survival-game",
		title: "Random Survival Game (2016-2019)",
		description: "A 2D game in which the player dodges random obstacles, collects and upgrades items, and earns achievements.",
		button: {
			text: "Play online",
			url: "https://rclaytondev.github.io/random-survival-game"
		},
		lightBackground: true,
		image: randomSurvivalGameImage
	},
	{
		id: "stick-dungeon",
		title: "Stick Dungeon (2018-2020)",
		description: "A 2D side-scrolling game in which the player controls a stick figure to fight, explore, and find treasure within an infinite procedurally-generated dungeon.",
		button: {
			text: "Play online",
			url: "https://rclaytondev.github.io/stick-dungeon"
		},
		lightBackground: false,
		image: stickDungeonImage
	},
	{
		id: "hypocube-translocation",
		title: "Hypocube Translocation (2019)",
		description: "An abstract 2D puzzle game about pushing squares around.",
		button: {
			text: "View on GitHub",
			url: "https://github.com/rclaytondev/hypocube-translocation#hypocube-translocation"
		},
		lightBackground: true,
		image: hypocubeTranslocationImage
	},
	{
		id: "raycaster",
		title: "Raycaster (2020)",
		description: "A 3D rendering engine proof-of-concept.",
		button: {
			text: "View on GitHub",
			url: "https://github.com/rclaytondev/raycaster"
		},
		lightBackground: false,
		image: raycasterImage
	},
];
