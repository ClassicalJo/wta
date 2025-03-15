import { expect } from 'expect-webdriverio';

import {
  createGiftFromDashboard,
  editTextField,
  getHashBrowserUrl,
  openLink,
  waitForCrumb,
} from '../utils/commands';
import { getByRole, getByTestId, getByText } from '../utils/selectors';

describe('/gift', () => {
  const giftName = 'text-' + Math.random().toString(36).slice(0, 8);
  const updatedGiftName = 'text-' + Math.random().toString(36).slice(0, 8);
  it('Should be able to browse to the Gift dashboard', async () => {
    await openLink('>> Gifts', 'Gift');
  });

  it('Should be able to create a gift', async () => {
    const $giftLink = await createGiftFromDashboard(giftName);
    expect($giftLink).toHaveText(giftName);
  });

  it('Should be able to read a gift', async () => {
    await openLink(giftName, '1');
    const $giftName = await getByText(giftName);
    expect($giftName).toBeDisplayed;
  });

  it('Should be able to update a gift', async () => {
    const $name = await getByTestId('entity-input-group-text-name');
    await editTextField($name, 'name', updatedGiftName);
    await openLink('Gift', 'Gift');
    const $updatedGiftLink = await getByRole('link', updatedGiftName);
    expect($updatedGiftLink).toBeDisplayed();
  });

  it('Should need confirmation before deleting a gift', async () => {
    await openLink(updatedGiftName, '1');
    const $deleteGift = await getByRole('button', 'Delete');
    await $deleteGift.click();
    const $cancelDelete = await getByRole('button', 'Cancel');
    await $cancelDelete.waitForDisplayed();
    await $cancelDelete.click();
    expect($cancelDelete).not.toBeDisplayed();
  });

  it('Should be able to delete a gift and redirected to the dashboard', async () => {
    const $retryDeleteGift = await getByRole('button', 'Delete');
    await $retryDeleteGift.click();
    const $confirmDelete = await getByRole('button', 'Delete');
    await $confirmDelete.click();
    await waitForCrumb('Gift');
    const url = await getHashBrowserUrl();
    expect(url).toBe('/gift');
  });

  it('In the dashboard, the gift should not exist', async () => {
    const $newGift = await getByRole('link', '+ New gift');
    expect($newGift).toBeDisplayed();

    const $newGiftLink = await getByRole('link', updatedGiftName);
    expect($newGiftLink).not.toExist();
  });
});
