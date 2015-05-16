<%-- 
    Document   : weatherinfo
    Created on : May 13, 2015, 5:12:16 PM
    Author     : edison
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">


<html>
    <head>

        <title>Arduino Weather Station Info</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />

        <script src="js/jqueryMin.js"></script>
        <script src="js/jqueryDropotronMin.js"></script>
        <script src="js/skelMin.js"></script>
        <script src="js/skelLayersMin.js"></script>
        <script src="js/init.js"></script>


        <script type="text/javascript">
            setInterval(refreshIframe2, 15000);
            function refreshIframe2() {
                var frame = document.getElementById("gambarchart");
                frame.src = frame.src;
            }
        </script>

    </head>
    <body class="index loading">

        <!-- Header -->
    <header id="header" class="alt">
        <h1 id="logo"><a href="index.jsp">Arduino <span>Weather Station</span></a></h1>
        <nav id="nav">
            <ul>
                <li class="current"><a href="weatherinfo.jsp">Refresh</a></li>
                <!-- <li><a href="#" class="button special">RELOAD</a></li> -->
            </ul>
        </nav>
    </header>

    <!-- Banner -->
    <section id="banner">
        <div class="inner">

            <header>
                <h2>Arduino Weather Station Info</h2>
            </header>
            <p>Online Weather Monitoring<br />
                with <strong>Arduino + Ethernet Shield</strong>
            </p>
            <footer>
                <ul class="buttons vertical">
                    <li><a href="#main" class="button fit scrolly">Monitor!</a></li>
                </ul>
            </footer>

        </div>

    </section>

    <!-- Main -->
    <article id="main">
        <p style="text-align: center;"><font size= 16px>Weather Data</font></p>
        <header class="special container">
            <p style="text-align: center;"><iframe id="gambarchart" src="https://docs.google.com/spreadsheets/d/1JxaPUnpTkVobUFEN3_pTAjCYroBPm586udtUbIC3w-w/embed/oimg?id=1JxaPUnpTkVobUFEN3_pTAjCYroBPm586udtUbIC3w-w&amp;oid=326494314&amp;zx=fvdoku6aa6hy" width="610" height="450" ></iframe>

                <iframe src="https://docs.google.com/spreadsheets/d/1amf7GlXC3Za7KWuXQ-tTDtAe4qltvUEOlqjMb8TRf9o/pubhtml?widget=true&amp;headers=false" width="800" height="450"></iframe></p>
            <p>&nbsp;</p>
        </header>

        <!-- One -->
        <section class="wrapper style2 container special-alt">
            <div class="row half">
                <div class="8u">

                    <header>

                        <h2>Arduino <strong>Weather Station Info</strong> :)</h2>
                    </header>
                    <p>Arduino weather station with Google Appspot (App Engine).</p>


                    <footer>
                        <ul class="buttons">
                            <li><a href="index.jsp" class="button">See how we did it!</a></li>
                        </ul>
                    </footer>

                </div>
                <div class="4u skel-cell-important">

                    <ul class="feature-icons">
                        <img src="images/arduinoethernet.png">
                    </ul>

                </div>
            </div>
        </section>
    </article>
    <!-- Footer -->
    <footer id="footer">

        <ul class="icons">
            <li><a href="#" class="icon circle fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="#" class="icon circle fa-facebook"><span class="label">Facebook</span></a></li>
            <li><a href="#" class="icon circle fa-google-plus"><span class="label">Google+</span></a></li>
            <li><a href="#" class="icon circle fa-github"><span class="label">Github</span></a></li>
            <li><a href="#" class="icon circle fa-dribbble"><span class="label">Dribbble</span></a></li>
        </ul>

        <span class="copyright">&copy; 2015. edisonhund. All rights reserved. Built with Google App Engine. HTML5 UP.</span>

    </footer>

</body>
</html>

