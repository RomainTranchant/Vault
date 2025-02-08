![https://i.imgur.com/PMsofWO.jpeg|660x283](https://i.imgur.com/PMsofWO.jpeg)

Let's break down these DNS handling exercises, focusing on each type of DNS record and cache management, while simplifying the process.

When you try to access a domain (e.g., [www.example.com](http://www.example.com/)), the DNS resolution process is used to translate that domain into an IP address that can be used to establish a connection to the appropriate server. The three key components in DNS resolution you mentioned — A record, local cache, and CNAME record — each play different roles in the process. Here's a breakdown of how each is checked and their relative speeds. In summary, **local cache** is the fastest method for DNS resolution, followed by direct retrieval of an **A record** from DNS servers. A **CNAME record** resolution is slower due to the additional query needed to resolve the target domain.

### A-Record Exercise

An A-Record maps a domain or hostname to an IP address. Let's go through the steps:

1. **Initial Setup**: Log into your domain controller (referred to as DC) using your admin account.
    
2. **Check Connectivity**: From a client machine, try to ping a hostname ("mainframe"). Notice it fails because there's no DNS record.
    
    ![https://i.imgur.com/cfSCIrt.png|624x213](https://i.imgur.com/cfSCIrt.png)
    
3. **Create A-Record**: On your DC, add a new A-Record for "mainframe" pointing to the DC's Private IP address.
    
    ![https://i.imgur.com/d3a8AIs.png|624x434](https://i.imgur.com/d3a8AIs.png)
    
4. **Verify Connectivity**: Go back to the client machine and try to ping "mainframe" again. This time it should succeed because the DNS record exists.
    

### Local DNS Cache Exercise

Local DNS cache stores DNS query results temporarily to speed up subsequent requests:

1. **Modify A-Record**: On your DC, change the "mainframe" record address to 8.8.8.8.
    
    ![https://i.imgur.com/cDIQa1U.png](https://i.imgur.com/cDIQa1U.png)
    
2. **Observe Cache**: Ping "mainframe" from the client machine and notice it still resolves to the old address due to cached data.
    
    ![https://i.imgur.com/3lE4JRK.png](https://i.imgur.com/3lE4JRK.png)
    
3. **View Cache**: Use the command `ipconfig /displaydns` to observe the current cache. You can use the command `ipconfig /displaydns > dns.txt Open the notepad with the command` notepad dns.txt`
    
4. **Flush Cache**: Clear the local DNS cache using `ipconfig /flushdns`.
    
5. **Verify Update**: Ping "mainframe" again from the client machine. It should now resolve to the updated address (8.8.8.8), showing that the cache has been refreshed.
    
    ![https://i.imgur.com/7OJMBmx.png](https://i.imgur.com/7OJMBmx.png)
    

### CNAME Record Exercise

A CNAME Record maps an alias of one domain to another domain:

1. **Create CNAME Record**: On your DC, create a CNAME record that points the host "search" to "[www.google.com](http://www.google.com/)".
    
    ![https://i.imgur.com/s2X2Jt8.png](https://i.imgur.com/s2X2Jt8.png)
    

![https://i.imgur.com/tk5DpC0.png](https://i.imgur.com/tk5DpC0.png)

2. **Verify Alias**: From the client machine, ping "search" and observe it resolves to "[www.google.com](http://www.google.com/)".
    
    ![https://i.imgur.com/in4jymh.png](https://i.imgur.com/in4jymh.png)
    
3. **Check CNAME Resolution**: Use `nslookup` to query "search" and see the CNAME mapping to "[www.google.com](http://www.google.com/)".
    

![https://i.imgur.com/kysgvkZ.png](https://i.imgur.com/kysgvkZ.png)