type TMods = Record<string, boolean | string>;

// Record - первый аргуемент тип поля, второй аргумент тип того что лежит в этом поле
// объект с неограниченным колличеством полей но ограниченным типом полей

type TClassNames = (
  baseClass: string,
  mods?: TMods,
  additional?: string[]
) => string;

export const classNames: TClassNames = (
  baseClass,
  mods = {},
  additional = []
) => {
  return [
    baseClass,
    ...additional.filter(Boolean),
    Object.entries(mods)
      .filter(([cls, value]) => Boolean(value))
      .map(([cls]) => cls)
  ].join(' ');
};
