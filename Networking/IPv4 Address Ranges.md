### Private IPv4 Address Ranges

These addresses are used within private networks and are not routable on the internet.

| Range                          | CIDR Notation  | Address Count | Class |
| ------------------------------ | -------------- | ------------- | ----- |
| 10.0.0.0 to 10.255.255.255     | 10.0.0.0/8     | 16.7 million  | A     |
| 172.16.0.0 to 172.31.255.255   | 172.16.0.0/12  | 1 million     | B     |
| 192.168.0.0 to 192.168.255.255 | 192.168.0.0/16 | 65,536        | C     |

### Public IPv4 Address Range

Any IPv4 address that is not part of the above private ranges. These addresses are routable on the internet and must be unique worldwide.

| Examples             | Address Range                      |
| -------------------- | ---------------------------------- |
| Many ranges          | Any address outside private ranges |
|                      | (e.g., 8.8.8.8, 192.0.2.0)         |
| address ISP assigned | Typically assigned by ISPs         |
### Reserved Addresses

| Range                          | Definition                                                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| 0.0.0.0                        | Used to indicate an invalid, unknown, or non-applicable target                                                            |
| 127.0.0.0 to 127.255.255.255   | Loopback addresses, used for testing and diagnostics on a local machine                                                   |
| 169.254.0.0 to 169.254.255.255 | Link-local addresses, automatically assigned when a device cannot obtain an IP address from a DHCP server (APIPA Address) |
| 224.0.0.0 to 239.255.255.255   | Multicast addresses, used for one-to-many communication                                                                   |
| 240.0.0.0 to 255.255.255.254   | Reserved for future use, research, and development                                                                        |
