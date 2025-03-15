import { expect } from 'expect-webdriverio';

import {
  createCharacterFromDashboard,
  editTextField,
  getHashBrowserUrl,
  openLink,
  waitForCrumb,
} from '../utils/commands';
import { getByRole, getByTestId, getByText } from '../utils/selectors';

describe('/character', () => {
  const playerName = 'text-' + Math.random().toString(36).slice(0, 8);
  const updatedCharacterName = 'text-' + Math.random().toString(36).slice(0, 8);
  it('Should be able to browse to the Character dashboard', async () => {
    await openLink('>> Characters', 'Character');
  });

  it('Should be able to create a character', async () => {
    const $characterLink = await createCharacterFromDashboard(playerName);
    expect($characterLink).toHaveText(playerName);
  });

  it('Should be able to read a character', async () => {
    await openLink(playerName, '1');
    const $characterName = await getByText(playerName);
    expect($characterName).toBeDisplayed;
  });

  it('Should be able to update a character', async () => {
    const $name = await getByTestId('entity-input-group-text-name');
    await editTextField($name, 'name', updatedCharacterName);
    await openLink('Character', 'Character');
    const $updatedCharacterLink = await getByRole('link', updatedCharacterName);
    expect($updatedCharacterLink).toBeDisplayed();
  });

  it('Should need confirmation before deleting a character', async () => {
    await openLink(updatedCharacterName, '1');
    const $deleteCharacter = await getByRole('button', 'Delete');
    await $deleteCharacter.click();
    const $cancelDelete = await getByRole('button', 'Cancel');
    await $cancelDelete.waitForDisplayed();
    await $cancelDelete.click();
    expect($cancelDelete).not.toBeDisplayed();
  });

  it('Should be able to delete a character and redirected to the dashboard', async () => {
    const $retryDeleteCharacter = await getByRole('button', 'Delete');
    await $retryDeleteCharacter.click();
    const $confirmDelete = await getByRole('button', 'Delete');
    await $confirmDelete.click();
    await waitForCrumb('Character');
    const url = await getHashBrowserUrl();
    expect(url).toBe('/Character');
  });

  it('In the dashboard, the character should not exist', async () => {
    const $newCharacter = await getByRole('link', '+ New character');
    expect($newCharacter).toBeDisplayed();

    const $newCharacterLink = await getByRole('link', updatedCharacterName);
    expect($newCharacterLink).not.toExist();
  });
});
