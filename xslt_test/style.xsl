<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" doctype-system="about:legacy-compat" encoding="utf-8" indent="yes"/>

<xsl:template match="name">
	<h2><xsl:apply-templates/></h2>
</xsl:template>

<xsl:template match="blog/info/name">
	<h2><xsl:apply-templates/></h2>
</xsl:template>

<xsl:template match="blog">
    <html>
        <head>
            <title>
                <xsl:value-of select="blog/info/name"/>
                - Zumi's Scratchpad
            </title>
        </head>
        <body>
            <header>
                <h1>Zumi's Scratchpad</h1>
                <nav><ul id="main-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Bloge</a></li>
                </ul></nav>
            </header>
            <article>
                <xsl:apply-templates/>
            </article>
            <footer>
                 © 2021 Zumi
            </footer>
        </body>
    </html>
</xsl:template>

</xsl:stylesheet>
