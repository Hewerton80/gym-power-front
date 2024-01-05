export const parseJsonToSearchParams = (json: any = {}) => {
  const keys = Object.keys(json);
  if (!keys?.length) {
    return "";
  }
  return (
    "?" +
    keys
      .map((key) => {
        return (
          encodeURIComponent(key) + "=" + encodeURIComponent(String(json[key]))
        );
      })
      .join("&")
  );
};
