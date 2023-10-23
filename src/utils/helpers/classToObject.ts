export const classToObject = (classToBeConverted: any) => {
  const obj = {};
  Object.getOwnPropertyNames(classToBeConverted).forEach(function (name) {
    obj[name] = classToBeConverted[name];
  });
  return obj;
};
