function solution(nums) {
  if (nums == null) {
    return [];
  } else {
    nums = nums.sort((a, b) => {
      return a - b;
    });
  }
  return nums;
}
console.log(solution([6, 2, 4, 5]));
