module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const filtered = members.filter(el => ((typeof el) === 'string'));
  return filtered.map(item => item.trim().slice(0, 1)).join('').toUpperCase().split('').sort().join('');
};