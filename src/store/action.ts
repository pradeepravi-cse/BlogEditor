export const saveDocs = (doc) => {
  console.log(doc);
  return {
    type: "STORE_DOCUMENT",
    payload: doc,
  };
};
