package main

import "fmt"

// 练习4：合并有序数组
func merge(nums1 []int, m int, nums2 []int, n int) {
    i := m - 1
    j := n - 1
    k := m + n - 1
    for i >= 0 && j >= 0 {
        if nums1[i] > nums2[j] {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
    for j >= 0 {
        nums1[k] = nums2[j]
        j--
        k--
    }
}

func main() {
    nums1 := []int{1, 3, 5, 0, 0, 0}
    m := 3
    nums2 := []int{2, 4, 6}
    n := 3
    merge(nums1, m, nums2, n)
    fmt.Println("合并后的数组:", nums1)
}
