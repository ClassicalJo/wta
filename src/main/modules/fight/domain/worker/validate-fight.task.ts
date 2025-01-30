import { Fight } from '../fight.entity';

export function validateFight(data: Record<string, unknown>): Fight | null {
  if (data == null || typeof data !== 'object') {
    return null;
  }

  if (
    'name' in data &&
    data['name'] !== undefined &&
    typeof data['name'] !== 'string'
  ) {
    return null;
  }

  if (
    'description' in data &&
    data['description'] !== undefined &&
    typeof data['description'] !== 'string'
  ) {
    return null;
  }

  if (
    'groupA' in data &&
    data['groupA'] !== undefined &&
    !Array.isArray(data['groupA'])
  ) {
    return null;
  }

  if (
    'groupB' in data &&
    data['groupB'] !== undefined &&
    !Array.isArray(data['groupB'])
  ) {
    return null;
  }

  if (
    'times' in data &&
    data['times'] !== undefined &&
    typeof data['times'] !== 'number'
  ) {
    return null;
  }

  return data as Fight;
}
