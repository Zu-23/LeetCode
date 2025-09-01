function containsDuplicate(nums: number[]): boolean {
    const noDup = new Set<number>();
    for (const i of nums)
    {
        if (noDup.has(i))
        {
            console.log("true")
            return true;
        }
        else
            noDup.add(i);
    }
    console.log("false")
    return false;
}

containsDuplicate([2,3,4,5])