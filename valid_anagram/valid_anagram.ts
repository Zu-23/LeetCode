//BRUTE FORCED

// function isAnagram(s: string, t: string): boolean {
//     let sSort = s.split('').sort().join('');
//     let tSort = t.split('').sort().join('');
//     if (sSort === tSort)
//         return true
//     return false
// };

//HASH MAP: O(n)
function isAnagram(s: string, t: string): boolean {
  let anagram1: Record<string, number> = {};
  let anagram2: Record<string, number> = {};
  if (s.length !== t.length) return false;
  for (const char of s) anagram1[char] = (anagram1[char] || 0) + 1;
  for (const char of t) anagram2[char] = (anagram2[char] || 0) + 1;
  for (const char of s) if (anagram1[char] !== anagram2[char]) return false;
  return true;
}
