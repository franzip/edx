(:*******************************************************************

Instructions: Each problem asks you to write a query in XPath or XQuery. Our back-end runs your query against the sample database using Saxon. It displays the result and compares your answer against the correct one. When you're satisfied with your solution for a given problem, click the "Submit" button to check your answer (you can click "Submit" an unlimited number of times).

Your solution will need to reference doc("countries.xml") to access the data. 
*******************************************************************:)


(:****************************************************************

Q1 - Return the names of all countries with population greater than 100 million. 

*****************************************************************:)

doc('countries.xml')//country[@population > 100000000]/data(@name)

(:****************************************************************

Q2 - Return the names of all countries where a city in that country contains more than one-third of the country's population. 

*****************************************************************:)

let $countries := doc('countries.xml')//country

for $i in $countries
where $i/city/population > $i/data(@population) * 0.33
return $i/data(@name)

(:****************************************************************

Q3 - Return the population density of Qatar. Note: Since the "/" operator has its own meaning in XPath and XQuery, the division operator is "div". To compute population density use "(@population div @area)". 

*****************************************************************:)

let $countries := doc('countries.xml')//country

for $i in $countries
where $i/data(@name) = 'Qatar'
return $i/(@population div @area)

(:****************************************************************

Q4 - Return the names of all countries whose population is less than one thousandth that of some city (in any country). 

*****************************************************************:)

let $countries := doc('countries.xml')/countries/country,
	$cities := $countries/city
for $i in $countries
  where some $city in $cities satisfies $i/@population < $city/population div 1000
  return $i/data(@name)

(:****************************************************************

Q5 - Return all city names that appear more than once, i.e., there is more than one city with that name in the data. Return only one instance of each such city name. (Hint: You might want to use the "preceding" and/or "following" navigation axes for this query, which were not covered in the video or our demo script; they match any preceding or following node, not just siblings.) 

*****************************************************************:)

let $cities := doc('countries.xml')//city

for $i in $cities
	where $i/name = $i/preceding::city/name
	return $i/name

(:****************************************************************

Q6 - Return the names of all countries containing a city such that some other country has a city of the same name. (Hint: You might want to use the "preceding" and/or "following" navigation axes for this query, which were not covered in the video or our demo script; they match any preceding or following node, not just siblings.) 

*****************************************************************:)

let $countries := doc('countries.xml')/countries/country,
  $cities := $countries//city
for $i in $cities
where $i/data(name) = $i/following::*/data(name) or $i/data(name) = $i/preceding::*/data(name)
return $i/parent::country/data(@name)

(:****************************************************************

Q7 - Return the names of all countries whose name textually contains a language spoken in that country. For instance, Uzbek is spoken in Uzbekistan, so return Uzbekistan. (Hint: You may want to use ".", which refers to the "current element" within an XPath expression.) 

*****************************************************************:)

let $countries := doc('countries.xml')/countries/country
for $i in $countries
where some $j in $i/language satisfies contains($i/@name, $j)
return $i/data(@name)

(:****************************************************************

Q8 - Return the names of all countries in which people speak a language whose name textually contains the name of the country. For instance, Japanese is spoken in Japan, so return Japan. (Hint: You may want to use ".", which refers to the "current element" within an XPath expression.) 

*****************************************************************:)

let $countries := doc('countries.xml')/countries/country
for $c in $countries
  where some $l in $c/language satisfies contains($l, $c/@name)
  return $c/data(@name)

(:****************************************************************

Q9 - Return all languages spoken in a country whose name textually contains the language name. For instance, German is spoken in Germany, so return German. (Hint: Depending on your solution, may want to use data(.), which returns the text value of the "current element" within an XPath expression.)  
*****************************************************************:)

let $language := doc('countries.xml')/countries/country/language
for $i in $language
where contains($i/parent::country/@name, $i)
return $i/data(.)

(:****************************************************************

Q10 - Return all languages whose name textually contains the name of a country in which the language is spoken. For instance, Icelandic is spoken in Iceland, so return Icelandic. (Hint: Depending on your solution, may want to use data(.), which returns the text value of the "current element" within an XPath expression.) 

*****************************************************************:)

let $languages := doc('countries.xml')/countries/country/language
for $i in $languages
  where contains($i, $i/parent::country/@name)
  return $i/data(.)

(:****************************************************************

Q11 - Return the number of countries where Russian is spoken. 

*****************************************************************:)

count(doc('countries.xml')//country[language = 'Russian'])

(:****************************************************************

Q12 - Return the names of all countries for which the data does not include any languages or cities, but the country has more than 10 million people. 

*****************************************************************:)

doc('countries.xml')/countries/country[count(language) = 0 and count(city) = 0 and @population > 10000000]/data(@name)

(:****************************************************************

Q13 - Return the name of the country that has the city with the highest population. (Hint: You may need to explicitly cast population numbers as integers with xs:int() to get the correct answer.)  

*****************************************************************:)

let $max := max(doc('countries.xml')//city/population)

return doc('countries.xml')/countries/country[city/population = $max]/data(@name)