pckage.json --> identifies npm package dependencies for the project.

tsconfig.json --> defines how the TypeScript compiler generates JavaScript 
		 from the project's files.

typings.json --> provides additional definition files for libraries that 
	         the TypeScript compiler doesn't natively recognize.

systemjs.config.js --> provides information to a module loader about where 
		       to find application modules, and registers all the 
		       necessary packages. It also contains other packages 
		       that will be needed by later documentation examples

sidebar.component.ts --> this is the parent component that on click will display data
		  	 to the child component (display box)

display.component.ts --> this is the child  component that revieves data and will display
			 the data
