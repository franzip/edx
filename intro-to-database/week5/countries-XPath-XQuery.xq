(:*******************************************************************

Instructions: Each problem asks you to write a query in XPath or XQuery. Our back-end runs your query against the sample database using Saxon. It displays the result and compares your answer against the correct one. When you're satisfied with your solution for a given problem, click the "Submit" button to check your answer (you can click "Submit" an unlimited number of times).

Your solution will need to reference doc("countries.xml") to access the data. 
*******************************************************************:)


(:****************************************************************

Q1 - Return the area of Mongolia. 

*****************************************************************:)

doc('countries.xml')//country[data(@name) = 'Mongolia']/data(@area)

(:****************************************************************

Q2 - Return the names of all cities that have the same name as the country in which they are located. 

*****************************************************************:)

doc('countries.xml')/countries//city[name = parent::country/data(@name)]/name

(:****************************************************************

Q3 - Return the average population of Russian-speaking countries. 

*****************************************************************:)

avg(doc('countries.xml')//country[language = 'Russian']/data(@population))

(:****************************************************************

Q4 - Return the names of all countries where over 50% of the population speaks German. (Hint: Depending on your solution, you may want to use ".", which refers to the "current element" within an XPath expression.) 

*****************************************************************:)

doc('countries.xml')/countries//language[@percentage > 50 and data(.) = 'German']/parent::country/data(@name)

(:****************************************************************

Q5 - Return the name of the country with the highest population. (Hint: You may need to explicitly cast population numbers as integers with xs:int() to get the correct answer.) 

*****************************************************************:)

doc('countries.xml')/countries/country[@population =  max(doc('countries.xml')/countries/country/data(@population))]/data(@name)