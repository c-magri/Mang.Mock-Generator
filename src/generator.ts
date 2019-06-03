import { Project, ts } from "ts-morph";

import { build } from "./build";

export class Generator {

	project: Project;

	constructor(tsConfigFilePath: string) {
		this.project = new Project({
			tsConfigFilePath
		});

		console.log("Initialized with ts version", ts.version);
	}

	/**
	 * 
	 * @param sourceFileName Source file name ex: test.model.ts
	 * @param interfaceName Interface name ex: Hero
	 * @param includeAllProps Include all Interface Properties. defaults to false.
	 */
	generate(sourceFileName: string, interfaceName: string, includeAllProps: boolean = false): object {
		const sourceFile = this.project.getSourceFileOrThrow(sourceFileName);
		let props = {};

		if (sourceFile) {
			props = build(interfaceName, sourceFile, props, includeAllProps);
		} else {
			throw Error("[ERROR]: No Source file found");
		}

		return props;
	}
}