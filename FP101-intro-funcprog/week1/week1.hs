-- Ex 0

(2 ^ 3) * 4
(2 * 3) + (4 * 5)

-- Ex 1

n = a `div` length xs
  where a = 10
        xs = [1,2,3,4,5]

-- Ex 2

last xs = head (drop (length xs - 1) xs)
last xs = xs !! (length xs - 1)
last xs = head (reverse xs)

-- Ex 3

init xs = reverse (tail (reverse xs))

-- Ex 4

-- double (double 2)
-- = { applying the inner double }
-- double (2 + 2)
-- = { applying double }
-- (2 + 2) + (2 + 2)
-- = { applying the ﬁrst + }
-- 4 + (2 + 2)
-- = { applying the second + }
-- 4+4
-- = { applying + }
-- 8

-- Ex 5

-- sum [x]
-- =   { applying sum }
-- x + sum []
-- =   { applying sum }
-- x + 0
-- =   { applying + }
-- x

-- Ex 6

product [] = 1
product (x : xs) = x * product xs
