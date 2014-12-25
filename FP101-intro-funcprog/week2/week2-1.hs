-- Ex 0

:type ['a', 'b', 'c'] -- [Char]

-- Ex 1

:type ('a', 'b', 'c') -- (Char, Char, Char)

-- Ex 2

:type [(False, '0'), (True, '1')] -- [(Bool, Char)]

-- Ex 3

:type ([False, True], ['0', '1']) -- ([Bool], [Char])

-- Ex 4

:type [tail, init, reverse] -- [[a] -> [a]]

-- Ex 5

second xs = head (tail xs)
:type xs -- [a] -> a

-- Ex 6

swap (x, y) = (y, x)
:type swap -- (t1, t) -> (t, t1)

-- Ex 7

pair x y = (x, y)
:type pair -- t -> t1 -> (t, t1)

-- Ex 8

double x = x * 2
:type double -- Num a => a -> a

-- Ex 9

palindrome xs = reverse xs == xs
:type palindrome -- Eq a => [a] -> Bool

-- Ex 10

twice f x = f (f x)
:type twice -- (t -> t) -> t -> t

-- Ex 11

-- Is it feasible for function types (in general) to be instances of the Eq class?
-- Infeasible in general; only feasible for some functions.

-- Ex 12

-- Which of the following is not a valid list in Haskell:
[1, [2, 3]]

-- Ex 13

-- Which of the following is not a valid list in Haskell:
[1, [2,3], 4]

-- Ex 14

:type ["False", "True"] -- [[Char]] aka [String]

-- Ex 15

:type  ([False, True], False) -- ([Bool], Bool)

-- Ex 16

:type ("1,2", "3,4") -- ([Char], [Char]) aka (String, String)

-- Ex 17

:type [(1, True), (0, False)] -- [(Int, Bool)]

-- Ex 18

f xs = take 3 (reverse xs)
:type f -- [a] -> [a]

-- Ex 19

-- The type a -> b -> c -> d means:
-- a -> (b -> (c -> d))

-- Ex 20

-- Which of the following expressions contains a type error:
-- [1, 2, 3] ++ 4