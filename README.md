# HackerRank - SockMerchant

#####Problem
John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are ``` n = 7```
socks with colors ``` ar = [1,2,1,2,1,3,2]``` . There is one pair of color **1** and one of color **2**. There are three odd socks left, one of each color. The number of pairs is **2**.

#####Function Description

The program uses a given array: 

    socks: array containing colors of each sock


#####Constraints

⋅⋅* ``` arr[i] >= 1 &&  arr[i] < 100 ```
⋅⋅* where ``` i >= 0 &&  i <= arr.length ```

#####Output Format

Return the total number of matching pairs of socks that John can sell.

######Sample Input

```10 20 20 10 10 30 50 10 20```

######Sample Output

``` 3```

#####Explanation

![alt text](https://s3.amazonaws.com/hr-challenge-images/25168/1474122392-c7b9097430-sock.png "Picture connecting all possible pairs in the given array.")

John can match **three** pairs of socks.