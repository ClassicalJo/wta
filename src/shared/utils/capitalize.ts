export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeCamelCase(str: string) {
  return capitalize(str)
    .split(/(?=[A-Z])/)
    .join(' ');
}

export function capitalizeEachWord(str: string) {
  return str.toLowerCase().split(' ').map(capitalize).join(' ');
}
