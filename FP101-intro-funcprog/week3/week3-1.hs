-- Ex 0
-- Which of these expressions calculates the sum: 12+22+...+1002 of the first one hundred integer squares?
sum100 = sum [x ^ 2 | x <- [1.. 100]]

-- Ex 1
-- The library function replicate :: Int -> a -> [a] produces a list of identical elements. Choose one
-- possible implementation for this function. For example:

replicate n a = [a | _ <- [1..n]]

-- Ex 2
-- A triple (x, y, z) of positive integers is pythagorean if x2+y2=z2. Choose the correct implementation for
-- the function pyths :: Int -> [(Int, Int, Int)] that returns the list of all pythagorean triples whose components
-- are at most a given limit.

pyths n = [(x, y, z) | x <- [1..n], y <- [1..n], z <- [1..n], x ^ 2 + y ^ 2 == z ^ 2]

-- Ex 3
-- A positive integer is perfect if it equals the sum of its factors, excluding the number itself.
-- Choose the correct definition of the function perfects :: Int -> [Int] that returns the list of all
-- perfect numbers up to a given limit.

perfects n = [x | x <- [1..n], isPerfect x]
  where isPerfect num = sum (init(factors num)) == num

-- Ex 4
-- The following list comprehension:
-- [(x, y) | x <- [1,2,3], y <- [4,5,6]]
-- can be re-expressed using two or more comprehensions with single generators.
-- Choose the implementation that is equivalent to the one above.

concat [[(x, y) | y <- [4,5,6]] | x <- [1,2,3]]

-- Ex 5
-- Redefine the function positions discussed in the lecture, using the function find:

find :: (Eq a) => a -> [(a, b)] -> [b]
find k t = [v | (k', v) <- t, k == k']
positions :: (Eq a) => a -> [a] -> [Int]
positions x xs = find x (zip xs [0..n])
  where n = length xs - 1

-- Ex 6
-- The scalar product of two lists of integers xs and ys of length n is given by the sum of the products of
-- corresponding integers:
-- sum ( (xs !! i) * (ys !! i) ) for i = 0 to n-1
-- Choose the correct definition of scalarproduct :: [ Int ] -> [ Int ] -> Int that returns the scalar
-- product of two lists.
-- > scalarproduct [1, 2, 3] [4, 5, 6]
-- 32

scalarproduct xs ys = sum [x * y | (x, y) <- xs `zip` ys]

-- Ex 7

import Data.Char
let2int :: Char -> Int
let2int c
  | isLower c = ord c - ord 'a'
  | isUpper c = ord c - ord 'A'
  | otherwise = ord c
int2let :: Int -> Char
int2let n
  | n >= 97 = chr (ord 'A' + n)
  | otherwise = chr (ord 'a' + n)
shift :: Int -> Char -> Char
shift n c
  | isAlpha c = int2let ((let2int c + n) `mod` 26)
  | otherwise = c
encode :: Int -> String -> String
encode n xs = [shift n x | x <- xs]

-- Modify the Caesar cipher program to also handle upper-case letters. Given the following string Think like a
-- Fundamentalist Code like a Hacker, encode it with your modified program (using shift size 13) and choose the
-- correct output.

-- Guvax yvxr n Shaqnzragnyvfg Pbqr yvxr n Unpxre

-- Ex 8
-- Evaluating [(x, y) | x <- [1, 2], y <- [1, 2]] gives:
-- [(1,1), (1,2), (2,1), (2,2)]

-- Ex 9
-- Evaluating [x | x <- [1, 2, 3], y <- [1..x]] gives:
-- [1,2,2,3,3,3]

-- Ex 10
-- Evaluating sum [x | x <- [1..10], even x] gives:
-- 30

-- Ex 11
-- The equation xs = 1 : [x + 1 | x <- xs] defines:
-- xs = [1, 2, 3, ...]

-- Ex 12
-- Choose the correct definition of the function riffle :: [a] -> [a] -> [a] that takes two lists of the same length and
-- interleaves their elements in turn about order.
-- For example:
-- riffle [1,2,3] [4,5,6] = [1,4,2,5,3,6]

riffle xs ys = concat [[x,y] | (x, y) <- xs `zip` ys]

-- Ex 13
-- Choose the correct definition for the function divisors :: Int -> [Int] that returns the divisors of a
-- natural number.
-- For example:
-- divisors 15 = [1, 3, 5, 15]
-- The function divides :: Int -> Int -> Bool decides if one integer is divisible by another.
-- (Note: You need to implement this function yourself.)
-- For example:
-- divides 15 2 = False
-- divides 15 3 = True

divides :: Int -> Int -> Bool
divides x y = mod x y == 0
divisors :: Int -> [Int]
divisors x = [d | d <- [1..x], x `divides` d]