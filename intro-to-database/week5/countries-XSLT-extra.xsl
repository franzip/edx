<!-- Instructions: Each problem asks you to write a query in XPath or XQuery. Our back-end runs your query against the sample database using Saxon. It displays the result and compares your answer against the correct one. When you're satisfied with your solution for a given problem, click the "Submit" button to check your answer (you can click "Submit" an unlimited number of times). -->

<!-- Q1 - Remove from the data all countries with area greater than 40,000 and all countries with no cities listed. Otherwise the structure of the data should be the same. -->

<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match='/'>
    <countries>
    <xsl:for-each select="countries/country">
      <xsl:if test='count(city) > 0 and @area &lt; 40000' >
        <xsl:copy-of select='.' />
      </xsl:if>
    </xsl:for-each>
    </countries>
  </xsl:template>

  <xsl:template match='text()' />
</xsl:stylesheet>