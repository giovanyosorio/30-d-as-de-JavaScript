function findMyKey(array) {
  // Tu código aquí 👈
  const find = array.findIndex((element) => element === "myKey")

  if (find == -1 || array.length == 0){ return false }
  else { return find }
}
