"use strict";
function majorityElement(nums) {
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (arr.find(obj => obj.val === nums[i]))
            continue;
        else
            arr.push(countMajor(nums, nums[i]));
    }
    console.log(...[1, 2, 3, 4]);
    console.log([1, 2, 3, 4]);
    return (1);
}
;
const countMajor = (nums, target) => {
    let amount = nums.filter(num => num === target).length;
    return ({ val: target, amount: amount });
};
majorityElement([2, 2, 1, 1, 1, 2, 2, 2]);
//[2,2,1,1,1,2,2]
