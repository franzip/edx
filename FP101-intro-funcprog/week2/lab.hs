-- Ex 0
-- What is the type of the following definition:
e0 = [False, True, False, True]

-- :t e0 -> [Bool]

-- Ex 1
-- Note: This exercise has multiple correct answers so you should think carefully about your answer as GHCi
-- will not be able to fully help you. Choose all possible types of the following definition:
e1 = [[1,2], [3,4]]

-- [[Integer]]
-- [[Int]]
-- Num t => [[t]]

-- Ex 2
-- Note: This exercise has multiple correct answers so you should think carefully about your answer as GHCi
-- will not be able to fully help you.
e2 = [[[1, 2, 3]], [[3, 4, 5]]]

-- [[[Integer]]]
-- [[[Int]]]
-- Num t => [[[t]]]

-- Ex 3
-- What is the type of the following definition:
e3 x = x * 2

-- Num a => a -> a

-- Ex 4
-- What is the type of the following definition:
e4 (x, y) = x

-- (a, b) -> a

-- Ex 5
-- What is the type of the following definition:
e5 (x, y, z) = z

-- (a, b, c) -> c

-- Ex 6
-- What is the type of the following definition:
e6 x y = x * y

-- Num a => a -> a -> a

-- Ex 7
-- What is the type of the following definition:
e7 (x, y) = (y, x)

-- (a, b) -> (b, a)

-- Ex 8
-- What is the type of the following definition:
e8 x y = (y, x)

-- a -> b -> (b, a)

-- Ex 9
-- What is the type of the following definition:
e9 [x, y] = (x, True)

-- [t] -> (t, Bool)

-- Ex 10
-- What is the type of the following definition:
e10 (x, y) = [x, y]

-- (t, t) => [t]

-- Ex 11
-- Choose a suitable definition for the following type:
e11 :: (Char, Bool)

e11 = ('\a', True)

-- Ex 12
-- Choose a suitable definition for the following type:
e12 :: [(Char, Int)]

e12 = [('a', 1)]

-- Ex 13
-- Choose a suitable definition for the following type:
e13 :: Int -> Int -> Int

e13 x y = x + y * y

-- Ex 14
-- Choose a suitable definition for the following type:
e14 :: ([Char], [Float])

e14 = ("Haskell", [3.1, 3.14, 3.141, 3.1415])

-- Ex 15
-- Choose a suitable definition for the following type:
e15 :: [a] -> [b] -> (a, b)

e15 xs ys = (head xs, head ys)