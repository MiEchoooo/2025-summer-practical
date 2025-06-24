package main

import "fmt"

// Prime 返回所有小于等于 n 的质数
func Prime(n int) []int {
	if n < 2 {
		return []int{}
	}
	isPrime := make([]bool, n+1)
	for i := 2; i <= n; i++ {
		isPrime[i] = true
	}
	for i := 2; i*i <= n; i++ {
		if isPrime[i] {
			for j := i * i; j <= n; j += i {
				isPrime[j] = false
			}
		}
	}
	var primes []int
	for i := 2; i <= n; i++ {
		if isPrime[i] {
			primes = append(primes, i)
		}
	}
	return primes
}

func main() {
	var n int
	fmt.Print("请输入一个整数 n：")
	fmt.Scan(&n)
	primes := Prime(n)
	fmt.Println("质数有：", primes)
}
