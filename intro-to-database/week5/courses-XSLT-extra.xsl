<!-- Instructions: Each problem asks you to write a query in XPath or XQuery. Our back-end runs your query against the sample database using Saxon. It displays the result and compares your answer against the correct one. When you're satisfied with your solution for a given problem, click the "Submit" button to check your answer (you can click "Submit" an unlimited number of times). -->

<!-- Q1 - Return all courses with enrollment greater than 500. Retain the structure of Course elements from the original data.  -->

<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="//Course[@Enrollment > 500]">
       <xsl:copy-of select='.'/>
    </xsl:template>

    <xsl:template match='text()' />
</xsl:stylesheet>

<!-- Q2 - Remove from the data all courses with enrollment greater than 60, or with no enrollment listed. Otherwise the structure of the data should be the same.  -->

<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match='@*|node()'>
    <xsl:copy>
      <xsl:apply-templates select="*|@*|text()" />
    </xsl:copy>
  </xsl:template>	

<xsl:template match='Course[@Enrollment &gt; 60]' />
<xsl:template match='Course[count(@Enrollment) &lt; 1]' />
</xsl:stylesheet>
