import { BeforeAll, AfterAll } from "cucumber";

BeforeAll(function () {
  // eslint-disable-next-line no-console
  console.log('Before All');
});

AfterAll(function () {
  // eslint-disable-next-line no-console
  console.log('After All');
});
