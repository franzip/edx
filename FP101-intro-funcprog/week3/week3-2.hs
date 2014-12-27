-- Ex 0
-- Choose all correct definitions of the exponentiation operator ^ for non-negative integers (including 0).

m ^ 0 = 1
m ^ n = m * m ^ (n - 1)

m ^ 0 = 1
m ^ n = m * (^) m (n - 1)

-- Ex 1
-- Using the following definition, show how length [1, 2, 3] is evaluated.

length :: [a] -> Int
length [] = 0
length (_ : xs) = 1 + length (xs)

-- length [1,2,3]
-- = { applying length }
-- 1 + length [2,3]
-- = { applying length }
-- 1 + (1 + length [3])
-- = { applying length }
-- 1 + (1 + (1 + length []))
-- = { applying length }
-- 1 + (1 + (1 + 0))
-- = { applying + }
-- 1 + (1 + 1)
-- = { applying + }
-- 1 + 2
-- = { applying + }
-- 3

-- Ex 2
-- Using the following definition, show how drop 3 [1, 2, 3, 4, 5] is evaluated.

drop :: Int -> [a] -> [a]
drop 0 xs = xs
drop n [] = []
drop n (_ : xs) = drop (n - 1) xs

-- drop 3 [1,2,3,4,5]
-- = { applying drop }
-- drop 2 [2,3,4,5]
-- = { applying drop }
-- drop 1 [3,4,5]
-- = { applying drop }
-- drop 0 [4,5]
-- = { applying drop }
-- [4,5]

-- Ex 3
-- Using the following definition, show how init [1, 2, 3] is evaluated.

init :: [a] -> [a]
init [_] = []
init (x : xs) = x : init xs

-- init [1,2,3]
-- = { applying init }
-- 1 : init [2,3]
-- = { applying init }
-- 1 : 2 : init [3]
-- = { applying init }
-- 1 : 2 : []
-- = { list notation }
-- [1,2]

-- Ex 4
-- Choose all correct definitions for the function that decides if all logical values in a list are True:

and :: [Bool] -> Bool

and [] = True
and (b : bs) = b  && and bs

and [] = True
and (b : bs)
  | b = and bs
  | otherwise = False

and [] = True
and (b : bs)
  | b == False = False
  | otherwise = and bs

and [] = True
and (b : bs) = and bs && b

-- Ex 5
-- Choose the correct definition for the function that concatenates a list of lists:

concat :: [[a]] -> [a]

concat [] = []
concaat (xs : xss) = xs ++ concat  xss

-- Ex 6
-- Choose the correct definition for the function that produces a list with n identical elements:

replicate :: Int -> a -> [a]

replicate 0 _ = []
replicate n x = x : replicate (n - 1) x

-- Ex 7
-- Choose the correct definition for the function that selects the n th element of a list. We start counting at 0.

(!!) : [a] -> Int -> a

(x : _) !! 0 = x
(_ : xs) !! n = xs !! (n - 1)

-- Ex 8
-- Choose the correct definition for the function that decides if a value is an element of a list:

elem :: Eq a => a -> [a] -> Bool

elem _ [] = False
elem x (y : ys)
  | x == y = True
  | otherwise = elem x ys

-- Ex 9
-- Choose the correct definition for the function merge :: Ord a => [a] -> [a] -> [a] that merges two
-- sorted lists in ascending order to give a single sorted list in ascending order. For example:
-- > merge [2, 5, 6] [1, 3, 4]
-- [1, 2, 3, 4, 5, 6]

merge [] ys = ys
merge xs [] = xs
merge (x : xs) (y : ys)
  = if x <= y then x : merge xs (y : ys) else y : merge (x : xs) ys

-- Ex 10
-- Choose the correct definition for the function msort :: Ord a => [a] -> [a] that implements merge sort,
-- in which the empty list and singleton lists are already sorted, and any other list is sorted by merging together
-- the two lists that result from sorting the two halves of the list separately. The solutions can use the function
-- merge from the previous exercise and the function halve that splits a list into two halves whose lengths differ
-- by at most one.

halve :: [a] -> ([a], [a])
halve xs = splitAt (length xs `div` 2) xs

msort [] = []
msort [x] = [x]
msort xs = merge (msort ys) (msort zs)
where (ys, zs) = halve xs