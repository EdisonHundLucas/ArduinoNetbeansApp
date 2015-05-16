<%-- 
    Document   : index
    Created on : 19-Jul-2014, 19:07:42
    Author     : hund
    http://weather-info-1.appspot.com/
    http://localhost:8080/_ah/admin
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/loose.dtd">

<html lang="en" class="no-js">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Arduino Weather Station Info</title>
        <meta name="description" content="On scroll header animations" />
        <meta name="keywords" content="on scroll" />
        <meta name="author" content="Codrops" />
        <link rel="shortcut icon" href="images/arduinoethernet.png">
        <link rel="stylesheet" type="text/css" href="css/normalize.css" />
        <link rel="stylesheet" type="text/css" href="css/component.css" />
        <script src="js/modernizrCustom.js"></script>

    </head>
    <body>
        <div class="container">
            <header id="ha-header" class="ha-header ha-header-large">
                <div class="ha-header-perspective">
                    <div class="ha-header-front">
                        <h1><span>Arduino Weather Station Info</span></h1>
                        <nav>
                            <a href="weatherinfo.jsp">&lsaquo; Show Data</a>
                        </nav>
                    </div>
                    <div class="ha-header-bottom">
                        <nav>
                            <a href="weatherinfo.jsp">Arduino Weather Station Info</a>
                        </nav>
                    </div>
                </div>
            </header>
            <section>
                <p> The project has the overall objective to conduct a thorough review of the Arduino platform, its components and programming
                    language for developing a weather station with a reliable device for transmitting information. If possible, storage, study and
                    publication of data so that the records can be viewed through an application. </p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p> The application will also have the possibility to record the information captured by the station simultaneously with the database
                    in a table using resources the application programming interface in real time, providing an option to get free of cost data that
                    can be accessed from any internet point. </p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-hide" data-animate-up="ha-header-small">
                <p> In this sense, the specific objectives of the project include the analysis and research which are existing Arduino components on
                    the market that can make up a weather station with automatic transmission. And so, with the identification of components, study
                    the database of communication and the transmission type to be applied to the project. Also included in these objectives, the
                    study of behavior and sensor reliability that can be adapted to the Arduino platform. </p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-show" data-animate-up="ha-header-hide">
                <p> Two units will be developed, the first collection unit will be installed in a certain place with all collectors sensor
                    information, which will be equipped with a solar panel and extra batteries that will be used for power supply when no solar
                    light, so as have the ability to record information in a memory card, so that when there is no communication with the other base,
                    continue to record the information. </p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-show" data-animate-up="ha-header-hide">
                <p> The second base unit will be installed in a place with no more than 100 meters away connected
                    to an internet terminal, without the need for a computer to mediate the information to be published directly into a database. If
                    you have problems with internet and with electricity for over a week, the data collected by the first unit to be collected
                    manually, however, if the connection is established before this period the records obtained during the time no connection will be
                    made automatically.</p>
            </section>         
            <section class="ha-waypoint" data-animate-down="ha-header-subshow" data-animate-up="ha-header-show">
                <p> The base unit will be able to receive information from a network of collection units and can thus be monitored, a large area with
                    only one unit connected to the internet. The communication between the bases is in accordance with the IEEE 802.15.4 protocol,
                    via a transmitter and a receiver in the case of the two bases proposed in this work. Sensors that may be used by collection unit
                    are: temperature, atmospheric pressure, altitude, humidity, sunshine, rain gauge, anemometer and anemoscope. </p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-show" data-animate-up="ha-header-subshow">
                <p> According to the results of this project objective is to identify the Arduino platform components can be considered reliable and
                    useful in developing an automatic weather station, aiming to develop the project at a lower cost than conventional stations. As
                    well as compare the information recorded by the station developed with data obtained from a commercial weather station already
                    in place to assess the degree of accuracy. </p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>Arduino is an electronic prototyping platform of free hardware and single board,
                   created by Massimo Banzi and David Cuartielles in 2005.The platform is designed with an Atmel AVR microcontroller with input support / built out, a language
                   standard programming, which originates from Wiring and is essentially C / C ++. The goal of the project is
                   create tools that are affordable, low cost, flexible and easy to use by artists and
                   amateurs. Especially for those who would not reach to the most sophisticated controllers and
                   more complicated tools.</p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                  <p>It can be used for the development of independent interactive objects, or to be connected
                     to a host computer. A typical Arduino plate comprises a controller, a few lines of I / O
                     digital and analog, plus a serial or USB interface to connect to the host, which is used to
                     schedule it and interacted it in real time. It itself does not have any network resource, but it is common to combine
                     one or more Arduinos thereby extensions using appropriate shields calls.</p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                  <p>Its plate consists of an Atmel AVR 8-bit microcontroller with additional components to facilitate
                     programming and incorporation into other circuits. An important aspect is the standard way that connectors
                     They are exposed, allowing the CPU to be connected to other expandable modules, known as shields. The Arduinos
                     use the original number of megaAVR chips, especially the ATmega8, ATmega168, ATmega328 and ATmega1280; however
                     Many other processors clones were used by them.</p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                  <p>The vast majority of boards includes a linear regulator of 5 volts and a 16 MHz crystal oscillator (which may
                     variants having a ceramic resonator), although some schemes use as LilyPad to 8 MHz and dispense
                     a regulator built-in tension, to have a specific form factor constraints. Besides being microcontroller,
                     the component is also pre-programmed with a bootloader that simplifies the loading of programs to the chip
                     built-in flash memory, compared to other devices that usually require an external chip programmer.</p>
            </section>

            <IMG class="displayed" src="images/uno.jpg">

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>The Arduino IDE is a cross-platform application written in Java derived from Processing and Wiring projects.
                   It is outlined to introduce programming to artists and people unfamiliar with the development
                   software. It includes a code editor with syntax highlighting features, matching parentheses and indentation
                   machine, capable of compiling and loading programs for the board with a single click. Thus there is no
                   need to edit Makefiles or run programs from the command line environments.</p>
            </section>

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>Having a library called "Wiring", you can use the C / C ++ programming language to desenvolcimento
                   codes. This lets you easily create many input and output operations, and to define only
                   two functions in order to make a functional program:</p>
            </section>

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>setup () - Inserted at the beginning, which can be used to boot configuration.</p>
                <p>loop () - Call to repeat a command block or wait until it is turned off.</p>
            </section>

            <IMG class="displayed" src="images/ide.png">

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>The main purpose of a system is to facilitate Arduino prototyping, implementation or control of emulation
                    Interactive systems for domestic, commercial or mobile level, as the control system PLC
                    industrial operation. With it you can send or receive from basically any system information
                    electronic, how to identify the approach of a person and vary the intensity of the ambient light as the
                    your arrival. Or open the windows of an office in accordance with the intensity of sunlight and ambient temperature.
                    The fields of activity for the control systems are immense and may have applications in the printing area
                    3D, robotics, transportation engineering, agricultural engineering and music.</p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large"> 
                 <p>This sensor has a calibrated digital signal output with a complex sensor
                    temperature and humidity. Its technology guarantees high confiabilidae and excellent stability
                    long-term. This sensor includes a resistive element and a measuring temperature sensor
                    realativa moisture. It has excellent quality, fast response, anti-interference ability and high cost performance advantages.
                    Each DHT11 sensor is extremely accurate calibration of humidity realtiva. However, tests in certain areas
                    will esenciais for accurate calibration.</p>
                 </section>
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>A single-wire serial interface system is integrated with Sendor which makes quick and easy reading of data.
                   The small size, low power consumption and signal transmission distance up to 20 meters,
                   It causes the sensor can be used in various applications. The sensor has four pins in a single line.
                   This sensor will be used specifically to capture realitiva moisture data.</p>
            </section>

            <IMG class="displayed" src="images/DHT11_Pins.jpg">

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>The LDR (light dependent resistor) is a type of resistor ranging from resistance from the light
                   captured environment. It presents the characteristic of resistance change with change in brightness,
                   that is, when the brightness increases and its resistance decreases when the brightness decreases its
                   resistance increases to KOhm order.</p>
            </section>

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>Through this feature can use this sensor to detect the ambient brightness for
                   determining the level of sunlight, for example.</p>
            </section>

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>In the reading station of the LDR sensor is made through an analog input Arduino, which will
                    converting the analog signal to digital, between 0 and 1023 depending on the amount of light in the environment. like this
                    value can check the variation in light serial terminal, and identifying the environmental insolation level.</p>
            </section>
            <IMG class="displayed" src="images/ldr.jpg">

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>The BMP180 digital barometric pressure sensor is a sensor of high precision and low power.
                    It offers a read range 300-1100 hPa with reduced acuity 0.02 hPa in resolution module
                    advanced. Piezoresistividade is based on technology which is the property of materials that characterizes
                    the dependence of the electrical resistivity to mechanical deformation for better accuracy, robustness and stability
                    long-term. These sensors come factory calibrated with calibration coefficients stored in ROM.</p>
            </section>
            <IMG class="displayed" src="images/pressao.jpg">

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>This board with standard spacing of 0.1 "can fit into a breadboard. The VCC can be between 1.8 and 3.6V
                    and their lines of I / O can support up to 5V. Typically must be fed with a regulated source of 3.3V. the aliemntações
                    and digital logic (VDDD and VDDA) are connected to a single pin but decoupled separately. It can be connected
                    a microcontroller Arduino through the library "Wire".The rain gauge is an apparatus used to collect and meteorological
                    measuring in millimeters linear, the amount liquid or solid (rain, snow, hail) precipitates during a given time and place.</p>
            </section>
            <IMG class="displayed" src="images/pluvio.jpg">
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>This sensor is of the self-emptying bucket. Each 0.011 "
                    (0.2794 mm) of rain causes a momentary contact closure that can
                    It is recorded with a digital counter, microcontroller or interrupt input.
                    The meter switch is connected to two central drivers who are
                    attached to a cable with RJ11 terminal. The anemometer measures the wind speed of the horizontal component,
                    which is essential for the calculation of weather forecasts.</p>
            </section>
            <IMG class="displayed" src="images/anemoscopio.jpg">
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>The cup anemometer is the most currently used, it works through interruptions identified by a magnet.
                    The wind speed of 1,492 MPH (2.4km / h) causes the count cycle rotate once per second.
                    The anemometer switch is connected to two internal conductors with RJ11 cable shared by anemometer
                    and the vane (pins 2 and 3). The pinwheel is the most complicated of exeplificados sensors so far. has
                    eight switches, each connected to a different resistance. The weather vane of the magnet
                    You can effect two registers at a time, allowing up to 16 different
                    directions to be indicated. An external resistor may be used to form a
                    voltage divider, producing an output voltage that can be measured with
                    an analog-digital converter.</p>
            </section>
            <IMG class="displayed" src="images/anemometro.jpg">
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>One of the determining factors for the versatility and popularity of the Arduino platform are the shields.
                    They are circuit boards that can be connected to the Arduino, fitting perfectly over it,
                    and expanding its capabilities. These plates may include LCD displays, sensors, communications modules or
                    Relays, for example. The expansion capability enables a multitude of applications simply and quickly.
                    To set up the weather station proposed in this paper will be used some specific shields to be
                    specified below. The solar charger is a shield that lets you load rechargeable batteries.
                    You can use several batteries should only connect them at 5V output, or engage in a Li-ion battery and a panel
                    solar to form an autonomous sensor unit with auto charging through solar expoxição.
                    The maximum current supplied by the shield can reach 700mA.</p>
            </section>
            <IMG class="displayed" src="images/solar.jpg">

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>The Ethernet Shield allows an Arduino board to connect to the internet or local ethernet network.
                   It is based on Ethernet Wiznet W51000 chip providing a stack (TCP / IP). The Ethernet Shield support Arduino
                   up to four simultaneous connections. To use this shield must use the Ethernet library to write
                   Programs that connect to the internet using this shield.</p>
            </section>
            <IMG class="displayed" src="images/ethernet.jpg">

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>Weather station shield allows connecting the anemometer sensors, Anemoscope and rain gauge directly on the Arduino board,
                   It is equipped with reception points for RJ11 cables for the sensors mentioned above.
                   There is support for installing a GPS module, but is a separate component. This shield oprera with the voltage
                   3.3v to 16v.</p>
            </section>
            <IMG class="displayed" src="images/weather.jpg">
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>The Arduino Xbee Shield is a component specially developed to facilitate wireless communication of a
                   Arduino with a Xbee module. Its structure, with reset button and connectors, alloy compact and reliable
                   all pins of the XBee module to the Arduino board.</p>
            </section>
            <IMG class="displayed" src="images/xbee.jpg">
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
               <p>The ZigBee term refers to a set of specifications for wireless communication between electronic devices,
                  with an emphasis on low power operation, low data transmission rate and low implementation cost.
                  This set of specifications defines subsequent layers of the OSI model to those established by the IEEE 802.15.4 standard.
                  It was thought to inteligar small data collection and control units using RF signals unlicensed.
                  The technology used is comparable to Wi-Fi and Bluetooth networks and differentiates these by
                  develop lower consumption, at a reduced range (about 100 meters) and communication between two units
                  It can be repeated successively by the existing units on the network until it reaches the final destination. All points
                  the network can act as relays information. A mesh (mesh) ZigBee units can be carried out
                  in domestic or industrial extension without using electrical connections therebetween.
                  The XBEE uses the frequency of 2.4Ghz and the IEEE 802.15.4 standard (the same used in Zigbee). With XBEE can make communication between microcontrollers, computers or any device with serial port! One can make point-to-point connections or even multi-network connections.</p>
            </section>
            <IMG class="displayed" src="images/xbee2.jpg">
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>An outline of the scenario, which is part of the system proposed in this work can be seen below. In this way,
                   the information handled by the station can be accessed from any environment with Internet access.</p>
            </section>
            <IMG class="displayed" src="images/scheme.png">

            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                <p>To develop a weather station with automatic transmission is necessary the required infrastructure
                    is expected from the stage of identifying how much information will be captured and which targeted sites for installation.
                    Also in this context, during the project it is necessary to check all nessesários requirements for storage
                    devices, such as cash that resists time, the device to capture sunlight to the light sensor,
                    and adaptation of a solar panel. All this study servant primarily to prevent waste that would result in lost time and financial loss.
                    Thus, the infrastructure of the proposed work is able to monitor how many sensors to Arduino platform
                    allow. Leaving the upgradeability more sensors or less sensors according to the user requirement.</p>
            </section>
            <section class="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-large">
                </br></br></br></br>
                <small><p>  2015. edisonhund. All rights reserved. Built with Google App Engine. HTML5 UP. </p></small>
            </section>
            <!--<div class="scroll">Scroll down</div>-->
        </div><!-- /container -->
        <script src="js/jqueryMin.js"></script>
        <script src="js/waypointsMin.js"></script>
        <script>
            var $head = $( '#ha-header' );
            $( '.ha-waypoint' ).each( function(i) {
                var $el = $( this ),
                animClassDown = $el.data( 'animateDown' ),
                animClassUp = $el.data( 'animateUp' );

                $el.waypoint( function( direction ) {
                    if( direction === 'down' && animClassDown ) {
                        $head.attr('class', 'ha-header ' + animClassDown);
                    }
                    else if( direction === 'up' && animClassUp ){
                        $head.attr('class', 'ha-header ' + animClassUp);
                    }
                }, { offset: '100%' } );
            } );
        </script>
    </body>
</html>