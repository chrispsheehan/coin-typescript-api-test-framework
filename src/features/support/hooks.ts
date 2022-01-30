import { Before, BeforeAll, AfterAll } from '@cucumber/cucumber';

Before(function () {

});

BeforeAll(function () {

    console.log('Before All');
});

AfterAll(function () {

    console.log('After All');
});
