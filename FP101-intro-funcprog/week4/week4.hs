-- Ex 0
-- Choose the equivalent of the following list comprehension [f x | x <- xs, p x] expressed using higher-order functions.

map f (filter p xs)

-- Ex 1
-- Choose all options that implement the Prelude function
all :: (a -> Bool) -> [a] -> Bool
-- taking into account only finite, non-partial input lists with non-bottom values and where the predicate p always returns
-- either True, or False, but not bottom.

all p xs = and (map p xs)
all p = and . map p
all p = not . any (not . p)
all p xs = foldl (&&) True (map p xs)
all p = foldr (&&) True . map p

-- Ex 2
-- Choose all options that implement the Prelude function
any :: (a -> Bool) -> [a] -> Bool
-- taking into account only finite, non-partial input lists with non-bottom values and where the predicate p always
-- returns either True, or False, but not bottom.

any p = or . map p
any p xs = length (filter p xs) > 0
any p = not . null . dropWhile (not . p)
any p xs = not (all (\x -> not (p x)) xs)
any p xs = foldr (\ x acc -> (p x) || acc) False xs

-- Ex 3
-- Choose the option that implements the Prelude function
takeWhile :: (a -> Bool) -> [a] -> [a]
-- taking into account only finite, non-partial input lists with non-bottom values and where the predicate p always
-- returns either True, or False, but not bottom.

takeWhilez _ [] = []
takeWhilez p (x : xs)
  | p x = x : takeWhilez p xs
  | otherwise = []

-- Ex 4
-- Choose the option that implements the Prelude function
dropWhile :: (a -> Bool) -> [a] -> [a]
-- taking into account only finite, non-partial input lists with non-bottom values and where the predicate p always
-- returns either True, or False, but not bottom.

dropWhilez _ [] = []
dropWhilez p (x : xs)
  | p x = dropWhilez p xs
  | otherwise = x : xs

-- Ex 5
-- Choose the option that implements the Prelude function
map :: (a -> b) -> [a] -> [b]
-- taking into account only finite, non-partial input lists with non-bottom values and where the mapping function
--  does not return bottom.

map f = foldl (\ xs x -> xs ++ [f x]) []

-- Ex 6
-- Choose the option that implements the Prelude function
filter :: (a -> Bool) -> [a] -> [a]
-- taking into account only finite, non-partial input lists with non-bottom values and where the predicate p always
-- returns either True, or False, but not bottom.

filter p = foldl (\ xs x -> if p x then x : xs else xs) []

-- Ex 7
-- Choose a definition for the function dec2int :: [Integer] -> Integer that converts a finite, non-partial list of
-- non-bottom Integer digits, that represents a decimal number, into the non-bottom Integer this list represents.
-- For example:
-- > dec2int [2, 3, 4, 5]
-- 2345
-- > dec2int []
-- 0
-- > dec2int [0, 0, 0, 0]
-- 0

dec2int = foldl(\ x y -> 10 * x + y) 0

-- Ex 8
-- Choose an explanation for why the following definition of sumsqreven is invalid:
sumqreven = compose [sum, map (^2), filter even]

compose :: [a -> a] -> (a -> a)
compose = foldr (.) id

-- The definition of sumqreven doesn't even typecheck.

-- Ex 9
-- Choose the correct definition for the Prelude function curry :: ((a, b) -> c) -> a -> b -> c , that converts a function
-- that takes its arguments as a pair into a function that takes its arguments one at a time. For this exercise assume that
-- bottom does not exist.

curry f = \ x y -> f (x, y)

-- Ex 10
-- Choose the definition for the Prelude function uncurry :: (a -> b -> c) -> (a, b) -> c, that converts a function that
-- takes its arguments one at a time into a function that takes its arguments as a pair. For this exercise assume that
-- bottom does not exist.

uncurry f = \ (x, y) -> f x y

-- Ex 11
-- Consider the following higher-order function unfold :: (b -> Bool) -> (b -> a) -> (b -> b) -> b -> [a] that encapsulates
-- a simple pattern of recursion for producing a list.

unfold p h t x
  | p x = []
  | otherwise = h x : unfold p h t (t x)

