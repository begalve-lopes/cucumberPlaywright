import { Before, After } from '@cucumber/cucumber';

Before(async function () {
  const world = this as any;
  await world.init();
});

After(async function () {
  const world = this as any;
  await world.close();
});