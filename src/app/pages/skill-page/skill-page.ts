/**
 * =============================================================================
 * @description: Logic for the `app-skill-page` component
 * =============================================================================
 */

import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"

import { DividerModule } from "primeng/divider";

import { SkillCard } from "../../components/skill-card/skill-card"

interface SkillCardContent {
	name: string;
	icon: string;
}

@Component({
	selector: "app-skill-page",
	imports: [
		CommonModule,
		DividerModule,
		SkillCard
	],
	templateUrl: "./skill-page.html",
	styleUrl: "./skill-page.scss",
})
export class SkillPage {
	public readonly languages: SkillCardContent[] = [
		{
			name: "C++",
			icon: "assets/icons/skills/cpp.svg",
		},
		{
			name: "C",
			icon: "assets/icons/skills/c.svg",
		},
		{
	      	name: 'Java',
	      	icon: 'assets/icons/skills/java.svg',
	    },
    	{
          	name: 'Go',
          	icon: 'assets/icons/skills/go.svg',
        },
    	{
          	name: 'Python',
          	icon: 'assets/icons/skills/python.svg',
        },
        {
          	name: 'Ruby',
          	icon: 'assets/icons/skills/ruby.svg',
        },
        {
          	name: 'JavaScript',
          	icon: 'assets/icons/skills/javaScript.svg',
        },
        {
          	name: 'TypeScript',
          	icon: 'assets/icons/skills/typeScript.svg',
        },
        {
          	name: 'BASH',
          	icon: 'assets/icons/skills/bash.svg',
        },
        {
          	name: 'PowerShell',
          	icon: 'assets/icons/skills/powershell.svg',
        },
        {
          	name: 'HTML',
          	icon: 'assets/icons/skills/html.svg',
        },
        {
          	name: 'CSS',
          	icon: 'assets/icons/skills/css.svg',
        },
        {
          	name: 'JSON',
          	icon: 'assets/icons/skills/json.svg',
        },
        {
          	name: 'Markdown',
          	icon: 'assets/icons/skills/markdown.svg',
        },
        {
          	name: 'YAML',
          	icon: 'assets/icons/skills/yaml.svg',
        }
    ]

    public readonly frameworks: SkillCardContent[] = [
		{
			name: "SpringBoot",
			icon: "assets/icons/skills/springboot.svg",
		},
		{
			name: "Dropwizard",
			icon: "assets/icons/skills/dropwizard.svg",
		},
		{
			name: "Maven",
			icon: "assets/icons/skills/maven.svg",
		},
		{
			name: "Angular",
			icon: "assets/icons/skills/angular.svg",
		},
		{
			name: "React",
			icon: "assets/icons/skills/react.svg",
		},
		{
			name: "Vue.js",
			icon: "assets/icons/skills/vue.svg",
		},
		{
			name: "Node.js",
			icon: "assets/icons/skills/node.svg",
		},
		{
			name: "Django",
			icon: "assets/icons/skills/django.svg",
		},
    ]

    public readonly tools: SkillCardContent[] = [
        {
            name: "S3",
            icon: "assets/icons/skills/s3.svg",
        },
        {
            name: "Lambda",
            icon: "assets/icons/skills/lambda.svg",
        },
        {
			name: "Docker",
			icon: "assets/icons/skills/docker.svg",
		},
		{
			name: "Podman",
			icon: "assets/icons/skills/podman.svg",
		},
		{
			name: "Kubernetes",
			icon: "assets/icons/skills/kubernetes.svg",
		},
        {
            name: "Visual Studio Code",
            icon: "assets/icons/skills/visualStudioCode.svg",
        },
        {
            name: "Visual Studio",
            icon: "assets/icons/skills/visualStudio.svg",
        },
        {
          	name: 'IntelliJ IDEA',
          	icon: 'assets/icons/skills/intellij.svg',
        },
        {
            name: "Eclipse",
            icon: "assets/icons/skills/eclipse.svg",
        },
        {
            name: "NetBeans",
            icon: "assets/icons/skills/netbeans.svg",
        },
        {
            name: "Postman",
            icon: "assets/icons/skills/postman.svg",
        },
        {
            name: "Apigee",
            icon: "assets/icons/skills/apigee.svg",
        },
        {
            name: "JMeter",
            icon: "assets/icons/skills/jmeter.svg",
        },
        {
            name: "Git",
            icon: "assets/icons/skills/git.svg",
        },
        {
            name: "Github",
            icon: "assets/icons/skills/github.svg",
        },
        {
            name: "Bitbucket",
            icon: "assets/icons/skills/bitbucket.svg",
        },
        {
            name: "Sourcetree",
            icon: "assets/icons/skills/sourcetree.svg",
        },
        {
			name: "JIRA",
			icon: "assets/icons/skills/jira.svg",
		},
    ]

    public readonly data: SkillCardContent[] = [
        {
            name: "PostgreSQL",
            icon: "assets/icons/skills/postgresql.svg",
        },
        {
            name: "MySQL",
            icon: "assets/icons/skills/mysql.svg",
        },
        {
            name: "SQLite",
            icon: "assets/icons/skills/sqlite.svg",
        },
        {
            name: "NoSQL",
            icon: "assets/icons/skills/nosql.svg",
        },
    ]

    public readonly operatingSystems: SkillCardContent[] = [
        {
            name: "Debian",
            icon: "assets/icons/skills/debian.svg",
        },
        {
            name: "Ubuntu",
            icon: "assets/icons/skills/ubuntu.svg",
        },
        {
			name: "Fedora",
			icon: "assets/icons/skills/fedora.svg",
		},
        {
            name: "MacOS",
            icon: "assets/icons/skills/macos.svg",
        },
        {
            name: "Windows",
            icon: "assets/icons/skills/windows.svg",
        },
    ]   
}
