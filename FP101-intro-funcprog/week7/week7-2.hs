-- Ex 0
-- Choose the functions that are defined using overlapping patterns:

last :: [a] -> a
last [x] = x
last (_ : xs) = last xs

init :: [a] -> [a]
init [_] = []
init (x : xs) = x : init xs

drop :: Int -> [a] -> [a]
drop 0 xs = xs
drop n [] = []
drop n (_ : xs) = drop (n - 1) xs

-- Ex 1
-- Choose the proofs that show that add n (Succ m) = Succ (add n m), by induction on n.
-- The function add and the type Nat are defined as:

data Nat = Zero
         | Succ Nat

add :: Nat -> Nat -> Nat
add Zero m = m
add (Succ n) m = Succ (add n m)

-- Base case:

-- add Zero (Succ m)
-- =   { applying add }
-- Succ m
-- =   { unapplying add }
-- Succ (add Zero m)

-- Inductive case:

-- add (Succ n) (Succ m)
-- =   { applying add }
-- Succ (add n (Succ m))
-- =   { induction hypothesis }
-- Succ (Succ (add n m))
-- =   { unapplying add }
-- Succ (add (Succ n) m)

-- Ex 2
-- Using the property proven in the previous exercise, as well as the property that add n Zero = n,
-- choose the proofs that show that addition is commutative, by induction on n. In other words,
-- prove the following:

add n m = add m n

-- Base case:

-- add Zero m
-- =   { applying add }
-- m
-- =   { property of add }
-- add m Zero

-- Inductive case:

-- add (Succ n) m
-- =   { applying add }
-- Succ (add n m)
-- =   { induction hypothesis }
-- Succ (add m n)
-- =   { property of add }
-- add m (Succ n)

-- Ex 3
-- Choose the proofs that show that the function replicate produces a list with identical elements,
-- by induction on n >= 0 and with the help of the function all.

replicate :: Int -> a -> [a]
replicate 0 x = []
replicate n x = x : replicate (n - 1)

all :: (a -> Bool) -> [a] -> Bool
all p [] = True
all p (x : xs) = p x && all p xs

-- Note: This is equivalent to proving that the property all (== x) (replicate n x) is always true.

-- Base case:

-- all (== x) (replicate 0 x)
-- =   { applying replicate }
-- all (== x) []
-- =   { applying all }
-- True

-- Inductive case:

-- all (== x) (replicate (n + 1) x)
-- =   { applying replicate }
-- all (== x) (x : replicate n x)
-- =   { applying all }
-- x == x && all (== x) (replicate n x)
-- =   { applying == }
-- True && all (== x) (replicate n x)
-- =   { applying && }
-- all (== x) (replicate n x)
-- =   { induction hypothesis }
-- True

-- Ex 4
-- Using the definition:

[] ++ ys = ys
(x : xs) ++ ys = x : (xs ++ ys)

-- choose the correct proof by induction on xs, that shows xs ++ [] = xs.

-- Base case:
-- [] ++ []
-- =   { applying ++ }
-- []

-- Inductive case:
-- (x : xs) ++ []
-- =   { applying ++ }
-- x : (xs ++ [])
-- =   { induction hypothesis }
-- x : xs

-- Ex 5
-- Using the definition:

[] ++ ys = ys
(x : xs) ++ ys = x : (xs ++ ys)

-- choose the correct proofs by induction on xs, that shows xs ++ (ys ++ zs) = (xs ++ ys) ++ zs.

-- Base case:

-- [] ++ (ys ++ zs)
-- =   { applying ++ }
-- ys ++ zs
-- =   { unapplying ++ }
-- ([] ++ ys) ++ zs

-- Inductive case:

-- (x : xs) ++ (ys ++ zs)
-- =   { applying ++ }
-- x : (xs ++ (ys ++ zs))
-- =   { induction hypothesis }
-- x : ((xs ++ ys) ++ zs)
-- =   { unapplying ++ }
-- (x : (xs ++ ys)) ++ zs
-- =   { unapplying ++ }
-- ((x : xs) ++ ys) ++ zs

-- Ex 6
-- Using the definitions:

map f [] = []
map f (x : xs) = f x : map f xs
(f . g) x = f (g x)

-- choose the proofs that show that map f (map g xs) = map (f . g) xs by induction on xs.

-- Base case:

-- map f (map g [])
-- =   { applying the inner map }
-- map f []
-- =   { applying map }
-- []
-- =   { unapplying map }
-- map (f . g) []

-- Inductive case:

-- map f (map g (x : xs))
-- =   { applying the inner map }
-- map f (g x : map g xs)
-- =   { applying the outer map }
-- f (g x) : map f (map g xs)
-- =   { induction hypothesis }
-- f (g x) : map (f . g) xs
-- =   { unapplying . }
-- (f . g) x : map (f . g) xs
-- =   { unapplying map }
-- map (f . g) (x : xs)

-- Ex 7
-- Using the definitions for length and (++), prove that length (xs ++ ys) = length xs + length
-- ys by structural induction over the list xs.

length :: [a] -> Int
length [] = 0
length (x : xs) = 1 + length xs

(++) : [a] -> [a] -> [a]
[] ++ ys = ys
(x : xs) ++ ys = x : (xs ++ ys)

-- Base case:

-- length ([] ++ ys)
-- =   { applying ++ }
-- length ys
-- =   { applying identity element of + }
-- 0 + length ys
-- =   { unapplying length }
-- length [] + length ys

-- Inductive case:

-- length ((x : xs) ++ ys)
-- =   { applying ++ }
-- length (x : (xs ++ ys))
-- =   { applying length }
-- 1 + length (xs ++ ys)
-- =   { induction hypothesis }
-- 1 + (length xs + length ys)
-- =   { associativity of + }
-- (1 + length xs) + length ys
-- =   { unapplying length }
-- length (x : xs) + length ys

-- Ex 8
-- Choose the correct explanation of the induction principle for finite lists.

-- The induction principle for finite lists states that in order to show that a property P holds
-- for all lists, it is sufficient to show that:
-- - P holds for the base case: the empty list [].
-- - if P holds for any list xs, then it also holds for the list x : xs, for any element x.

-- Ex 9
-- Using the definitions of length, take and repeat, choose the answer that proves that length
-- (take n (repeat x)) = n by induction on the natural number n.

length [] = 0
length (_ : xs) = 1 + length xs

take 0 _ = []
take (n + 1) [] = []
take (n + 1) (x : xs) = x : take n xs

repeat x = x : repeat x

-- Base case:

-- length (take 0 (repeat x))
-- =   { applying take }
-- length []
-- =   { applying length }
-- 0

-- Inductive case:

-- length (take (n + 1) (repeat x))
-- =   { applying repeat }
-- length (take (n + 1) (x : repeat x))
-- =   { applying take }
-- length (x : take n (repeat x))
-- =   { applying length }
-- 1 + length (take n (repeat x))
-- =   { induction hypothesis }
-- 1 + n
-- =   { commutativity of + }
-- n + 1