-- The function unfold p h t x produces the empty list if the predicate p x is True. Otherwise it produces a non-empty
-- list by applying the function h x to give the head of the generated list, and the function t x to generate another
-- seed that is recursively processed by unfold to produce the tail of the generated list.
-- For example, the function int2bin, that converts a non-negative integer into a binary number, with the least significant
-- bit first, can be defined as:
-- For example:

type Bit = Bit

int2bin :: Int -> [Bit]
int2bin 0 = []
int2bin n = n `mod` 2 : int2bin (n `div` 2)

-- This function can be rewritten more compactly using unfold as follows:

int2bin = unfold (== 0) (`mod` 2) (`div` 2)

-- Next consider the function chop8 :: [Bit] -> [[Bit]] that takes a list of bits and chops it into lists of at most eight
-- bits (assuming the list is finite, non-partial, and does not contain bottom):

chop8 :: [Bit] -> [[Bit]]
chop8 [] = []
chop8 bits = take 8 bits : chop8 (drop8 bits)

-- Choose an implementation of chop8 using unfold.
chop8 = unfold null (take 8) (drop 8)

-- Ex 12
-- Following the previous question, choose an implementation of map :: (a -> b) -> [a] -> [b] using unfold.
-- taking into account only finite, non-partial input lists with non-bottom values, and where the mapping function
-- does not return bottom.

map f = unfold null (f . head) tail

-- Ex 13
-- Choose an implementation of the Prelude function iterate :: (a -> a) -> a -> [a] using unfold.

iterate f = unfold (const False) id f

-- Ex 14
-- Assuming f, g and h are not bottom, the following equality holds for all f, g and h of the correct type:

f . (g . h) = (f . g) . h

-- Ex 15
-- Which of the following properties about lists is false:

[x] : xs = [x, xs]

-- Ex 16
-- Which of the following properties about map and filter is true for all f, g and p of the correct type:

filter p . filter p = filter p

-- Ex 17
-- Which of the following is true for all non-bottom f, g and p of the correct type, and finite, non-partial
-- input lists xs that contain no bottom values:

reverse (map f xs) = map f (reverse xs)

-- Ex 18
-- Which of the following equations is true for all finite, non-partial lists xs and ys, with non-bottom values:

reverse (xs ++ ys) = reverse ys ++ reverse xs

-- Ex 19
-- Which of the following expressions produces a finite list:

take 10 [1..]

-- Ex 20
-- Which of the following statements about the Prelude function sum :: Num a => [a] -> a is false:

-- sum is a higher-order function

-- Ex 21
-- Which of the following statements about the Prelude function map :: (a -> b) -> [a] -> [b] is false:

-- map is an overloaded function

-- Ex 22
-- Which of the following statements about the Prelude function foldr :: (a -> b -> b) -> b -> [a] -> b is false:

-- foldr is an overloaded functions

-- Ex 23
-- Which of the following statements about various Prelude functions is true:

-- take is a polymorphic function

-- Ex 24
-- Which equation defines a function f that is overloaded:

f x = x > 3

-- Ex 25
-- Which of the following expressions is equal to [1, 2, 3, 4]:

take 4 (iterate (+1) 1)

-- Ex 26
-- Evaluating takeWhile even [2, 4, 5, 6, 7, 8] gives:

[2, 4]

-- Ex 27
-- Evaluating zip [1, 2] ['a', 'b', 'c'] gives:

[(1, 'a'), (2, 'b')]

-- Ex 28
-- Evaluating foldr (-) 0 [1, 2, 3, 4] gives:

-2

-- Ex 29
-- Evaluating filter even (map (+1) [1..5]) gives (Note: you can copy and paste this expression directly
-- from edX intro GHCi!):

[2, 4, 6]

-- Ex 30
-- Which of the following expressions is equal to filter p (map f xs), for all finite, non-partial lists
-- xs with no bottom values, and for all non-bottom f and p of the correct type:

[f x | x <- xs, p (f x)]

-- Ex 31
-- After watching the jam session about Church Numerals, what could be a possible implementation for
--  exponentiation? (Note: you have very many attempts to get this question correct)

cExp :: CNat -> CNat -> CNat