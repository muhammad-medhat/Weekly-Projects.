function info(message) {
  console.log(`[INFO] ${message}`);
}
function warn(message) {
  console.log(`[warn] ${message}`);
}
function error(message) {
  console.log(`[error] ${message}`);
}
module.exports = { info, warn, error };
