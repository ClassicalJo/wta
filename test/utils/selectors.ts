import { $ } from '@wdio/globals';

export const getByTestId = async (testId: string) => {
  return $(`[data-testid="${testId}"]`);
};

export const getByRole = async (role: string, text?: string) => {
  const roleSelector = `[role="${role}"]`;
  const nameSelector = text ? `=${text}` : '';
  return $(`${roleSelector}${nameSelector}`);
};

export const getByText = async (text: string) => {
  return $(`//*[text()="${text}"]`);
};
