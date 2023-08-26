import { Given } from "@badeball/cypress-cucumber-preprocessor";


Given(/^I want to "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

