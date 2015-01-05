{-# LANGUAGE NPlusKPatterns #-}

import Data.List
import Data.Char
import Unsafe.Coerce


-- Ex 0
-- Select all possible total and terminating implementations of a conversion function natToInteger
--  :: Nat -> Integer that converts any non-bottom, non-partial, finite natural number (note: 0 is a
-- natural number according to this definition), into the corresponding Integer value.

data Nat = Zero
         | Succ Nat
         deriving Show

natToInteger Zero = 0
natToInteger (Succ n) = natToInteger n + 1

natToInteger (Succ n) = natToInteger n + 1
natToInteger Zero = 0

natToInteger (Succ n) = 1 + natToInteger n
natToInteger Zero = 0

natToInteger = head . m
  where m Zero = [0]
        m (Succ n) = [sum [x | x <- (1 : m n)]]

natToInteger :: Nat -> Integer
natToInteger = \ n -> genericLength [c | c <- show n, c == 'S']

-- Ex 1
-- Select all possible total and terminating implementations of a conversion function
-- integerToNat :: Integer -> Nat that converts any non-bottom, non-partial, finite Integer value >= 0,
-- into the corresponding Nat value.
-- Note: make sure to enable n+k-patterns, if you don't know yet how to do that, Google is your friend.

integerToNat 0 = Zero
integerToNat (n+1) = Succ (integerToNat n)

integerToNat (n+1) = Succ (integerToNat n)
integerToNat 0 = Zero

integerToNat (n+1) = let m = integerToNat n in Succ m
integerToNat 0 = Zero

-- Ex 2
-- Select all possible total and terminating implementations of an addition function
-- add :: Nat -> Nat -> Nat that adds two non-bottom, non-partial, finite natural numbers m and n, such
-- that natToInteger (add m n) = natToInteger m + natToInteger n.

add Zero n = n
add (Succ m) n = Succ (add n m)

add (Succ m) n = Succ (add n m)
add Zero n = n

add n Zero = n
add n (Succ m) = Succ (add m n)

add n (Succ m) = Succ (add m n)
add n Zero = n

-- Ex 3
-- Using recursion, and any correct implementation of the function add from the previous
-- exercise, select from the following options, a total and terminating multiplication function
-- mult :: Nat -> Nat -> Nat that multiplies two non-bottom, non-partial, finite natural numbers m
-- and n, such that natToInteger (mult m n) = natToInteger m * natToInteger n.

mult m Zero = Zero
mult m (Succ n) = add m (mult m n)

-- Ex 4
-- The standard library defines the following algebraic data type to represent the possible comparisons
-- between two values.

data Ordering = LT
              | EQ
              | GT

-- together with a function:

compare :: (Ord a) => a -> a -> Ordering

-- that decides if a value x :: Ord a => a is less than (LT), equal to (EQ), or greater than (GT)
-- another value y :: Ord a => a.
-- Given the following data type for trees with Integers at the leafs and inside the nodes:

data Tree = Leaf Integer
          | Node Tree Integer Tree

-- Select all correct implementations of the function

occurs :: Integer -> Tree -> Bool

-- that decides whether the given Integer occurs in the given Tree. The Tree parameter is a finite,
-- non-partial, non-bottom binary search tree.
-- Note: If you haven't encountered case expressions before, Google is your friend.

occurs m (Leaf n) = m == n
occurs m (Node l n r)
  = case compare m n of
        LT -> occurs m l
        EQ -> True
        GT -> occurs m r

occurs m (Leaf n) = m == n
occurs m (Node l n r)
  | m == n = True
  | m < n = occurs m l
  | otherwise = occurs m r

-- Ex 5
-- Consider the following type of binary trees, with only values at the leafs:

data Tree = Leaf Integer
          | Node Tree Tree

-- We say that a tree is balanced if the number of leaves in the left and right subtree of every
-- node differs by at most one, with leaves themselves being trivially balanced.
-- Which option correctly implements

balanced :: Tree -> Bool

-- that decides if a finite, non-partial, non-bottom binary tree is balanced or not?

leaves (Leaf _) = 1
leaves (Node l r) = leaves l + leaves r
balanced (Leaf _) = True
balanced (Node l r)
  = abs (leaves l - leaves r) <= 1 && balanced l && balanced r

-- Ex 6
-- Given the definition of binary trees from the previous exercise, define a function

balance :: [Integer] -> Tree

-- that converts a finite, non-empty, non-partial, non-bottom list of non-bottom integers
-- into a balanced tree.

halve xs = splitAt (length xs `div` 2) xs
balance [x] = Leaf x
balance xs = Node (balance ys) (balance zs)
  where (ys, zs) = halve xs

-- Ex 7
-- The expression Add (Val 1) (Val 2) is a value of the datatype:

data Expr = Add Expr Expr | Val Int

-- Ex 8
-- The expression Node (Leaf 1) (Leaf 2) is a value of the datatype:

data Tree = Leaf Int | Node Tree Tree

-- Ex 9
-- Given the algebraic data type data Maybe a = Nothing | Just a, pick the correct instance declaration
-- that shows that the type constructor Maybe is a Monad. Assume that all values of type Maybe a are
-- finite, non-partial, and non-bottom. You don't have to prove that the Monad laws hold, but use your
-- common sense when picking the right answer.

instance Monad Maybe where
        return x = Just x
        Nothing >>= _ = Nothing
        (Just x) >>= f = f x

-- Ex 10
-- Given the list type from the standard Prelude, pick the correct instance declaration that shows that
-- the type constructor [] is a Monad. Assume that all values of type [a] are finite, non-partial, and
-- non-bottom. You don't have to prove that the Monad laws hold, but use your common sense when picking
-- the right answer.

instance Monad [] where
        return x = [x]
        xs >>= f = concat (map f xs)

-- Ex 11
-- A monoid is an algebraic structure over a type a with a single associative binary operation
--(<>) :: Monoid a => a -> a -> a and a neutral element mempty :: Monoid a => a, assuming bottoms
-- don't exist.

class Monoid where
        mempty :: a
        (<>) :: a -> a -> a

-- Note: this class declaration does not enforce the fact that (<>) is associative, and neither that
-- mempty is the neutral element.
-- Complete the following instance declaration, assuming values of type a are non-bottom. You don't
-- need to prove that (<>) is associative and that mempty is a neutral element, but use your common
-- sense when picking the correct implementation.

instance Monoid [a] where
        mempty = []
        (<>) = (++)

-- Ex 12
-- A functor is a type constructor with an operation fmap :: Functor f => (a -> b) -> f a -> f b such
-- that (fmap f) . (fmap g) = fmap (f . g) and fmap id = id, ignoring the existence of bottoms.

class Functor f where
        fmap :: (a -> b) -> f a -> f b

-- Note: this class declaration does not enforce the fact that fmap satisfies the two laws mentioned
-- above. A value of type Functor f => f a can be considered as a "collection" with elements of type
-- a and shape f (for instance f can be [] or Maybe).
-- Complete the following instance declaration, assuming bottoms don't exist. You don't need to prove
-- that the two laws hold, but use your common sense when picking the correct implementation.

instance Functor Maybe where
        fmap _ Nothing = Nothing
        fmap f (Just a) = Just (f a)

-- Ex 13
-- Given a type constructor f such that Functor f, and an element type a such that Monoid a, we can
-- define a function fold :: (Foldable f, Monoid a) => f a -> a that folds the values in the argument
-- "collection" using the monoids neutral element mempty and the operation <>. Assuming that the
-- "collection" is finite, non-partial, and non-bottom, it doesn't matter from which direction the
-- fold operates because the <> operator is associative. When the "collection" is empty the result of
-- folding is the neutral element mempty.
-- The module Data.Foldable defines the following type class for folding functors with monoid elements:

class (Functor f) => Foldable f where
        fold :: (Monoid m) => f m -> m

-- Assuming bottom does not exist, complete the following instance declaration for Foldable []:

instance Foldable [] where
        fold = foldr (<>) mempty