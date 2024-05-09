# dwarfsort
Dwarfsort.js - A proof-of-concept silly sorting algorithm

# What?
This is a very silly sorting algorithm made from a joke in the Lord of the Rings movie, where you "toss a dwarf". In this algorithm, the numbers are sorted by checking if the array is sorted, and if not, throwing the first element of the array to the back until it is.

# Efficiency
This algorithm is as efficient as the bubble sorting algorithm if my non-scientific testing methods are anything to trust.

# Why?
This algorithm does not have any practical use cases, other than novelty. It's made from a joke, after all.

# Stability
The stability of this algorithm is not verified. It might get stuck sorting the same number until it's stopped.

# How?
The method used to keep the array sorted can be broken down as follows.
1. For each element of the array, check if the current element is smaller than the next one.
2. If it's not, throw the current element to the end of the array.
3. Repeat until the checks pass for the entire array.
