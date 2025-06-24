package main

import "fmt"

func Deduplicate(nums []int) []int {
	seen := make(map[int]bool)
	var result []int

	for _, num := range nums {
		if !seen[num] {
			seen[num] = true
			result = append(result, num)
		}
	}
	return result
}

func main() {
	nums := []int{1, 2, 2, 3, 4, 3, 5, 1}
	fmt.Println("原始数组：", nums)
	fmt.Println("去重后数组：", Deduplicate(nums))
}
