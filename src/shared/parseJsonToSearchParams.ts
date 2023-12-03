export const parseJsonToSearchParams = (
  json: { [key: string]: string } = {}
) => {
  const keys = Object.keys(json);
  if (!keys?.length) {
    return "";
  }
  return (
    "?" +
    keys
      .map((key) => {
        return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
      })
      .join("&")
  );
};
