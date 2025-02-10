A senior network administrator requires you to map the Remote Branch Office network and discover the name of a recently installed switch that still needs an IPv4 address to be configured. Your task is to create a map of the branch office network. To map the network, you will use SSH for remote access and the Cisco Discovery Protocol (CDP) to discover information about neighboring network devices, like routers and switches.
![](https://i.imgur.com/KUa2VuO.png)

The local and remote administrative usernames and passwords are:
Local Network
Username: admin01
Password: S3cre7P@55
Branch Office Network
Username: branchadmin
Password: S3cre7P@55

# Part 1: Use SSH to Remotely Access Network Devices

On the Admin-PC, open a command prompt.
SSH into the gateway router at 192.168.1.1 using the username admin01 and the password S3cre7P@55.
PC> ssh –l admin01 192.168.1.1
Open
Password:
 
Edge1#

The `-L` option in the SSH command binds a local port to a remote port. This is known as local port forwarding or SSH tunneling. It allows a user to access a remote resource by bypassing firewall protection
![|719x533](https://i.imgur.com/CZ7bjMY.png)

Use the show ip interface brief and show interfaces commands to document the Edge1 router’s physical interfaces, IP addresses, and subnet masks in the Addressing Table.

![](https://i.imgur.com/1rV3DGM.png)


We can update the addressing table

![](https://i.imgur.com/nw3mmpe.png)

![](https://i.imgur.com/CMjgEyh.png)


From Edge1, use SSH to access the Remote Branch Office at 209.165.200.10 with the username branchadmin and the same password as above:
Edge1# ssh –l branchadmin 209.165.200.10
Open
Password:

Branch-Edge#
![](https://i.imgur.com/QHmgUcq.png)
We can see `GigabitEthernet0/0 192.168.3.249` and update the addressing table

Question:
After connecting to the Remote Branch Office what piece of previously missing information can now be added to the Addressing Table above?

The IP address you provided is **192.168.3.249/29**. The "/29" indicates the subnet mask.
A **/29** subnet mask means there are 29 bits set to **1** in the subnet mask, leaving 3 bits for host addresses. Here's the subnet mask in both binary and decimal form:
- **Binary:** `11111111.11111111.11111111.11111000`
- **Decimal:** `255.255.255.248`
So, the subnet mask for **192.168.3.249/29** is **255.255.255.248**.
![](https://i.imgur.com/Seh9nFE.png)

# Part 2: Use CDP to Discover Neighboring Devices
You are now remotely connected to the Branch-Edge router. Using CDP, begin looking for connected network devices.
Security best practice recommends only running CDP when needed, so CDP may need to be turned on. Use the` show cdp` command to display its status.

Branch-Edge# show cdp
% CDP is not enabled

![](https://i.imgur.com/J2HBixI.png)

  You need to turn on CDP, but it is a good idea to only broadcast CDP information to internal network devices and not to external networks. To do this, turn on the CDP protocol and then disable CDP on the S0/0/1 interface.
```
Branch-Edge# configure terminal

Branch-Edge(config)# cdp run

Branch-Edge(config)# interface s0/0/1

Branch-Edge(config-if)# no cdp enable

Branch-Edge(config-if)# exit
```

![](https://i.imgur.com/4PfCaLW.png)

Issue a `show cdp neighbors` command to find any neighboring network devices.
Note: CDP will only show connected Cisco devices that are also running CDP.

![|490x94](https://i.imgur.com/cNb0RmJ.png)

Is there a neighboring network device? What type of device is it? What is its name? On what interface is it connected? Is the device’s IP address listed? Record the information in the Addressing Table.
![](https://i.imgur.com/vR6Ow6U.png)

To find the IP address of the neighboring device use the` show cdp neighbors detail` command and record the ip address:
![](https://i.imgur.com/403ldJr.png)


We can update the addressing table

![](https://i.imgur.com/P3qqCKd.png)

Now that you know the IP address of the neighbor device, connect to it with SSH in order to discover other devices that may be its neighbors.
Note: To connect with SSH use the same Remote Branch Office username and password.
![](https://i.imgur.com/vPTXTPc.png)

We can update the addressing table

You are remotely connected to the next neighbor. Use the` show cdp neighbors` command, and the` show cdp neighbors detail` command, to discover other connected neighbor devices
![|712x482](https://i.imgur.com/JNzXIC3.png)

What types of network devices neighbor this device? Record any newly discovered devices in the Addressing Table. Include their hostname, interfaces, and IP addresses.
![](https://i.imgur.com/aQdg1ff.png)


Continue discovering new network devices using SSH and the show CDP commands. Eventually, you will reach the end of the network and there will be no more devices to discover.

Use the `ssh` command on 192.168.4.132 and use `show ip interface brief` and `show interfaces`
![](https://i.imgur.com/LuiKs1d.png)

Use the` show cdp neighbors` command, and the` show cdp neighbors detail` command, to discover other connected neighbor devices
![|539x160](https://i.imgur.com/EfnYBPZ.png)

![](https://i.imgur.com/M7OrvC9.png)

Use the `ssh` command on 192.168.4.132 and use the` show cdp neighbors` command, and the` show cdp neighbors detail` command, to discover other connected neighbor devices
![](https://i.imgur.com/5moCm8Q.png)

![](https://i.imgur.com/nH2ViOY.png)

We are at the end of the network, we are not discovering new devices

The updated addressing table

![](https://i.imgur.com/zGNfgnh.png)

Draw a topology of the Remote Branch Office network using the information you have gathered using CDP.
![](https://i.imgur.com/faisMTc.png)
