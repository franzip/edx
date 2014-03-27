<!-- Instructions: Each problem asks you to write a query in XPath or XQuery. Our back-end runs your query against the sample database using Saxon. It displays the result and compares your answer against the correct one. When you're satisfied with your solution for a given problem, click the "Submit" button to check your answer (you can click "Submit" an unlimited number of times). -->

<!-- Q1 - Return all countries with population between 9 and 10 million. Retain the structure of country elements from the original data.  -->

<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match='country[@population &gt; 9000000 and @population &lt; 10000000]'>
    <xsl:copy-of select='.'/>
  </xsl:template>

  <xsl:template match='text()' />
</xsl:stylesheet>

<!-- Q2 - Find all country names containing the string "stan"; return each one within a "Stan" element. (Note: To specify quotes within an already-quoted XPath expression, use quot;.) -->

<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match='country[contains(data(@name), &quot;stan&quot;)]'>
    <Stan>
    <xsl:value-of select='@name' />
    </Stan>
  </xsl:template>

  <xsl:template match='text()' />
</xsl:stylesheet>