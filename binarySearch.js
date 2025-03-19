var searchInsert = function(nums, target) {
    let min = 0;
    let max = nums.length - 1

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        if (nums[mid] === target) {
            return mid
        } else {
            if (nums[mid] < target) {
                min = mid + 1
            } else if (nums[mid] > target) {
                max = mid - 1
            }
        }
    }
    return min
};

const nums = [1,3,5,6]
searchInsert(nums, 3)