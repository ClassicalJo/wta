import { Fight } from '../fight.entity';

export function validateFight(
  data: Record<string, unknown>,
): [Fight | null, string[] | null] {
  const response: string[] = [];
  if (data == null || typeof data !== 'object') {
    response.push('Data must be an object.');
  }
  if (
    'name' in data &&
    data['name'] !== undefined &&
    typeof data['name'] !== 'string'
  ) {
    response.push('Name must have at least one character.');
  }

  if (
    'groupA' in data &&
    data['groupA'] !== undefined &&
    !Array.isArray(data['groupA'])
  ) {
    response.push('Group A must be an array.');
  }

  if (
    'groupA' in data &&
    data['groupA'] !== undefined &&
    Array.isArray(data['groupA']) &&
    data['groupA'].length < 1
  ) {
    response.push('Group A must have at least one character.');
  }

  if (
    'groupB' in data &&
    data['groupB'] !== undefined &&
    !Array.isArray(data['groupB'])
  ) {
    response.push('Group B must be an array.');
  }

  if (
    'groupB' in data &&
    data['groupB'] !== undefined &&
    Array.isArray(data['groupB']) &&
    data['groupB'].length < 1
  ) {
    response.push('Group B must have at least one character.');
  }

  if (
    'times' in data &&
    data['times'] !== undefined &&
    typeof data['times'] !== 'number'
  ) {
    response.push('Times must be a number.');
  }

  if (response.length > 0) {
    return [null, response];
  } else {
    return [data as Fight, null];
  }
}
