package main

import (
	"fmt"
	"sync"
)

func main() {
	var counter int      
	var mutex sync.Mutex 
	var wg sync.WaitGroup 
	for i := 0; i < 50; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for j := 0; j < 100; j++ {
				mutex.Lock()
				counter++
				mutex.Unlock()
			}
		}()
	}

	wg.Wait()
	fmt.Println("最终结果:", counter)
}
