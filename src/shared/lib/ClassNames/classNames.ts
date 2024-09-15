type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [cls, ...Object.entries(mods).filter(([cls, flag]) => Boolean(flag)).map(([cls, elem]) => cls), ...additional.filter(Boolean)].join(' ');
}
