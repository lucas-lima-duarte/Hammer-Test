import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Given(/^I want to "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});


Given(/^I want to build a Ferrari$/, () => {
	return true;
});

When(/^I need to send it to the customer$/, () => {
	return true;
});

When(/^I prepare my tools$/, () => {
	return true;
});

When(/^start assembling the Ferrari$/, () => {
	return true;
});

Then(/^a fully assembled Ferrari must be ready$/, () => {
	return true;
});



When(/^start assembling the Bus$/, () => {
	return true;
});

Then(/^a fully assembled Bus must be ready$/, () => {
	return true;
});


