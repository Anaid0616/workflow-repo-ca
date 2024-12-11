export const isActivePath = (href, currentPath) => {
  if (href === "/") {
    return currentPath === "/" || currentPath === "/index.html";
  } else {
    return href.includes(currentPath) || currentPath.includes(href);
  }
};
