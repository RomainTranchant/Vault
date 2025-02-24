Here are some example of Application Attacks

![|900x509](https://i.imgur.com/09BTIGi.jpeg)


# Cross-Site Scripting

Attacks carried out through web applications are becoming increasingly common. Threat actors exploit vulnerabilities in the coding of a web-based application to gain access to a database or server.

Cross-site scripting (XSS) is a common threat to many web applications. This is how it works:

1. Cybercriminals exploit the XSS vulnerability by injecting scripts containing malicious code into a web page.
2. The web page is accessed by the victim, and the malicious scripts unknowingly pass to their browser.
3. The malicious script can access cookies, session tokens, or other sensitive information about the user, which is sent back to the cybercriminal.
4. Armed with this information, the cybercriminal can impersonate the user.

# Code Injection

Most modern websites use a database, such as a Structured Query Language (SQL) or an Extensible Markup Language (XML) database, to store and manage data. Injection attacks seek to exploit weaknesses in these databases.

### XML Injection Attack

An XML injection attack can corrupt the data on the XML database and threaten the security of the website.

It works by interfering with an application’s processing of XML data or query entered by a user.

Cybercriminals can manipulate this query by programming it to suit their needs. This will grant them access to all of the sensitive information stored on the database and allows them to make any number of changes to the website.

### SQL Injection Attack

Cybercriminals can carry out an SQL injection attack on websites or any SQL database by inserting a malicious SQL statement in an entry field.

This attack takes advantage of a vulnerability in which the application does not correctly filter the data entered by a user for characters in an SQL statement.

As a result, the cybercriminal can gain unauthorized access to information stored on the database, from which they can spoof an identity, modify existing data, destroy data or even become an administrator of the database server itself.

### DDL Injection Attack

A dynamic link library (DLL) file is a library that contains a set of code and data for carrying out a particular activity in Windows. Applications use this type of file to add functionality that is not built-in, when they need to carry out this activity.

DLL injection allows a cybercriminal to trick an application into calling a malicious DLL file, which executes as part of the target process.

### LDAP Injection Attack

The Lightweight Directory Access Protocol (LDAP) is an open protocol for authenticating user access to directory services.

An LDAP injection attack exploits input validation vulnerabilities by injecting and executing queries to LDAP servers, giving cybercriminals an opportunity to extract sensitive information from an organization’s LDAP directory.

# Buffer Overflow

Buffers are memory areas allocated to an application. A buffer overflow occurs when data is written beyond the limits of a buffer. By changing data beyond the boundaries of a buffer, the application can access memory allocated to other processes. This can lead to a system crash or data compromise, or provide escalation of privileges.

These memory flaws can also give attackers complete control over a target’s device. For example, an attacker can change the instructions of a vulnerable application while the program is loading in memory and, as a result, can install malware and access the internal network from the infected device.

# Remote Code Executions

Remote code execution allows a cybercriminal to take advantage of application vulnerabilities to execute any command with the privileges of the user running the application on the target device.

Privilege escalation exploits a bug, design flaw, or misconfiguration in an operating system or application to gain access to resources that are normally restricted.

# Cross-Site Request Forgery

CSRF describes the malicious exploit of a website where unauthorized commands are submitted from a user’s browser to a trusted web application.

A malicious website can transmit such commands through specially-crafted image tags, hidden forms or JavaScript requests — all of which can work without the user’s knowledge.

# Race Condition Attack

Also known as a time of check (TOC) or a time of use (TOU) attack, a race condition attack happens when a computing system that is designed to handle tasks in a specific sequence is forced to perform two or more operations simultaneously.

For example, operating systems are made up of threads — the smallest sequence of program instructions required to carry out a process. When two or more threads access shared data and try to change it at the exact same time, a race condition attack occurs.

# Improper Input Handling Attack

Data inputted by a user that is not properly validated can affect the data flow of a program and cause critical vulnerabilities in systems and applications that result in buffer overflow or SQL injection attacks.

# Error Handling Attack

Attackers can use error messages to extract specific information such as the hostnames of internal systems and directories or files that exist on a given web server — as well as database, table and field names that can be used to craft SQL injection attacks.

# Application Programming Interface (API) Attack

An API delivers a user response to a system and sends the system’s response back to the user. An API attack occurs when a cybercriminal abuses an API endpoint.

# Replay Attack

This describes a situation where a valid data transmission is maliciously or fraudulently repeated or delayed by an attacker, who intercepts, amends and resubmits the data to get the receiver to do whatever they want.

# Directory Traversal Attack

Directory traversal occurs when an attacker is able to read files on the webserver outside of the directory of the website. An attacker can then use this information to download server configuration files containing sensitive information, potentially expose more server vulnerabilities or even take control of the server!

# Resource Exhaustion Attack

These attacks are computer security exploits that crash, hang or otherwise interfere with a targeted program or system. Rather than overwhelming network bandwidth like a DoS attack, resource exhaustion attacks overwhelm the hardware resources available on the target’s server instead.