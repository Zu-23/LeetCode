function majorityElement(nums: number[]): number | undefined {

  const counts: Record<number, number> = {};
  for (const num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }
  let maxVal = nums[0];
  let maxCount = counts[maxVal];
  for (const val in counts) {
    if (counts[val] > maxCount) {
      maxVal = Number(val);
      maxCount = counts[val];
    }
  }

  return maxVal;
}