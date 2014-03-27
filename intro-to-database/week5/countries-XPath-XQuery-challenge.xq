(:*******************************************************************

Instructions: Each problem asks you to write a query in XPath or XQuery. Our back-end runs your query against the sample database using Saxon. It displays the result and compares your answer against the correct one. When you're satisfied with your solution for a given problem, click the "Submit" button to check your answer (you can click "Submit" an unlimited number of times).

Your solution will need to reference doc("countries.xml") to access the data. 
*******************************************************************:)


(:****************************************************************

Q1 - Return the names of all countries that have at least three cities with population greater than 3 million. 

*****************************************************************:)

let $countries := doc('countries.xml')/countries/country

for $i in $countries
where count($i/city[population > 3000000]) > 2
return $i/data(@name)

(:****************************************************************

Q2 - Create a list of French-speaking and German-speaking countries. The result should take the form:

<result>
  <French>
    <country>country-name</country>
    <country>country-name</country>
    ...
  </French>
  <German>
    <country>country-name</country>
    <country>country-name</country>
    ...
  </German>
</result>

*****************************************************************:)

let $french := doc('countries.xml')//country[language = 'French']/data(@name)
let $german := doc('countries.xml')//country[language = 'German']/data(@name)

return <result>
  <French>
  {
    for $f in $french
    return <country>{$f}</country>
    
  }
  </French>
  <German>
  {
    for $g in $german
    return <country>{$g}</country>
  }
  </German>
  </result>

(:****************************************************************

Q3 - Return the names of all countries containing a city such that some other country has a city of the same name. (Hint: You might want to use the "preceding" and/or "following" navigation axes for this query, which were not covered in the video or our demo script; they match any preceding or following node, not just siblings.) 

*****************************************************************:)

let $countries := doc('countries.xml')/countries/country,
  $cities := $countries//city
for $i in $cities
where $i/data(name) = $i/following::*/data(name) or $i/data(name) = $i/preceding::*/data(name)
return $i/parent::country/data(@name)

(:****************************************************************

Q4 - Return the average number of languages spoken in countries where Russian is spoken. 

*****************************************************************:)

let $russian := doc('countries.xml')//country[language = 'Russian']

return avg($russian/count(language))

(:****************************************************************

Q5 - Return all country-language pairs where the language is spoken in the country and the name of the country textually contains the language name. Return each pair as a country element with language attribute, e.g.,

<country language="French">French Guiana</country> 

*****************************************************************:)

let $countries := doc('countries.xml')/countries/country
for $i in $countries
  for $j in $i/language
    where contains($i/data(@name), $j)
return <country language="{data($j)}">{$i/data(@name)}</country>

(:****************************************************************

Q6 - Return all countries that have at least one city with population greater than 7 million. For each one, return the country name along with the cities greater than 7 million, in the format:

<country name="country-name">
  <big>city-name</big>
  <big>city-name</big>
  ...
</country>

*****************************************************************:)

let $countries := doc('countries.xml')//country
for $i in $countries
where count($i/city[population > 7000000]) > 0

return 
<country name="{$i/data(@name)}">
{
  for $city in $i/city
    where $city[population > 7000000]
    return <big>{$city/data(name)}</big>
}
</country>

(:****************************************************************

Q7 - Return all countries where at least one language is listed, but the total percentage for all listed languages is less than 90%. Return the country element with its name attribute and its language subelements, but no other attributes or subelements. 

*****************************************************************:)

let $countries := doc('countries.xml')//country

for $i in $countries
where sum($i/language/@percentage) < 90 and count($i/language) > 0
return 
    <country name="{$i/data(@name)}">
    {
      for $j in $i/language
      return $j
    }
    </country>

(:****************************************************************

Q8 - Return all countries where at least one language is listed, and every listed language is spoken by less than 20% of the population. Return the country element with its name attribute and its language subelements, but no other attributes or subelements. 

*****************************************************************:)

let $countries := doc('countries.xml')//country

for $i in $countries
where every $j in $i/language satisfies $j/data(@percentage) < 20
return 
<country name="{$i/data(@name)}">
{
  for $j in $i/language
  return $j
}
</country>

(:****************************************************************

Q9 - Find all situations where one country's most popular language is another country's least popular, and both countries list more than one language. (Hint: You may need to explicitly cast percentages as floating-point numbers with xs:float() to get the correct answer.) Return the name of the language and the two countries, each in the format:

<LangPair language="lang-name">
  <MostPopular>country-name</MostPopular>
  <LeastPopular>country-name</LeastPopular>
</LangPair>

*****************************************************************:)

let $countries := doc('countries.xml')//country,
  $max_popular :=
    for $i in $countries[count(language) > 1]
      for $j in $i/language
        where xs:float($j/data(@percentage)) = xs:float(max($i/language/data(@percentage)))
        return $j,
  $min_popular :=
    for $i in $countries[count(language) > 1]
      for $j in $i/language
        where xs:float($j/data(@percentage)) = xs:float(min($i/language/data(@percentage)))
        return $j

for $max in $max_popular
  for $min in $min_popular
    where data($max) = data($min)
    return
      <LangPair language="{data($min)}">
      <MostPopular>{$max/parent::country/data(@name)}</MostPopular>
      <LeastPopular>{$min/parent::country/data(@name)}</LeastPopular>
      </LangPair>

(:****************************************************************

Q10 - For each language spoken in one or more countries, create a "language" element with a "name" attribute and one "country" subelement for each country in which the language is spoken. The "country" subelements should have two attributes: the country "name", and "speakers" containing the number of speakers of that language (based on language percentage and the country's population). Order the result by language name, and enclose the entire list in a single "languages" element. For example, your result might look like:

<languages>
  ...
  <language name="Arabic">
    <country name="Iran" speakers="660942"/>
    <country name="Saudi Arabia" speakers="19409058"/>
    <country name="Yemen" speakers="13483178"/>
  </language>
  ...
</languages>

*****************************************************************:)

let $countries := doc('countries.xml')/countries/country,
  $languages := $countries/language,
  $distinct_language := distinct-values($countries/data(language))
  return 
  <languages>
  {
    for $l_name in $distinct_language
      order by $l_name
      return 
        <language name="{$l_name}">
        {
          for $l in $languages
            where data($l) = $l_name
            return <country name="{data($l/parent::country/@name)}" speakers="{xs:int($l/parent::country/@population * $l/@percentage div 100) }"/>
        }
        </language>
  }
  </languages>