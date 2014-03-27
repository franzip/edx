<!-- Instructions: Each problem asks you to write a query in XPath or XQuery. Our back-end runs your query against the sample database using Saxon. It displays the result and compares your answer against the correct one. When you're satisfied with your solution for a given problem, click the "Submit" button to check your answer (you can click "Submit" an unlimited number of times). -->

<!-- Q1 - Return a list of department titles. -->

<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="Department">
       <Title><xsl:value-of select="Title" /></Title>
    </xsl:template>
</xsl:stylesheet>

<!-- Q2 - Return a list of department elements with no attributes and two subelements each: the department title and the entire Chair subelement structure. -->

<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="Department">
       <Department>
       <Title><xsl:value-of select="Title" /></Title>
       <xsl:copy-of select='Chair'/>
       </Department>
    </xsl:template>
</xsl:stylesheet>
