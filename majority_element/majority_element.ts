interface majorElem
{
    val : number;
    amount: number;
}

function majorityElement(nums: number[]): number {
    let arr: majorElem [] = [];

    for (let i = 0; i < nums.length; i++)
    {
        if (arr.find(obj => obj.val === nums[i]))
            continue;
        else
            arr.push(countMajor(nums, nums[i]))
    }
    let ret = arr.reduce((maxObj, obj) => {
        if (obj.amount > maxObj.amount)
                return obj;
        else
            return maxObj;
    }, arr[0]);
    return (ret.val)
};

const countMajor = (nums : number[], target : number) : majorElem =>
{
    let amount = nums.filter(num => num === target).length
    return ({val: target, amount : amount})
}

majorityElement([2,2,1,1,1,2,2,2]);
//[2,2,1,1,1,2,2]