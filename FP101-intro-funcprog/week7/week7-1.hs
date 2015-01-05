-- Ex 0
-- Identify the redexes in the expression 1 + (2 * 3), and determine whether each redex is innermost,
-- outermost, neither, or both.

-- 2 * 3 is the only redex, and is both innermost and outermost

-- Ex 1
-- Identify the redexes in the expression (1 + 2) * (2 + 3), and determine whether each redex is
-- innermost, outermost, neither, or both.

-- 1 + 2 and 2 + 3 are the redexes, with 1 + 2 being both innermost and outermost

-- Ex 2
-- 1 + 2, 2 + 3 and fst (1 + 2, 2 + 3) are the redexes, with 1 + 2 being innermost and fst
-- (1 + 2, 2 + 3) being outermost

-- Ex 3
-- Identify the redexes in the expression (\x -> 1 + x ) (2 * 3), and determine whether each redex
-- is innermost, outermost, neither, or both.

-- 2 * 3 and (\x -> 1 + x ) (2 * 3) are redexes, with the first being innermost and the second
-- being outermost

-- Ex 4
-- Choose the correct innermost and outermost evaluations of the expression fst (1 + 2, 2 + 3).
-- Hint: keep the disclaimer in mind.

-- Outermost:

-- fst (1 + 2, 2 + 3)
-- =   { applying fst }
-- 1+2
-- =   { applying + }
-- 3

-- Innermost:

-- fst (1 + 2, 2 + 3)
-- =   { applying the first + }
-- fst (3, 2 + 3)
-- =   { applying + }
-- fst (3, 5)
-- =   { applying fst }
-- 3

-- Ex 5
-- Given the definition mult = \x -> (\y -> x * y ), choose the correct evaluation of the expression
-- mult 3 4

-- mult 3 4
-- =   { applying mult }
-- (\x -> (\y -> x * y)) 3 4
-- =   { applying \x -> (\y -> x * y) }
-- (\y -> 3 * y) 4
-- =   { applying \y -> 3 * y }
-- 3 * 4
-- =   { applying * }
-- 12

-- Ex 6
-- Choose the correct implementations for the expression fibs :: [Integer] that generates the
-- infinite sequence of Fibonacci numbers (i.e. [0, 1, 1, 2, ...]).

fibs = 0 : 1 : [x + y | (x, y) <- zip fibs (tail fibs)]

-- Ex 7
-- Using fibs from the previous exercise, choose the correct definition for the function
-- fib :: Int -> Integer that returns the n-th Fibonnaci number (counting from zero).

fib n = fibs !! n

-- Ex 8
-- Choose the correct definition for the expression largeFib :: Integer that uses fibs from the
-- previous exercises to calculate the first Fibonacci number greater than 1000.

largeFib = head (dropWhile (<= 1000) fibs)

-- Ex 9
-- Choose the correct definition for the function repeatTree :: a -> Tree a for the following
-- type of binary trees:

data Tree a = Leaf
            | Node (Tree a) a (Tree a)

-- The behavior should be analogous to that of the library function repeat (not considering
-- bottom and partial cases):

repeat :: a -> [a]
repeat x = xs
  where xs = x : xs

repeatTree x = Node t x t
  where t = repeatTree x

-- Ex 10
-- Innermost reduction:

-- May require fewer steps than outermost reduction

-- Ex 11
-- Outermost reduction:

-- May terminate when innermost reduction does not

-- Ex 12
-- Using lazy evaluation:

-- Makes some programs more efficient than otherwise

-- Ex 13
-- Which of the following statements about Haskell is true:

-- Function application associates to the left