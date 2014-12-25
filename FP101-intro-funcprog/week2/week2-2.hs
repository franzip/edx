-- Ex 0 Which of the following implementations correctly define a function
-- halve :: [a] -> ([a], [a]) that splits an even-lengthed list into two halves?
-- Choose all correct implementations!

halve xs = splitAt (length xs `div` 2) xs

halve xs = (take (n `div` 2) xs, drop (n `div` 2) xs)
  where n = length xs

halve xs = splitAt (div (length xs) 2) xs

halve xs = (take n xs, drop n xs)
  where n = length xs `div` 2

-- Ex 1 Which of the following implementations are valid for a function
-- safeTail :: [a] -> [a] that behaves as the library function tail ,
-- except that safetail maps the empty list to itself, whereas tail
-- produces an error in this case.
-- Choose all correct implementations!

safetail xs = if null xs then [] else tail xs

safetail [] = []
safetail (_ : xs) = xs

safetail xs
  | null xs   = []
  | otherwise = tail xs

safetail [] = []
safetail xs = tail xs

safetail
  = \ xs ->
      case xs of
          [] -> []
          (_ : xs) -> xs

-- Ex 2 Which of the following definitions is correct for the logical disjunction operator || (i.e. OR)?
-- Choose all correct implementations!
-- Note: since the || operator is already defined in the Prelude, you have to hide the default implementation
-- in order to test the following code. You can hide the operator by adding the following line to your script:

import Prelude hiding ((||))

False || False = False
 _ || _ = True

False || b = b
True || _ = True

b || c
  | b == c = b
  | otherwise = True

b || False = b
_ || True = True

b || c
  | b == c = c
  | otherwise = True

False || False = False
False || True = True
True || False = True
True || True = True

-- Ex 3 Which of the following definitions is correct for the logical conjunction operator && (i.e. AND)?
-- Choose all correct implementations!
-- Note: since the && operator is already defined in the Prelude, you have to hide the default implementation
-- in order to test the following code. You can hide the operator by adding the following line to your script:

import Prelude hiding ((&&))

True && True = True
_ && _ = False

a && b = if a then if b then True else False else False
a && b = if a then b else False
a && b = if b then a else False

-- Ex 4  Show how the curried function definition mult x y z = x * y * z can be understood in terms of lambda
-- expressions.

mult = \ x -> (\ y -> (\z -> x * y * z))

-- Ex 5 The expression f x g y means:

((f x) g) y

-- Ex 6 The type signature f :: (a -> a) -> a indicates that the function f:

-- Takes a function as its argument

-- Ex 7 Choose the correct implementation for the function remove :: Int -> [a] -> [a] which takes a number n and
-- a list and removes the element at position n from the list.
-- For example:
-- remove 0 [1,2,3,4] = [2,3,4]

remove n xs = take n xs ++ drop (n + 1) xs

-- Ex 8 What is the output of the function call funct 3 [1, 2, 3, 4, 5, 6, 7]? The function funct is defined as:

funct :: Int -> [a] -> [a]
funct x xs = take (x + 1) xs ++ drop x xs
[1, 2, 3, 4, 4, 5, 6, 7]