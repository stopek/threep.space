// @todo - move data to api
import { ISkill } from "./components/Skills/components/Skill";
import { IStage } from "./components/Stages/components/Stage";
import { IKnowItem } from "./components/Knowledge/components/KnowItem";
import { IDesignItem } from "./components/Design/components/DesignItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import { TMenuItem } from "./components/HubMenu/types";
import { paths } from "./routing";
import { IDialItem } from "./components/Dial";

export const filters_list: string[] = ["react", "angular", "symfony", "code_igniter", "rest"];

export const dialog_menu_list: IDialItem[] = [
	{
		url: paths.HUB,
		translation: "txt.home",
	},
	{
		div: "about",
		translation: "txt.about_me",
	},
	{
		div: "portfolio",
		translation: "txt.my_projects",
	},
];

export const skillsData: ISkill[] = [
	{
		name: "react",
		percentage: 95,
	},
	{
		name: "angular",
		percentage: 85,
	},
	{
		name: "js_ts",
		percentage: 90,
	},
	{
		name: "symfony",
		percentage: 87,
	},
	{
		name: "code_igniter",
		percentage: 85,
	},
	{
		name: "php_mysql",
		percentage: 84,
	},
	{
		name: "linux_bash",
		percentage: 50,
	},
	{
		name: "python",
		percentage: 25,
	},
];

export const knowledge_items: IKnowItem[] = [
	{
		title: "Frontend Developer",
		description:
			"I started with React and later learned Angular. The knowledge gained from working with these frameworks allowed me to understand current frontend technologies and develop the ability to design dynamic web applications.",
	},
	{
		title: "Backend Developer",
		description:
			"I began my programming journey with backend technologies combined with frontend ones. For a long time, I focused mainly on this approach. During this time, I learned PHP, CodeIgniter, Symfony, and MySQL among others.",
	},
	{
		title: "DevOps",
		description:
			"I have experience in managing Linux servers, configuring, optimizing, and automating tasks. I created an installer for CentOS to configure VPS, which helped me in setting up and managing VPS servers.",
	},
];

export const design_items: IDesignItem[] = [
	{
		name: "Creating Interfaces",
		description:
			"Ability to create interfaces using, among others: CSS/SCSS, HTML, StyledComponents or Tailwindcss with responsive versions in mind",
	},
	{
		name: "Graphic Programs",
		description:
			"Very good knowledge of Adobe Photoshop. Sufficient knowledge of programs like Figma, Adobe XD",
	},
	{
		name: "External Libraries",
		description:
			"Knowledge and ability to use MaterialUI libraries (slightly less of MUI) and PrimeNG",
	},
];

export const stages_list: IStage[] = [
	{
		name: "angular",
		icon: "/stages/angular.png",
	},
	{
		name: "scrum",
		icon: "/stages/scrum.png",
	},
	{
		name: "react",
		icon: "/stages/react.png",
	},
	{
		name: "symfony",
		icon: "/stages/symfony.png",
	},
];

export const hub_urls: TMenuItem[] = [
	{
		url: "https://github.com/stopek",
		Icon: GitHubIcon,
		label: "GitHub",
	},
	{
		url: "https://www.linkedin.com/in/threep",
		Icon: LinkedInIcon,
		label: "LinkedIn",
	},
	{
		to: paths.PORTFOLIO,
		Icon: BusinessCenterIcon,
		label: "Portfolio",
		margin: 3,
	},
	{
		url: "https://www.facebook.com/pawel.stopek",
		Icon: FacebookIcon,
		label: "Facebook",
	},
	{
		url: "https://znanyfotograf.com/pawel-stopczynski",
		Icon: LinkedCameraIcon,
		label: "Photography",
	},
];
