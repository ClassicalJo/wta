import { $, browser } from '@wdio/globals';

import { getByRole, getByTestId } from './selectors';

export async function getHashBrowserUrl() {
  const url = await browser.getUrl();
  const path = url.split('#').at(-1) ?? '/';
  return path;
}

export async function openLink(linkText: string, crumbText: string) {
  const $link = await getByRole('link', linkText);
  await $link.click();
  await waitForCrumb(crumbText);
}

export async function editTextField(
  $container: ChainablePromiseElement,
  fieldName: string,
  inputValue: string,
) {
  const $editButton = $container.$(`[aria-label="Edit ${fieldName}"]`);
  $editButton.click();
  const $inputText = $container.$(`input[type="text"]`);
  await $inputText.setValue(inputValue);
  await clickOutside();
}

export async function waitForCrumb(crumbText: string) {
  const $crumb = await getByRole('link', crumbText);
  await $crumb.waitForDisplayed();
}

export async function clickOutside() {
  const $body = $('body');
  await $body.click();
}

export function createEntityFromDashboard(createText: string) {
  return async function (characterName: string) {
    await openLink(createText, 'Create');

    const $name = await getByTestId('entity-input-group-text-name');
    await editTextField($name, 'name', characterName);

    const $submit = await getByRole('button', 'Submit');
    await $submit.click();

    const $characterLink = await getByRole('link', characterName);
    await $characterLink.waitForDisplayed();
    return $characterLink;
  };
}

export const createCharacterFromDashboard =
  createEntityFromDashboard('+ New character');
export const createGiftFromDashboard = createEntityFromDashboard('+ New gift');
export const createRitualFromDashboard =
  createEntityFromDashboard('+ New ritual');
export const createFightFromDashboard =
  createEntityFromDashboard('+ New fight');
