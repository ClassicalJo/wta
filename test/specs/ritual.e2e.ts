import { expect } from 'expect-webdriverio';

import {
  createRitualFromDashboard,
  editTextField,
  getHashBrowserUrl,
  openLink,
  waitForCrumb,
} from '../utils/commands';
import { getByRole, getByTestId, getByText } from '../utils/selectors';

describe('/ritual', () => {
  const ritualName = 'text-' + Math.random().toString(36).slice(0, 8);
  const updatedRitualName = 'text-' + Math.random().toString(36).slice(0, 8);
  it('Should be able to browse to the Ritual dashboard', async () => {
    await openLink('>> Rituals', 'Ritual');
  });

  it('Should be able to create a ritual', async () => {
    const $ritualLink = await createRitualFromDashboard(ritualName);
    expect($ritualLink).toHaveText(ritualName);
  });

  it('Should be able to read a ritual', async () => {
    await openLink(ritualName, '1');
    const $ritualName = await getByText(ritualName);
    expect($ritualName).toBeDisplayed;
  });

  it('Should be able to update a ritual', async () => {
    const $name = await getByTestId('entity-input-group-text-name');
    await editTextField($name, 'name', updatedRitualName);
    await openLink('Ritual', 'Ritual');
    const $updatedRitualLink = await getByRole('link', updatedRitualName);
    expect($updatedRitualLink).toBeDisplayed();
  });

  it('Should need confirmation before deleting a ritual', async () => {
    await openLink(updatedRitualName, '1');
    const $deleteRitual = await getByRole('button', 'Delete');
    await $deleteRitual.click();
    const $cancelDelete = await getByRole('button', 'Cancel');
    await $cancelDelete.waitForDisplayed();
    await $cancelDelete.click();
    expect($cancelDelete).not.toBeDisplayed();
  });

  it('Should be able to delete a ritual and redirected to the dashboard', async () => {
    const $retryDeleteRitual = await getByRole('button', 'Delete');
    await $retryDeleteRitual.click();
    const $confirmDelete = await getByRole('button', 'Delete');
    await $confirmDelete.click();
    await waitForCrumb('Ritual');
    const url = await getHashBrowserUrl();
    expect(url).toBe('/ritual');
  });

  it('In the dashboard, the ritual should not exist', async () => {
    const $newRitual = await getByRole('link', '+ New ritual');
    expect($newRitual).toBeDisplayed();

    const $newRitualLink = await getByRole('link', updatedRitualName);
    expect($newRitualLink).not.toExist();
  });
});
