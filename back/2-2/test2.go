package main

import (
	"fmt"
)

func main() {
	letterChan := make(chan bool) 
	numberChan := make(chan bool)
	done := make(chan bool)     

	go func() {
		for ch := 'A'; ch <= 'Z'; ch++ {
			<-letterChan          
			fmt.Print(string(ch))   
			numberChan <- true      
		}
	}()

	go func() {
		for i := 1; i <= 26; i++ {
			<-numberChan          
			fmt.Print(i)           
			if i == 26 {
				done <- true      
				return
			}
			letterChan <- true  
		}
	}()

	letterChan <- true
	<-done
}
