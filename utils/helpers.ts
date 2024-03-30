type ClassnameObject = {
  [key: string]: string | boolean | number,
};

type Classname = ClassnameObject | string;

const capitalize = (value: string) => {
  if (!value) return value;

  return value.charAt(0).toUpperCase() + value.slice(1);
};

function classnames(...args: Classname[]): string {
  if (args.length === 1) {
    const [firstEntry] = args;
    if (firstEntry && typeof firstEntry === 'object') {
      /* firstEntry's keys whose value is truthy */
      const activeClasses = Object.entries(firstEntry)
        .filter(([, value]) => value).map(([key]) => key);
      return activeClasses.join(' ');
    }
    return firstEntry;
  }
  return args.filter((entry) => !!entry).map((value) => classnames(value)).join(' ');
}

export {
  capitalize,
  classnames
};
