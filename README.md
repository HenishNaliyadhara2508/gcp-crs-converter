To run the server
### `npm run dev`

To create a build
### `npm run build`

To fix prettier issue
### `npx prettier --write .`

This command will allow you to fix styling errors in all modules like indentation issue or any other rules defined in .prettierrc module.
Please visit those rules to avoid any unnecessary error.

You can check eslint rules in .eslintrc.cjs modules
To learn more about eslint pleas refer this url https://eslint.org/docs/latest/rules/

To log the value please use following method, you can import logger module from utils
    import { logger } from './utils/Logger.jsx'; 
    logger.log('index');
    logger.warn('index warn');
    logger.error('index error');

## NOTE: If facing an error `Error: Could not find config file.`
	check eslint version `npx eslint --version`
	if eslint version > 8.56.0
	run `npm i eslint@8.56.0` 

## NOTE: If directory structure is like following
		-- Project
		  -- .git
		  -- frontend
		    - package.json
		    - other modules
	In such a scenario you have to update the package.json file
		`"prepare": "husky install"` to `"prepare": "cd .. && husky install frontend/.husky"`
		here, `frontend` refers to directory name so change it accordingly.
		then run following command 
		`npm run prepare`

## In main.yml and staging.yml, replace 's3://xyz' with your specific bucket name ('s3://{bucket_name}') for each environment file.