import { expect } from 'expect-webdriverio';

import {
  createFightFromDashboard,
  editTextField,
  getHashBrowserUrl,
  openLink,
  waitForCrumb,
} from '../utils/commands';
import { getByRole, getByTestId, getByText } from '../utils/selectors';

describe('/fight', () => {
  const fightName = 'text-' + Math.random().toString(36).slice(0, 8);
  const updatedFightName = 'text-' + Math.random().toString(36).slice(0, 8);
  it('Should be able to browse to the Fight dashboard', async () => {
    await openLink('>> Fight', 'Fight');
  });

  it('Should be able to create a fight', async () => {
    const $fightLink = await createFightFromDashboard(fightName);
    expect($fightLink).toHaveText(fightName);
  });

  it('Should be able to read a fight', async () => {
    await openLink(fightName, '1');
    const $fightName = await getByText(fightName);
    expect($fightName).toBeDisplayed;
  });

  it('Should be able to update a fight', async () => {
    const $name = await getByTestId('entity-input-group-text-name');
    await editTextField($name, 'name', updatedFightName);
    await openLink('Fight', 'Fight');
    const $updatedFightLink = await getByRole('link', updatedFightName);
    expect($updatedFightLink).toBeDisplayed();
  });

  it('Should need confirmation before deleting a fight', async () => {
    await openLink(updatedFightName, '1');
    const $deleteFight = await getByRole('button', 'Delete');
    await $deleteFight.click();
    const $cancelDelete = await getByRole('button', 'Cancel');
    await $cancelDelete.waitForDisplayed();
    await $cancelDelete.click();
    expect($cancelDelete).not.toBeDisplayed();
  });

  it('Should be able to delete a fight and redirected to the dashboard', async () => {
    const $retryDeleteFight = await getByRole('button', 'Delete');
    await $retryDeleteFight.click();
    const $confirmDelete = await getByRole('button', 'Delete');
    await $confirmDelete.click();
    await waitForCrumb('Fight');
    const url = await getHashBrowserUrl();
    expect(url).toBe('/fight');
  });

  it('In the dashboard, the fight should not exist', async () => {
    const $newFight = await getByRole('link', '+ New fight');
    expect($newFight).toBeDisplayed();

    const $newFightLink = await getByRole('link', updatedFightName);
    expect($newFightLink).not.toExist();
  });
});
