Contains Duplicate in Array


Problem: Determine if an array contains any duplicate elements.

Efficient Solution:


- Use a set to track unique elements as you iterate.
- If an element is already in the set, a duplicate exists.
Code:


	function containsDuplicate(nums: number[]): boolean {
	    const noDup = new Set<number>();
	    for (const i of nums) {
	        if (noDup.has(i))
	            return true;
	        else
	            noDup.add(i);
	    }
	    return false;
	}

Complexity:


- Time: O(n)
- Space: O(n)
Why Efficient?


- Set lookups and insertions are O(1) on average.
- Only a single pass through the array.
- Early exit if a duplicate is found.
Patterns:


- Uniqueness checking with a set.
- Early exit for efficiency.
Takeaway:
Sets are ideal for quickly checking for duplicates in arrays. Early exit can save time when a duplicate is found before reaching the end.