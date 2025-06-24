package main

import "fmt"

// TreeNode 定义二叉树节点
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func BuildTree(nums []int) *TreeNode {
	if len(nums) == 0 || nums[0] == -1 {
		return nil
	}
	root := &TreeNode{Val: nums[0]}
	queue := []*TreeNode{root}
	i := 1
	for i < len(nums) {
		node := queue[0]
		queue = queue[1:]
		if i < len(nums) && nums[i] != -1 {
			node.Left = &TreeNode{Val: nums[i]}
			queue = append(queue, node.Left)
		}
		i++
		if i < len(nums) && nums[i] != -1 {
			node.Right = &TreeNode{Val: nums[i]}
			queue = append(queue, node.Right)
		}
		i++
	}
	return root
}

func PreOrder(node *TreeNode) {
	if node == nil {
		return
	}
	fmt.Print(node.Val, " ")
	PreOrder(node.Left)
	PreOrder(node.Right)
}

func main() {
	nums := []int{1, 2, 3, -1, 4, 5, -1}
	root := BuildTree(nums)
	fmt.Print("前序遍历结果：")
	PreOrder(root)
}
